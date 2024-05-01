import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/hero-image.png';

export default function Hero() {
    return (
        <section>
            <div className="pt-10 px-5 lg:pt-5 lg:px-20 lg:mx-auto lg:max-w-screen-2xl lg:flex justify-between">
                <div className="block lg:hidden">
                    <Image
                        src={heroImage}
                        className="transform -scale-x-100"
                        width={700}
                        height={700}
                        alt="Be Street Smart, Stay Safe"
                    />
                </div>
                <div className="pt-10 px-4 lg:pt-5 lg:w-2/3">
                    <h3 className="text-gray-600 text-2xl lg:text-4xl font-medium">
                        Drive with Confidence, Safe and Easy
                    </h3>
                    <h1 className="text-gray-600 text-3xl lg:text-5xl py-7 font-bold">
                        Be Street Smart, Stay Safe
                    </h1>
                    <p className="text-sm lg:text-xl font-medium">
                        Boost your driving confidence. Get driving refresher
                        courses that fit your needs. Learn defensive skills in
                        real-life situations and feel safer on the road.
                    </p>

                    <div className="py-7 ">
                        <button className="py-5 px-10 text-base lg:text-xl bg-orange-600 rounded-full text-white font-bold">
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

            <div className="bg-orange-600 text-white">
                <div className="py-10 px-10 lg:px-20 lg:mt-12 lg:mx-auto lg:max-w-screen-2xl">
                    <h3 className="text-2xl lg:text-4xl font-medium">
                        Feeling Anxious Behind the Wheel?
                    </h3>
                    <h1 className="py-6 text-2xl lg:text-4xl font-bold">
                        No worries, it gets easier after the first try or two!
                    </h1>
                    <p className="text-sm font-light lg:font-medium lg:text-xl">
                        It's normal to have jitters, especially after just
                        passing your driving test or a long break. Singapore
                        roads can be busy, and protecting your car (and wallet)
                        is a priority. But think bigger! Why risk the safety of
                        yourself and your family just to avoid a refresher
                        course?
                    </p>
                    <p className="py-8 text-sm font-light lg:text-xl lg:font-medium">
                        Street Smart's Driving Refresher Program is here to get
                        you cruising confidently again. With practice and guided
                        instructions, you'll be back to enjoying the freedom of
                        the road in no time. Remember, our cars are our ticket
                        to anywhere.
                    </p>
                    <p className="text-sm font-light lg:text-xl lg:font-medium">
                        Take control and sign up for our Driving Refresher
                        Program today.
                    </p>
                </div>
            </div>
        </section>
    );
}
