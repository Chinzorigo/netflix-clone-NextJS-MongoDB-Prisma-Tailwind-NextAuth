import Image from 'next/image';


const Navbar = () => {
    return (
        <nav className="w-full fixed z-40">
            <div
                className="
                    px-4
                    md:px-10
                    py-6
                    flex
                    flex-row
                    items-center
                    transition-500
                    bg-zinc-900
                    bg-opacity-90
                "
            >
                <Image width={100} height={50} className='h-24 lg:h-7' src="/images/logo.png" alt="logo" />
            </div>
        </nav>
    )
}

export default Navbar;