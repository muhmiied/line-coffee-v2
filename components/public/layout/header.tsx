import { HeaderClient } from './header-client'

export type NavLink = {
  href: string
  label: string
  disabled?: boolean
}

const NAV_LINKS: NavLink[] = [
  { href: '/',         label: 'الرئيسية' },
  { href: '/products', label: 'المنتجات' },
  { href: '#',         label: 'اصنع إسبريسوك', disabled: true },
  { href: '#',         label: 'اصنع نكهتك',    disabled: true },
  { href: '#',         label: 'المدونة',        disabled: true },
  { href: '#',         label: 'من نحن',         disabled: true },
  { href: '#',         label: 'تواصل معنا',     disabled: true },
]

export function Header() {
  return <HeaderClient links={NAV_LINKS} />
}
