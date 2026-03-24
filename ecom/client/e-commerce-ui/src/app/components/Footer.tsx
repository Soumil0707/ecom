import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-0 md:items-start bg-gray-800 p-8 rounded-lg md:justify-between mt-16">
            <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center gap-1 justify-center md:justify-start">
                <Image src="/logo.png" alt="logo" width={36} height={36} />
                <p className="hidden md:block text-md font-medium tracking-wider text-white">Sunrise</p>
            </Link>
            <p className="text-sm text-gray-400">© {currentYear} Sunrise. </p>
            <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>
            <div className="flex flex-col text-sm gap-4 text-gray-400 items-center  md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href='/'>Homepage</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Terms of Service</Link>
                <Link href='/'>Privacy Policy</Link>
            </div>
            <div className="flex flex-col text-sm gap-4 text-gray-400 items-center  md:items-start">
                <p className="text-sm text-amber-50">Products</p>
                <Link href='/'>ALL Produscts</Link>
                <Link href='/'>New Arrivals</Link>
                <Link href='/'>Best Sellers</Link>
                <Link href='/'>Sale</Link>
            </div>
            <div className="flex flex-col text-sm gap-4 text-gray-400 items-center  md:items-start">
                <p className="text-sm text-amber-50">Company</p>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>Affilate Program</Link>
            </div>
        </div>
    )
}

export default Footer