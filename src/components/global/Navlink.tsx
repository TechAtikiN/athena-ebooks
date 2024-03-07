'use client'

// named imports
import { usePathname } from 'next/navigation'

// default imports
import Link from 'next/link'

interface Props {
  link: Navlink
}

export default function Navlink({ link }: Props) {
  const pathName = usePathname()

  return (
    <Link href={link.href} className={`
      ${pathName?.includes(link.href) ? 'text-accent' : 'text-gray-600'} px-5 text-sm font-semibold`}
    >
      {link.name}
    </Link>
  )
}
