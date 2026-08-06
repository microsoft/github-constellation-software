import GithubSlugger from 'github-slugger'
import rootReadme from '../README.md?raw'
import usageBasedBillingReadme from '../usage-based-billing/README.md?raw'

export type PageId = 'home' | 'usage-based-billing'

export type PageContent = {
  id: PageId
  label: string
  eyebrow: string
  description: string
  markdown: string
  sourcePath: string
}

export type TableOfContentsItem = {
  id: string
  title: string
}

export const pages: Record<PageId, PageContent> = {
  home: {
    id: 'home',
    label: 'Resource hub',
    eyebrow: 'Public resource hub',
    description: 'Migrate, adopt, and scale GitHub across the CSI portfolio.',
    markdown: rootReadme,
    sourcePath: 'README.md',
  },
  'usage-based-billing': {
    id: 'usage-based-billing',
    label: 'Usage-based billing',
    eyebrow: 'GitHub Copilot guidance',
    description: 'A practical UBB playbook for CSI portfolio companies.',
    markdown: usageBasedBillingReadme,
    sourcePath: 'usage-based-billing/README.md',
  },
}

function markdownText(value: string) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_~`]/g, '')
    .trim()
}

export function getTableOfContents(markdown: string): TableOfContentsItem[] {
  const slugger = new GithubSlugger()
  const headings = markdown.matchAll(/^(#{1,6})\s+(.+?)\s*#*\s*$/gm)
  const items: TableOfContentsItem[] = []

  for (const [, hashes, rawTitle] of headings) {
    const title = markdownText(rawTitle)
    const id = slugger.slug(title)

    if (hashes.length === 2) {
      items.push({id, title})
    }
  }

  return items
}
