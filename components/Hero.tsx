import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/hero-image.png';

export default function Hero() {
    return (
        <section>
            <div className="pt-10 lg:pt-24 lg:px-60 lg:flex justify-between">
                <div className="block lg:hidden">
                    <Image
                        src={heroImage}
                        className="transform -scale-x-100"
                        width={700}
                        height={700}
                        alt="Be Street Smart, Stay Safe"
                    />
                </div>
                <div className="max-md:pt-10 max-md:px-10 lg:w-1/2">
                    <h3 className="text-gray-600 text-2xl lg:text-4xl font-medium">
                        Drive with Confidence, Safe and Easy
                    </h3>
                    <h1 className="text-gray-600 text-5xl py-7 font-bold">
                        Be Street Smart, Stay Safe
                    </h1>
                    <p className="md:text-base lg:text-2xl font-medium">
                        Boost your driving confidence. Get driving refresher
                        courses that fit your needs. Learn defensive skills in
                        real-life situations and feel safer on the road.
                    </p>

                    <div className="py-7 lg:py-14">
                        <button className="bg-orange-600 rounded-full text-white font-bold py-5 px-10">
                            Sign Up Today
                        </button>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <Image
                        src={heroImage}
                        className="transform -scale-x-100"
                        width={700}
                        height={700}
                        alt="Be Street Smart, Stay Safe"
                    />
                </div>
            </div>

            <div className="py-10 px-10 md:px-60 md:mt-24 bg-orange-600 text-white">
                <h3 className="text-2xl md:text-4xl font-medium">
                    Feeling Anxious Behind the Wheel?
                </h3>
                <h1 className="py-6 text-2xl md:text-4xl font-bold">
                    No worries, it gets easier after the first try or two
                </h1>
                <p className="text-sm font-light md:text-xl md:font-medium">
                    It's normal to have jitters, especially after just passing
                    your driving test or a long break. Singapore roads can be
                    busy, and protecting your car (and wallet) is a priority.
                    But think bigger! Why risk the safety of yourself and your
                    family just to avoid a refresher course?
                </p>
                <p className="py-8 text-sm font-light md:text-xl md:font-medium">
                    Street Smart's Driving Refresher Program is here to get you
                    cruising confidently again. With practice and guided
                    instructions, you'll be back to enjoying the freedom of the
                    road in no time. Remember, our cars are our ticket to~
                    anywhere.
                </p>
                <p className="text-sm font-light md:text-xl md:font-medium">
                    Take control and sign up for our Driving Refresher Program
                    today.
                </p>
            </div>
        </section>
    );
}
