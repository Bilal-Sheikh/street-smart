import React from 'react';
import logo from '@/public/logo-white.png';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <section className="static bottom-0 bg-gray-800 text-white">
            <div className="py-10 px-6 md:py-16 md:px-32 grid md:grid-cols-2 place-items-center">
                <div className="max-sm:px-12">
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            width={180}
                            height={180}
                            alt="Street Smart"
                        />
                    </Link>
                    <div className="py-7 md:py-10">
                        <h4 className="max-sm:text-sm">
                            Copyright © 2024 Street Smart Singapore. All rights
                            reserved.
                        </h4>
                    </div>
                </div>

                <div>
                    <h4 className="flex gap-2 cursor-pointer select-all">
                        <Mail /> enquiries@streetsmart.com
                    </h4>
                </div>
            </div>
        </section>
    );
}
