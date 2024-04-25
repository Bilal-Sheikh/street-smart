import React from 'react';
import Image from 'next/image';
import expressway from '@/public/expressway.png';
import tunnel from '@/public/tunnel.png';
import womenInCar from '@/public/women-in-car.png';
import womenInCar2 from '@/public/women-in-car-2.png';
import womenInCar3 from '@/public/women-in-car-3.png';
import car from '@/public/car.png';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function RefresherProgram() {
    return (
        <section>
            <div className="pt-12 px-60">
                <h1 className="py-10 text-5xl font-medium">
                    Our Driving Refresher Program
                </h1>

                <div className="flex justify-center gap-12">
                    <Card className="w-1/2 shadow-lg">
                        <CardHeader className="relative h-60">
                            <Image
                                className="rounded-t-lg"
                                src={expressway}
                                fill
                                objectFit="fill"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="The Real Deal | StreetSmart"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="py-5 text-orange-600">
                                The Real Deal
                            </CardTitle>
                            <CardDescription className="text-base">
                                Learn to drive on expressways, parking and more.
                                Get your driving skills up to speed. Our lessons
                                are structured to guide you every step of the
                                way.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="w-1/2 shadow-lg">
                        <CardHeader className="relative h-60">
                            <Image
                                className="rounded-t-lg"
                                src={womenInCar}
                                fill
                                objectFit="fill"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="The Real Deal | StreetSmart"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="py-5 text-orange-600">
                                Coaching & Mentoring
                            </CardTitle>
                            <CardDescription className="text-base">
                                Master the basics of driving and be ready for
                                anything on the road. We'll coach and mentor you
                                to become a confident driver.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="w-1/2 shadow-lg">
                        <CardHeader className="relative h-60">
                            <Image
                                className="rounded-t-lg"
                                src={tunnel}
                                fill
                                objectFit="fill"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="The Real Deal | StreetSmart"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="py-5 text-orange-600">
                                Learn On Your Time
                            </CardTitle>
                            <CardDescription className="text-base">
                                Refresh your skills, your way. Take driving
                                refresher lessons that fit YOUR schedule and
                                learning style. Learn at your own pace.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>

                <div className="py-10 text-xl">
                    <p>
                        Street Smart's driving refresher program focuses on what
                        you REALLY need: practical skills for everyday driving.
                    </p>
                    <br />
                    <p>
                        We know you're tired of feeling lost behind the wheel.
                        That's why we become your personal mentor and coach,
                        guiding you with patience and support. We'll help you
                        deal with aggressive drivers and navigate any situation
                        calmly.
                    </p>
                    <br />
                    <p>
                        Don't let fear hold you back. Street Smart gets you
                        comfortable and confident on the road fast. We want you
                        to love driving and transform your experience on the
                        road
                    </p>
                    <br />
                    <p className="border-b-4 border-orange-600 max-w-fit">
                        Street Smart: Your partner to smooth sailing on the
                        streets.
                    </p>
                </div>
            </div>

            <div className="py-10 px-60 bg-orange-600 text-white">
                <h1 className="py-5 text-5xl font-medium">
                    Cruise the Roads with Ease
                </h1>
                <h1 className="py-5 text-4xl font-bold">
                    No worries, it gets easier after the first try or two
                </h1>
                <p className="text-xl font-medium w-4/5">
                    Take control of your learning. Your driving mentor and coach
                    will tailor the lessons to fit your needs and build your
                    confidence behind the wheel.
                </p>

                <div className="flex justify-center py-7 gap-12">
                    <Card className="w-1/2 shadow-lg">
                        <CardHeader className="relative h-60">
                            <Image
                                className="rounded-t-lg"
                                src={car}
                                fill
                                objectFit="fill"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="The Real Deal | StreetSmart"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="py-5 text-orange-600">
                                Curated Program
                            </CardTitle>
                            <CardDescription className="text-base">
                                Get back on the road with confidence. Our
                                structured program covers everything new & old
                                drivers need. Learn the ropes, fast.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="w-1/2 shadow-lg">
                        <CardHeader className="relative h-60">
                            <Image
                                className="rounded-t-lg"
                                src={womenInCar2}
                                fill
                                objectFit="fill"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="The Real Deal | StreetSmart"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="py-5 text-orange-600">
                                Less Hassle
                            </CardTitle>
                            <CardDescription className="text-base">
                                No registration fees, other hidden costs &
                                endless waiting time. Pick a plan, get started
                                now.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="w-1/2 shadow-lg">
                        <CardHeader className="relative h-60">
                            <Image
                                className="rounded-t-lg"
                                src={womenInCar3}
                                fill
                                objectFit="fill"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="The Real Deal | StreetSmart"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="py-5 text-orange-600">
                                Your Time, Your Place
                            </CardTitle>
                            <CardDescription className="text-base">
                                Learn without the hassle. You pick the perfect
                                time and spot for each lesson. Learn from the
                                comfort of wherever you choose.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
