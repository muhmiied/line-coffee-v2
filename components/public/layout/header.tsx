import { HeaderClient } from './header-client'

export type NavLink = {
  href: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { href: '/',        label: 'Home'     },
  { href: '/products', label: 'Products' },
  { href: '/about',    label: 'About'    },
  { href: '/contact',  label: 'Contact'  },
  { href: '/blog',     label: 'Blog'     },
]

export function Header() {
  return <HeaderClient links={NAV_LINKS} />
}
