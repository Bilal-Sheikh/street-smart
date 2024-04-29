import React from 'react';
import logo from '@/public/logo-white.png';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Footer() {
    return (
        <section className="static bottom-0 bg-gray-800 text-white">
            <div className="flex justify-between items-center py-10 px-10 lg:py-16 lg:px-32">
                <div>
                    <Image
                        // className="lg:w-full lg:h-auto"
                        src={logo}
                        width={180}
                        height={180}
                        sizes=""
                        alt="Street Smart"
                    />
                    <div className="py-10">
                        <h4>
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
