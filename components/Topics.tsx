import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function Topics() {
    return (
        <section>
            <div className="pt-12 px-10 md:px-60">
                <h1 className="md:py-5 text-2xl md:text-5xl font-medium text-gray-600">
                    Pick a <span className="text-orange-600">Problem</span> area
                </h1>
                <p className="max-sm:py-5 text-sm font-light md:text-xl md:font-medium text-gray-600">
                    To achieve your driving goals, prepare for your driving
                    refresher with our curated topics. Choose the areas you need
                    to focus on and hit the road with confidence.
                </p>
                <h5 className="md:py-5 text-sm font-light md:text-xl md:font-medium text-gray-600">
                    Topics You Will Learn:
                </h5>

                <Accordion type="multiple">
                    <AccordionItem value="topic-1" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start px-2 md:py-5 md:px-5 text-sm md:text-2xl text-orange-600 font-semibold">
                            Topic 1: Pre-Drive Checklist and Essential Skills?
                        </AccordionTrigger>
                        <AccordionContent className="px-2 md:px-10">
                            <ul className="px-5 list-disc md:text-xl text-gray-600">
                                <li className="py-3">
                                    <span className="font-bold">
                                        Gear Up for Safe Driving:
                                    </span>{' '}
                                    Get in the habit of a quick check-up. Look
                                    at your tires, lights, and fluid levels.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Sit Right, Drive Tight:
                                    </span>{' '}
                                    Adjust your seat for proper reach and
                                    posture. You should be able to see clearly
                                    and press pedals comfortably.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Grip It Like You Mean It:
                                    </span>{' '}
                                    Learn the hand positions for different
                                    driving situations.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Minimize Blind Spots, Maximize Safety:
                                    </span>{' '}
                                    Properly adjust your side mirrors to
                                    eliminate blind spots and see what's behind
                                    you.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Change Lanes with Confidence:
                                    </span>{' '}
                                    Use your side mirrors to check for traffic
                                    before changing lanes. Don't guess, be sure.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Feel the Acceleration:
                                    </span>{' '}
                                    Experience the sensation of pressing the gas
                                    pedal all the way down for full
                                    acceleration.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Brake & Roll:
                                    </span>{' '}
                                    Understand how braking and pressing the gas
                                    pedal together feels. This is not
                                    recommended for everyday driving, but can be
                                    useful in emergencies.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="topic-2" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start px-2 md:py-5 md:px-5 text-sm md:text-2xl text-orange-600 font-semibold">
                            Topic 2: Etiquette on the Road
                        </AccordionTrigger>
                        <AccordionContent className="px-2 md:px-10">
                            <ul className="px-5 list-disc md:text-xl text-gray-600">
                                <li className="py-3">
                                    <span className="font-bold">
                                        Know the Basics:
                                    </span>{' '}
                                    Learn these tips to navigate Singapore's
                                    roads with confidence.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        U-turn Rules:
                                    </span>{' '}
                                    Unsure about U-turns? Find out when it's
                                    safe and legal.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Drive Predictably:
                                    </span>{' '}
                                    Signal clearly, avoid jerky movements, and
                                    be a smooth driver.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Anticipate Others:
                                    </span>{' '}
                                    Watch for brake lights, turn signals, and
                                    anything unusual.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Spot Bus Lanes:
                                    </span>{' '}
                                    Know the markings and timings to avoid fines
                                    and delays.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Stay calm, Stay Cool:
                                    </span>{' '}
                                    Don't react to uncourteous drivers. Focus on
                                    safe driving and let them get on with it.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Show Some Appreciation:
                                    </span>{' '}
                                    Learn how to thank courteous drivers on the
                                    road.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Judge Speed and Distance:
                                    </span>{' '}
                                    Change lanes confidently without causing
                                    trouble.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Cut in Safely:
                                    </span>{' '}
                                    Find a gap, signal, then merge smoothly.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Overtake During Rush Hour:
                                    </span>{' '}
                                    Be patient, wait for an opportunity, and
                                    don't bully others.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Discretionary Left Turn:
                                    </span>{' '}
                                    Look out for oncoming traffic, pedestrians,
                                    and cyclists.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Discretionary Right Turn:
                                    </span>{' '}
                                    Check mirrors, blind spots, and for
                                    motorcycles filtering through.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Share the Road Safely:
                                    </span>{' '}
                                    Learn how to drive safely alongside cars,
                                    buses, and large vehicles.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Navigate Slopes:
                                    </span>{' '}
                                    Learn how to handle inclines and declines
                                    with ease.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="topic-3" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start px-2 md:py-5 md:px-5 text-sm md:text-2xl text-orange-600 font-semibold">
                            Topic 3: Drive with Control on Expressways
                        </AccordionTrigger>
                        <AccordionContent className="px-2 md:px-10">
                            <ul className="px-5 list-disc md:text-xl text-gray-600">
                                <li className="py-3">
                                    <span className="font-bold">
                                        High-Speed Driving:
                                    </span>{' '}
                                    Gain comfort and control behind the wheel at
                                    highway velocities.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Seamless Merging:
                                    </span>{' '}
                                    Learn to enter the expressway safely and
                                    match traffic flow with confidence.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Merge Awareness:
                                    </span>{' '}
                                    Develop a keen eye for crucial elements
                                    during expressway entry.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Confident Lane Changes:
                                    </span>{' '}
                                    Hone your ability to judge speed and
                                    distance for smooth lane transitions.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Breakdown Management:
                                    </span>{' '}
                                    Equip yourself with a plan for handling
                                    unexpected vehicle issues on the expressway.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Clear Speed Limits:
                                    </span>{' '}
                                    Understand the exact speed regulations for
                                    both open expressways and tunnels.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Use of Lane 1:
                                    </span>{' '}
                                    Learn the proper protocols and etiquette for
                                    using the leftmost lane on the expressway.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="topic-4" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start px-2 md:py-5 md:px-5 text-sm md:text-2xl text-orange-600 font-semibold">
                            Topic 4: Your Guide to Confident Parking
                        </AccordionTrigger>
                        <AccordionContent className="px-2 md:px-10">
                            <ul className="px-5 list-disc md:text-xl text-gray-600">
                                <li className="py-3">
                                    <span className="font-bold">
                                        Stress-free Parking:
                                    </span>{' '}
                                    Learn how to park with confidence in both
                                    multi-storey and open carparks.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Reverse Parking:
                                    </span>{' '}
                                    Learn vertical parking with our clear guide.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Parallel Parking:
                                    </span>{' '}
                                    Learn parallel parking in public carparks.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Go Gantry-Ready:
                                    </span>{' '}
                                    Find out what card you need and where to get
                                    it for smooth entry and exit.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Choose Your Spot:
                                    </span>{' '}
                                    Explore your parking options, from season
                                    passes to short-term stays.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Line Markings:
                                    </span>{' '}
                                    Understand what those parking lot lines
                                    mean.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Carpark Courtesy:
                                    </span>{' '}
                                    Be a considerate driver. Learn how to wait
                                    for a spot without causing trouble.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Stuck at the Gantry:
                                    </span>{' '}
                                    Discover what to do if your card
                                    malfunctions at the carpark exit.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        One-Way Means One-Way:
                                    </span>{' '}
                                    Know the rules - we clear up any confusion
                                    about driving directions in a carpark.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="topic-5" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start px-2 md:py-5 md:px-5 text-sm md:text-2xl text-orange-600 font-semibold">
                            Topic 5: Your Guide to Roundabouts
                        </AccordionTrigger>
                        <AccordionContent className="px-2 md:px-10">
                            <ul className="px-5 list-disc md:text-xl text-gray-600">
                                <li className="py-3">
                                    <span className="font-bold">
                                        Yield Before You Enter:
                                    </span>{' '}
                                    Traffic already in the roundabout has the
                                    right of way. Don't force your way in. Use
                                    your turn signal to show where you're going
                                    (left for exiting soon, right for staying in
                                    the lane).
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Choose Your Lane Wisely:
                                    </span>{' '}
                                    Get in the lane that matches your exit.
                                    Turning left? Get in the inner lane.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Signal Your Intentions:
                                    </span>{' '}
                                    Use your turn signal to let others know
                                    where you're headed. Left signal for
                                    exiting, right signal for lane changes.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Stay in Your Lane:
                                    </span>{' '}
                                    Don't weave between lanes inside the
                                    roundabout.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Exit Smoothly:
                                    </span>{' '}
                                    Signal left well before your exit and watch
                                    your mirrors before changing lanes.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Avoid the Drama:
                                    </span>{' '}
                                    Don't speed or try to change lanes inside
                                    the roundabout. Stay calm, focused, and
                                    signal clearly to avoid accidents.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="topic-6" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start px-2 md:py-5 md:px-5 text-sm md:text-2xl text-orange-600 font-semibold">
                            Topic 6: Improve Your Driving Experience
                        </AccordionTrigger>
                        <AccordionContent className="px-2 md:px-10">
                            <ul className="px-5 list-disc md:text-xl text-gray-600">
                                <li className="py-3">
                                    <span className="font-bold">
                                        Minimize Costly Mistakes:
                                    </span>{' '}
                                    Learn how to avoid common driving errors
                                    that drain your wallet and waste time.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Maintain Composure in Emergencies:
                                    </span>{' '}
                                    Learn effective strategies to remain calm
                                    and react decisively in emergencies.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Optimize Route Planning:
                                    </span>{' '}
                                    Gain insights on navigating city streets and
                                    efficiently planning your journeys.
                                </li>
                                <li className="py-3">
                                    <span className="font-bold">
                                        Utilize Navigation Apps:
                                    </span>{' '}
                                    Understand the limitations and strengths of
                                    popular apps like Google Maps and Waze.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
