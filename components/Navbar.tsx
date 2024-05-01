import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="sticky top-0 flex justify-between items-center py-5 lg:py-11 lg:px-16 bg-white z-50">
            <div className="flex items-center">
                <div className="px-5 block lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent side={'left'}>
                            <SheetHeader>
                                <SheetTitle>
                                    <Link href={'/'}>
                                        <Image
                                            className="lg:w-full lg:h-auto"
                                            src={logo}
                                            width={100}
                                            height={100}
                                            sizes=""
                                            alt="Street Smart"
                                        />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <hr />

                            <div className="grid gap-4 py-7">
                                <Link href={'/'}>Home</Link>
                                <SheetClose asChild>
                                    <Link href={'#pricing'}>Pricing</Link>
                                </SheetClose>
                                <Link href={'/'}>Blog</Link>
                                <Link href={'/'}>News</Link>
                                <SheetClose asChild>
                                    <Link href={'#faq'} scroll={true}>
                                        FAQ
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href={'#contact'}>Contact US</Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <Link href={'/'}>
                    <Image
                        className="lg:w-full lg:h-auto"
                        src={logo}
                        width={100}
                        height={100}
                        sizes=""
                        alt="Street Smart"
                    />
                </Link>
            </div>

            <div className="hidden lg:block text-gray-600 [&>a]:px-6 text-xl font-medium">
                <Link className="hover:underline" href={'/'}>
                    Home
                </Link>
                <Link className="hover:underline" href={'#pricing'}>
                    Pricing
                </Link>
                <Link className="hover:underline" href={'/'}>
                    Blog
                </Link>
                <Link className="hover:underline" href={'/'}>
                    News
                </Link>
                <Link className="hover:underline" href={'#faq'}>
                    FAQ
                </Link>
                <Link className="hover:underline" href={'#contact'}>
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
