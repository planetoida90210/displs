import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <header>
        <Link href="/">
            <Image src="https://links.papareact.com/a943ae" alt="Disney Logo" width={120} height={100} className='cursor-pointer invert'/>
        </Link>
    </header>
  )
}

export default Header