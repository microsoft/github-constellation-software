import {useEffect, useMemo, useState} from 'react'
import type {ComponentPropsWithoutRef, ReactNode} from 'react'
import {
  ArrowUpIcon,
  BookIcon,
  CalendarIcon,
  CodeIcon,
  CreditCardIcon,
  DeviceDesktopIcon,
  HomeIcon,
  LinkExternalIcon,
  LinkIcon,
  MarkGithubIcon,
  MoonIcon,
  RepoIcon,
  SunIcon,
  TagIcon,
} from '@primer/octicons-react'
import {BaseStyles, Button, IconButton, Label, Link, ThemeProvider} from '@primer/react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, {defaultSchema} from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import {getTableOfContents, isPageId, pages} from './content'
import type {PageId, TableOfContentsItem} from './content'

type ColorMode = 'auto' | 'day' | 'night'
type MarkdownExtraProps = {node?: unknown}

const repositoryUrl = 'https://github.com/microsoft/github-constellation-software'
const requestedPageId = document.body.dataset.page
const pageId: PageId = isPageId(requestedPageId) ? requestedPageId : 'home'
const siteRoot = document.body.dataset.siteRoot ?? './'
const themeStorageKey = 'github-csi-color-mode'
const imageModules = import.meta.glob<string>('../images/**/*', {
  eager: true,
  import: 'default',
  query: '?url',
})
const localImages = new Map(
  Object.entries(imageModules).map(([path, url]) => [`./images/${path.split('/images/')[1]}`, url]),
)
const markdownSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    div: [...(defaultSchema.attributes?.div ?? []), 'align'],
    img: [...(defaultSchema.attributes?.img ?? []), 'width', 'height'],
  },
}

const themeOptions: Array<{
  mode: ColorMode
  label: string
  icon: typeof DeviceDesktopIcon
}> = [
  {mode: 'auto', label: 'Use system theme', icon: DeviceDesktopIcon},
  {mode: 'day', label: 'Use light theme', icon: SunIcon},
  {mode: 'night', label: 'Use dark theme', icon: MoonIcon},
]

const navigationItems: Array<{
  id: PageId
  description: string
  icon: typeof HomeIcon
}> = [
  {id: 'home', description: 'Migrations, adoption, and scale', icon: HomeIcon},
  {id: 'build-days', description: 'Sessions and recordings', icon: CalendarIcon},
  {id: 'csi-pricing', description: 'Azure billing and discounts', icon: TagIcon},
  {id: 'usage-based-billing', description: 'Copilot UBB playbook', icon: CreditCardIcon},
]

function getInitialThemeIndex() {
  const storedMode = window.localStorage.getItem(themeStorageKey)
  const storedIndex = themeOptions.findIndex(option => option.mode === storedMode)
  return storedIndex >= 0 ? storedIndex : 0
}

function resolveRepositoryPath(href: string) {
  const [path, fragment] = href.split('#', 2)
  const sourceDirectory = pages[pageId].sourcePath.split('/').slice(0, -1)
  const segments = [...sourceDirectory]

  for (const segment of path.replace(/^\.\//, '').split('/')) {
    if (!segment || segment === '.') {
      continue
    }
    if (segment === '..') {
      segments.pop()
    } else {
      segments.push(segment)
    }
  }

  const resolvedPath = segments.join('/')
  return `${repositoryUrl}/blob/main/${resolvedPath}${fragment ? `#${fragment}` : ''}`
}

function normalizeHref(href: string | undefined) {
  if (!href) {
    return undefined
  }

  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href
  }

  if (href.startsWith('../README.md')) {
    return `${siteRoot}${href.slice('../README.md'.length)}`
  }

  const pageRoute = href.match(/^(?:\.\/|\.\.\/)?(build-days|csi-pricing|usage-based-billing)\/?(#.*)?$/)
  if (pageRoute) {
    const [, route, fragment = ''] = pageRoute
    return `${siteRoot}${route}/${fragment}`
  }

  if (href === '.github/ISSUE_TEMPLATE') {
    return `${repositoryUrl}/issues/new/choose`
  }

  if (/^(?:\.\/|\.\.\/)?[^?#]+\.md(?:#.*)?$/.test(href)) {
    return resolveRepositoryPath(href)
  }

  return href
}

function isExternalHref(href: string | undefined) {
  return Boolean(href && /^https?:\/\//.test(href))
}

function MarkdownLink({
  node: _node,
  href,
  children,
  ...props
}: ComponentPropsWithoutRef<'a'> & MarkdownExtraProps) {
  const normalizedHref = normalizeHref(href)
  const external = isExternalHref(normalizedHref)

  return (
    <Link
      {...props}
      href={normalizedHref}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
      {external ? <LinkExternalIcon className="external-link-icon" size={12} aria-hidden="true" /> : null}
    </Link>
  )
}

function MarkdownImage({
  node: _node,
  src,
  alt,
  ...props
}: ComponentPropsWithoutRef<'img'> & MarkdownExtraProps) {
  const imageKey = src?.replace('../images/', './images/')
  const resolvedSrc = (imageKey && localImages.get(imageKey)) || src

  return <img {...props} src={resolvedSrc} alt={alt ?? ''} loading="lazy" />
}

function AnchoredHeading({
  as: Heading,
  node: _node,
  id,
  children,
  ...props
}: ComponentPropsWithoutRef<'h2'> & {
  as: 'h2' | 'h3'
  children?: ReactNode
} & MarkdownExtraProps) {
  return (
    <Heading {...props} id={id}>
      {children}
      {id ? (
        <a className="heading-anchor" href={`#${id}`} aria-label="Link to this section">
          <LinkIcon size={16} aria-hidden="true" />
        </a>
      ) : null}
    </Heading>
  )
}

function SiteNavigation({currentPage}: {currentPage: PageId}) {
  return (
    <nav className="site-nav" aria-label="Site navigation">
      <p className="nav-heading">Explore</p>
      {navigationItems.map(item => {
        const Icon = item.icon
        const page = pages[item.id]
        const href = page.route ? `${siteRoot}${page.route}/` : siteRoot
        return (
          <a
            className="nav-item"
            data-active={item.id === currentPage ? 'true' : undefined}
            href={href}
            aria-current={item.id === currentPage ? 'page' : undefined}
            key={item.id}
          >
            <Icon size={18} aria-hidden="true" />
            <span>
              <strong>{page.label}</strong>
              <small>{item.description}</small>
            </span>
          </a>
        )
      })}

      <div className="nav-divider" />
      <p className="nav-heading">GitHub</p>
      <a className="nav-item nav-item-compact" href={repositoryUrl} target="_blank" rel="noreferrer">
        <RepoIcon size={18} aria-hidden="true" />
        <span>
          <strong>Repository</strong>
        </span>
        <LinkExternalIcon className="nav-external" size={14} aria-hidden="true" />
      </a>
      <a
        className="nav-item nav-item-compact"
        href="https://docs.github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <BookIcon size={18} aria-hidden="true" />
        <span>
          <strong>GitHub Docs</strong>
        </span>
        <LinkExternalIcon className="nav-external" size={14} aria-hidden="true" />
      </a>
    </nav>
  )
}

function TableOfContents({items}: {items: TableOfContentsItem[]}) {
  return (
    <nav className="toc" aria-label="On this page">
      <p className="nav-heading">On this page</p>
      <ol>
        {items.map(item => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function App() {
  const [themeIndex, setThemeIndex] = useState(getInitialThemeIndex)
  const currentTheme = themeOptions[themeIndex]
  const page = pages[pageId]
  const tableOfContents = useMemo(() => getTableOfContents(page.markdown), [page.markdown])

  const cycleTheme = () => {
    setThemeIndex(currentIndex => {
      const nextIndex = (currentIndex + 1) % themeOptions.length
      window.localStorage.setItem(themeStorageKey, themeOptions[nextIndex].mode)
      return nextIndex
    })
  }

  useEffect(() => {
    const scrollToHash = () => {
      const targetId = decodeURIComponent(window.location.hash.slice(1))
      if (!targetId) {
        return
      }
      window.requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView())
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  const ThemeIcon = currentTheme.icon

  return (
    <ThemeProvider colorMode={currentTheme.mode} dayScheme="light" nightScheme="dark">
      <BaseStyles className={`site-root page-${pageId}`}>
        <a className="skip-link" href="#readme-content">
          Skip to content
        </a>

        <header className="site-header">
          <div className="header-inner">
            <a className="brand" href={siteRoot} aria-label="GitHub at Constellation Software home">
              <span className="brand-mark">
                <MarkGithubIcon size={28} aria-hidden="true" />
              </span>
              <span className="brand-copy">
                <strong>GitHub @ CSI</strong>
                <small>Constellation Software</small>
              </span>
            </a>

            <div className="header-actions">
              <Button
                as="a"
                href={`${repositoryUrl}/blob/main/${page.sourcePath}`}
                target="_blank"
                rel="noreferrer"
                leadingVisual={CodeIcon}
              >
                <span className="button-label">View source</span>
              </Button>
              <IconButton
                icon={ThemeIcon}
                variant="invisible"
                aria-label={`${currentTheme.label}. Activate to switch themes.`}
                title={`${currentTheme.label}. Activate to switch themes.`}
                onClick={cycleTheme}
              />
            </div>
          </div>
        </header>

        <div className="mobile-nav">
          <SiteNavigation currentPage={pageId} />
        </div>

        <div className="page-layout">
          <aside className="sidebar">
            <SiteNavigation currentPage={pageId} />
          </aside>

          <main className="main-content">
            <div className="content-context">
              <div>
                <Label variant="accent">{page.eyebrow}</Label>
                <p>{page.description}</p>
              </div>
              <span className="readme-powered">
                <BookIcon size={16} aria-hidden="true" />
                Powered by {page.sourcePath}
              </span>
            </div>

            <details className="mobile-toc">
              <summary>On this page</summary>
              <ol>
                {tableOfContents.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
              </ol>
            </details>

            <article className="markdown-body readme-content" id="readme-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, [rehypeSanitize, markdownSchema], rehypeSlug]}
                components={{
                  a: MarkdownLink,
                  img: MarkdownImage,
                  h2: props => <AnchoredHeading as="h2" {...props} />,
                  h3: props => <AnchoredHeading as="h3" {...props} />,
                }}
              >
                {page.markdown}
              </ReactMarkdown>
            </article>

            <div className="page-end">
              <p>Maintained by the GitHub @ CSI team at Microsoft.</p>
              <Button as="a" href="#top" leadingVisual={ArrowUpIcon}>
                Back to top
              </Button>
            </div>
          </main>

          <aside className="toc-sidebar">
            <TableOfContents items={tableOfContents} />
          </aside>
        </div>

        <footer className="site-footer">
          <div>
            <MarkGithubIcon size={20} aria-hidden="true" />
            <span>GitHub @ Constellation Software</span>
          </div>
          <nav aria-label="Footer navigation">
            <a href={`${repositoryUrl}/issues/new/choose`} target="_blank" rel="noreferrer">
              Suggest a resource
            </a>
            <a href={`${repositoryUrl}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noreferrer">
              Contributing
            </a>
          </nav>
        </footer>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
