'use client';

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const contactSchema = z.object({
    firstname: z.string().min(2, {
        message: 'Firstname must be at least 2 characters.',
    }),
    lastname: z.string().min(2, {
        message: 'Lastname must be at least 2 characters.',
    }),
    mobile: z.string().min(6, {
        message: 'Mobile number must be at least 6 characters.',
    }),
    email: z.string().email({
        message: 'Invalid email address.',
    }),
    plan: z.enum([
        'Try Out ($200)',
        'Value For Money ($480)',
        'Clear Cut ($360)',
    ]),
    licence: z.enum(['Yes', 'No']),
    note: z.string().optional(),
});

export default function Contact() {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            note: '',
            mobile: '',
        },
    });

    function onSubmit(values: z.infer<typeof contactSchema>) {
        console.log(values);
    }

    return (
        <section id="contact">
            <div className="px-10 py-12 lg:px-20 lg:mx-auto lg:max-w-screen-2xl">
                <h1 className="py-5 lg:pb-10 text-2xl lg:text-4xl font-medium text-gray-600">
                    Contact Us
                </h1>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        onReset={() => {
                            form.reset();
                        }}
                        className="space-y-8"
                    >
                        <div className="grid lg:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Firstname
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Lastname
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Doe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="mobile"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Mobile Number
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="+00 987 654 321"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="john_doe@example.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="plan"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            I would like to sign up for the
                                            following Plan
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Select a Plan" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Try Out ($200)">
                                                        Try Out ($200)
                                                    </SelectItem>
                                                    <SelectItem value="Value For Money ($480)">
                                                        Value For Money ($480)
                                                    </SelectItem>
                                                    <SelectItem value="Clear Cut ($360)">
                                                        Clear Cut ($360)
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="licence"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            I have a valid driving licence
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Select an answer" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Yes">
                                                        Yes
                                                    </SelectItem>
                                                    <SelectItem value="No">
                                                        No
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="note"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">
                                        Any particular areas you want to focus
                                        on
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter your message"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end gap-5">
                            <Button
                                variant={'destructive'}
                                type="reset"
                                className="w-52"
                            >
                                Reset
                            </Button>
                            <Button type="submit" className="w-52">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
}
