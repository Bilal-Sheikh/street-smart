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
            <div className="px-10 lg:py-10 lg:px-20 lg:mx-auto lg:max-w-screen-2xl">
                <h1 className="py-5 lg:py-10 text-2xl lg:text-3xl lg:font-medium">
                    Our Driving Refresher Program
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="shadow-lg">
                        <CardHeader className="relative h-40 lg:h-60">
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
                            <CardTitle className="py-5 text-orange-600 font-medium">
                                The Real Deal
                            </CardTitle>
                            <CardDescription className="text-base pb-3">
                                Learn to drive on expressways, parking and more.
                                Get your driving skills up to speed. Our lessons
                                are structured to guide you every step of the
                                way.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader className="relative h-40 lg:h-60">
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
                            <CardTitle className="py-5 text-orange-600 font-medium">
                                Coaching & Mentoring
                            </CardTitle>
                            <CardDescription className="text-base pb-3">
                                Master the basics of driving and be ready for
                                anything on the road. We'll coach and mentor you
                                to become a confident driver.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader className="relative h-40 lg:h-60">
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
                            <CardTitle className="py-5 text-orange-600 font-medium">
                                Learn On Your Time
                            </CardTitle>
                            <CardDescription className="text-base pb-3">
                                Refresh your skills, your way. Take driving
                                refresher lessons that fit YOUR schedule and
                                learning style. Learn at your own pace.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>

                <div className="py-10 text-base font-light lg:text-lg lg:font-medium">
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
                        road.
                    </p>
                    <br />
                    <p className="max-sm:underline max-sm:decoration-orange-600 max-sm:decoration-2 lg:border-b-4 border-orange-600 max-w-fit">
                        Street Smart: Your partner to smooth sailing on the
                        streets.
                    </p>
                </div>
            </div>

            <div className="bg-orange-600 text-white">
                <div className="px-10 py-10 lg:py-20 lg:px-20 lg:mx-auto lg:max-w-screen-2xl">
                    <h1 className="text-xl lg:text-3xl lg:font-medium">
                        Cruise the Roads with Ease
                    </h1>
                    <h1 className="py-5 text-2xl lg:text-3xl font-bold">
                        Take your time and learn at your own pace
                    </h1>
                    <p className="text-base lg:text-lg">
                        Take control of your learning. Your driving mentor and
                        coach will tailor the lessons to fit your needs and
                        build your confidence behind the wheel. Learn how to
                        become a skilled and confident driver with personalized
                        guidance every step of the way.
                    </p>

                    <div className="grid grid-cols-1 gap-6 py-7 lg:mt-8 lg:grid-cols-3">
                        <Card className="shadow-lg">
                            <CardHeader className="relative h-40 lg:h-60">
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
                                <CardTitle className="py-5 text-orange-600 font-medium">
                                    Curated Program
                                </CardTitle>
                                <CardDescription className="text-base pb-3">
                                    Get back on the road with confidence. Our
                                    structured program covers everything new &
                                    old drivers need. Learn the ropes, fast.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg">
                            <CardHeader className="relative h-40 lg:h-60">
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
                                <CardTitle className="py-5 text-orange-600 font-medium">
                                    Less Hassle
                                </CardTitle>
                                <CardDescription className="text-base pb-3">
                                    No registration fees, other hidden costs &
                                    endless waiting time. Pick a plan, get
                                    started now.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg">
                            <CardHeader className="relative h-40 lg:h-60">
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
                                <CardTitle className="py-5 text-orange-600 font-medium">
                                    Your Time, Your Place
                                </CardTitle>
                                <CardDescription className="text-base pb-3">
                                    Learn without the hassle. You pick the
                                    perfect time and spot for each lesson. Learn
                                    from the comfort of wherever you choose.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
