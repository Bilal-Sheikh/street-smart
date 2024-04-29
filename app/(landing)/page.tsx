import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import RefresherProgram from '@/components/RefresherProgram';
import Topics from '@/components/Topics';
import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <div>
                <Navbar />
                <Hero />
                {/* <RefresherProgram />
                <Topics />
                <Pricing />
                <FAQ />
                <Footer /> */}
            </div>
        </main>
    );
}
