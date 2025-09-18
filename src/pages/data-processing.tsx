import React from "react";

export default function DataProcessing() {
    return (
        <section className="min-h-screen bg-[#f5f8ff] py-12">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0a2e8c] mb-2 mt-8">Data Processing</h1>
                <p className="text-[#1b3fa0] mb-6 text-sm">Last Updated: August 3, 2025</p>
                <p className="text-[#1b3fa0] mb-6">Ajira365 is committed to processing your data responsibly and transparently. This page outlines how we handle, store, and protect your information in compliance with data protection laws.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">1. Purpose of Data Processing</h2>
                <p className="text-[#1b3fa0] mb-4">We process your data only for legitimate business purposes, such as providing our services, improving user experience, and complying with legal obligations.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">2. Data Security</h2>
                <p className="text-[#1b3fa0] mb-4">We implement robust security measures to safeguard your data against unauthorized access, alteration, or disclosure.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">3. Your Rights</h2>
                <ul className="list-disc pl-6 text-[#1b3fa0] mb-4">
                    <li>Access, correct, or delete your data</li>
                    <li>Request data portability</li>
                    <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">4. Compliance</h2>
                <p className="text-[#1b3fa0] mb-4">We comply with all applicable data protection regulations and industry standards.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">5. Contact Us</h2>
                <p className="text-[#1b3fa0] mb-8">For more details, contact <a href="mailto:privacy@ajira365.com" className="text-[#ff7a01] underline">privacy@ajira365.com</a>.</p>
                <a href="/" className="text-[#ff7a01] hover:underline text-sm">&larr; Back to Home</a>
            </div>
        </section>
    );
}
