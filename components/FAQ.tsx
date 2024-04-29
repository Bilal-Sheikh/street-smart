import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
    return (
        <section id="faq">
            <div className="px-10 pt-6 md:pt-12 md:px-60">
                <h1 className="md:py-5 text-2xl md:text-4xl font-bold">
                    Frequently Asked
                    <span className="text-orange-600"> Questions</span>
                </h1>
                <Accordion type="multiple">
                    <AccordionItem value="ques-1" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start md:py-5 md:px-5 text-base md:text-2xl text-gray-600 font-semibold">
                            What is Street Smart?
                        </AccordionTrigger>
                        <AccordionContent className="md:px-10">
                            <p className="text-base md:text-xl text-gray-600">
                                Street Smart's personalized driver mentorship
                                and coaching address common anxieties faced by
                                new and returning drivers. Choose from our
                                curated topics or request something specific.
                                Our program gets you behind the wheel for
                                real-world practice, building your confidence
                                for any driving situation.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="ques-2" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start md:py-5 md:px-5 text-base md:text-2xl text-gray-600 font-semibold">
                            Topic 2: Etiquette on the Road
                        </AccordionTrigger>
                        <AccordionContent className="md:px-10">
                            <p className="text-base md:text-xl text-gray-600">
                                Our program equips new and returning drivers
                                with essential skills and confidence. Be a safe,
                                assured driver in record time
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="ques-3" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start md:py-5 md:px-5 text-base md:text-2xl text-gray-600 font-semibold">
                            What’s next after I complete all the topics?
                        </AccordionTrigger>
                        <AccordionContent className="md:px-10">
                            <p className="text-base md:text-xl text-gray-600">
                                If, for some reason, you still feel nervous
                                behind the wheel, consider taking extra driving
                                refresher lessons to boost your confidence. Let
                                us know which specific areas you would like to
                                work on.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="ques-4" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start md:py-5 md:px-5 text-base md:text-2xl text-gray-600 font-semibold">
                            Can I take more lessons or repeat some of the
                            topics?
                        </AccordionTrigger>
                        <AccordionContent className="md:px-10">
                            <p className="text-base md:text-xl text-gray-600">
                                You can dive deep in any area with as many
                                lessons as you want or need. If you need a more
                                customised learning path, please let us know.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="ques-5" className="py-3 rounded-2xl">
                        <AccordionTrigger className="text-start md:py-5 md:px-5 text-base md:text-2xl text-gray-600 font-semibold">
                            How do I get started?
                        </AccordionTrigger>
                        <AccordionContent className="md:px-10">
                            <p className="text-base md:text-xl text-gray-600">
                                Just select from any of the plans or get in
                                touch with us to let us know how we can help
                                you.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
