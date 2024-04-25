import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="top-0 flex justify-between items-center py-10 lg:py-16 lg:px-32">
            <div className="flex items-center">
                <div className="px-5 block lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent side={'left'}>
                            <SheetHeader>
                                <SheetTitle>
                                    <Image
                                        className="lg:w-full lg:h-auto"
                                        src={logo}
                                        width={100}
                                        height={100}
                                        sizes=""
                                        alt="Street Smart"
                                    />
                                </SheetTitle>
                            </SheetHeader>
                            <hr />
                            <div className="grid gap-4 py-7">
                                <Link href={'/'}>Home</Link>
                                <Link href={'/'}>Pricing</Link>
                                <Link href={'/'}>Blog</Link>
                                <Link href={'/'}>News</Link>
                                <Link href={'/'}>FAQ</Link>
                                <Link href={'/'}>Contact US</Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <Image
                    className="lg:w-full lg:h-auto"
                    src={logo}
                    width={100}
                    height={100}
                    sizes=""
                    alt="Street Smart"
                />
            </div>

            <div className="hidden lg:block text-gray-600 [&>a]:px-6 text-xl font-medium">
                <Link className="hover:underline" href={'/'}>
                    Home
                </Link>
                <Link className="hover:underline" href={'/'}>
                    Pricing
                </Link>
                <Link className="hover:underline" href={'/'}>
                    Blog
                </Link>
                <Link className="hover:underline" href={'/'}>
                    News
                </Link>
                <Link className="hover:underline" href={'/'}>
                    FAQ
                </Link>
                <Link className="hover:underline" href={'/'}>
                    Contact US
                </Link>
            </div>

            <div className="text-gray-600 [&>a]:px-3 text-xl font-medium">
                <Link href={'/'}>Login</Link>
                <Link href={'/'}>Sign up</Link>
            </div>
        </div>
    );
}
