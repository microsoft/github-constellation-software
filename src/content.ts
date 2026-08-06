import GithubSlugger from 'github-slugger'
import buildDaysReadme from '../build-days/README.md?raw'
import csiPricingReadme from '../csi-pricing/README.md?raw'
import rootReadme from '../README.md?raw'
import usageBasedBillingReadme from '../usage-based-billing/README.md?raw'

export const pageIds = ['home', 'build-days', 'csi-pricing', 'usage-based-billing'] as const
export type PageId = (typeof pageIds)[number]

export type PageContent = {
  id: PageId
  route: string
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
    route: '',
    label: 'Resource hub',
    eyebrow: 'Public resource hub',
    description: 'Migrate, adopt, and scale GitHub across the CSI portfolio.',
    markdown: rootReadme,
    sourcePath: 'README.md',
  },
  'build-days': {
    id: 'build-days',
    route: 'build-days',
    label: 'CSI Build Days',
    eyebrow: 'Upcoming sessions and recordings',
    description: 'Register for upcoming tracks and catch up on previous sessions.',
    markdown: buildDaysReadme,
    sourcePath: 'build-days/README.md',
  },
  'csi-pricing': {
    id: 'csi-pricing',
    route: 'csi-pricing',
    label: 'CSI Pricing',
    eyebrow: 'Azure billing and discounts',
    description: 'Activate and verify CSI pricing for GitHub and Copilot.',
    markdown: csiPricingReadme,
    sourcePath: 'csi-pricing/README.md',
  },
  'usage-based-billing': {
    id: 'usage-based-billing',
    route: 'usage-based-billing',
    label: 'Usage-based billing',
    eyebrow: 'GitHub Copilot guidance',
    description: 'A practical UBB playbook for CSI portfolio companies.',
    markdown: usageBasedBillingReadme,
    sourcePath: 'usage-based-billing/README.md',
  },
}

export function isPageId(value: string | undefined): value is PageId {
  return pageIds.some(pageId => pageId === value)
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
