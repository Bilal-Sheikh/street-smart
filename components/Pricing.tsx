import { Button } from '@/components/ui/button';
import React from 'react';

export default function Pricing() {
    return (
        <section className="bg-gray-800">
            <div className="py-6 px-10 md:py-12 md:px-60">
                <h1 className="md:py-5 text-2xl md:text-5xl font-medium text-white">
                    Are You Ready to Get Started?
                </h1>
                <h1 className="py-6 text-2xl md:text-4xl font-bold text-white">
                    Customized Just for You
                </h1>
                <p className="text-sm md:text-xl md:font-medium text-white">
                    Choose your ideal plan, pick a convenient date & time, and
                    secure your spot with a quick payment. Simple and efficient.
                </p>
                <PricingCards />
            </div>
        </section>
    );
}

export function PricingCards() {
    return (
        <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
                <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                    <div>
                        <h3 className="text-2xl font-bold text-center">
                            Try Out
                        </h3>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span className="text-4xl font-bold">$200</span>
                        </div>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span>
                                200 Minutes Bundle{' '}
                                <span className="max-sm:whitespace-nowrap">
                                    (2 x 100 Minutes Session)
                                </span>
                            </span>
                        </div>
                        <div className="ml-2 mt-4 text-xl font-bold text-start">
                            <span>What’s Covered</span>
                        </div>
                        <ul className="ml-2 mt-4 space-y-2">
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                Car setup & control + Parking
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                All inclusive (no hidden cost)
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                Street Smart Certification
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <Button className="w-full">Get Started</Button>
                    </div>
                </div>

                <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-red-500">
                    <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        Popular
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-center">
                            Value For Money
                        </h3>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span className="text-4xl font-bold">$480</span>
                        </div>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span>
                                600 Minutes Bundle{' '}
                                <span className="max-sm:whitespace-nowrap">
                                    (6 x 100 Minutes Session)
                                </span>
                            </span>
                        </div>
                        <div className="ml-2 mt-4 text-xl font-bold text-start">
                            <span>What’s Covered</span>
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                                Car setup & control
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                ALL topics covered
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                All inclusive (no hidden cost)
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                Street Smart Certification
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500">
                            Get Started
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                    <div>
                        <h3 className="text-2xl font-bold text-center">
                            Clear Cut
                        </h3>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span className="text-4xl font-bold">$360</span>
                        </div>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span>
                                400 Minutes Bundle{' '}
                                <span className="max-sm:whitespace-nowrap">
                                    (4 x 100 Minutes Session)
                                </span>
                            </span>
                        </div>
                        <div className="ml-2 mt-4 text-xl font-bold text-start">
                            <span>What’s Covered</span>
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                Car setup & control
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                4 topics of your choice
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                All inclusive (no hidden cost)
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                Street Smart Certification
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <Button className="w-full">Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
