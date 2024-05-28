"use client"

import Image from "next/legacy/image";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function NavBar(){
    // const {user} = useUser();
    const pathname = usePathname();
    const currentUrl = `${pathname}`;

    const [pathHighlight, setPathHighlight] = useState("")

    useEffect(() => {
        if (currentUrl == "/about-us"){
            setPathHighlight("about")
        }
        else if (currentUrl == "/"){
            setPathHighlight("home")
        }
    }, [currentUrl])
    
    return (
        <div className="oa-nav w-full">
            <nav className="flex justify-between items-center py-8 lg:py-4 px-11">
                <div className="flex items-center ">
                    <Link href="/" aria-current="page" className="md:mr-32"><Image src="/oa-word.png" alt="" width={100} height={33} /></Link>
                    <div className="items-center relative h-full hidden lg:flex">
                        <Link href="/" className="mr-8">
                            <div className={`uppercase text-sm ${pathHighlight=="home"? ' underline decoration-2 underline-offset-4': ''} montserrat`}>Home</div>
                        </Link>
                        <Link href="/" className="mr-8">
                            <div className={`uppercase text-sm ${pathHighlight=="about" ? ' underline decoration-2 underline-offset-4': ''} montserrat`}>About Us</div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;