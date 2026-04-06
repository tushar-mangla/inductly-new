'use client';

import Navbar from '@/components/Navbar';
import Resources from '@/components/Resources';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="pt-4">
                <Resources />
            </div>
            <Footer />
        </main>
    );
}
