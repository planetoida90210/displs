import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggler } from '@/components/ThemeToggler'


function Header() {
  return (
    <header>
        <Link href="/">
            <Image src="https://links.papareact.com/a943ae" alt="Disney Logo" width={120} height={100} className='cursor-pointer invert-0 dark:invert'/>
        </Link>
        <div className='flex space-x-2'>
            {/* Genre Dropdown */}
            {/* Search Input */}
            <ThemeToggler />
            {/* ThemeToggler */}
        </div>
    </header>
  )
}

export default Header