import { Button } from '@/components/ui/button';
import React from 'react';

export default function Pricing() {
    return (
        <section id="pricing" className="bg-gray-800">
            <div className="py-6 px-10 lg:py-20 lg:px-20 lg:mx-auto lg:max-w-screen-2xl">
                <h1 className="text-2xl lg:text-3xl font-medium text-white">
                    Are You Ready to Get Started?
                </h1>
                <h1 className="py-6 text-2xl lg:text-3xl font-bold text-white">
                    Customized Just for You
                </h1>
                <p className="text-base lg:text-xl lg:font-medium text-white">
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
        <div className="container px-4">
            <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3 lg:gap-8">
                <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                    <div>
                        <h3 className="py-2 mx-auto lg:w-60 text-white text-xl lg:text-2xl font-bold text-center rounded-full bg-gray-400">
                            Try Out
                        </h3>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span className="text-4xl font-bold">$200</span>
                        </div>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span>
                                200 Minutes Bundle
                                <p>(2 x 100 Minutes Session)</p>
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
                        </ul>
                    </div>
                    <div className="mt-6">
                        <Button className="w-full">Get Started</Button>
                    </div>
                </div>

                <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                    <div>
                        <h3 className="py-2 mx-auto lg:w-60 text-white text-xl lg:text-2xl font-bold text-center rounded-full bg-gray-400">
                            Clear Cut
                        </h3>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span className="text-4xl font-bold">$360</span>
                        </div>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span>
                                400 Minutes Bundle
                                <p>(4 x 100 Minutes Session) - Save 10%</p>
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
                            <li className="flex items-center whitespace-pre">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                <span className="font-bold">4 topics</span> of
                                your choice
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                All inclusive (no hidden cost)
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
                        <h3 className="py-2 mx-auto lg:w-72 text-white text-xl lg:text-2xl font-bold text-center rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                            Value For Money
                        </h3>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span className="text-4xl font-bold">$480</span>
                        </div>
                        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                            <span>
                                600 Minutes Bundle
                                <p>(6 x 100 Minutes Session) - Save 20%</p>
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
                            <li className="flex items-center whitespace-pre">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                <span className="font-bold pr-1">
                                    ALL topics
                                </span>{' '}
                                covered
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                All inclusive (no hidden cost)
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500">
                            Get Started
                        </Button>
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
