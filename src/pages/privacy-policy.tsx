import React from "react";

export default function PrivacyPolicy() {
    return (
        <section className="min-h-screen bg-[#f5f8ff] py-12">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0a2e8c] mb-2 mt-8">Privacy Policy</h1>
                <p className="text-[#1b3fa0] mb-6 text-sm">Last Updated: August 3, 2025</p>
                <p className="text-[#1b3fa0] mb-6">At Ajira365, your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform. We are committed to transparency and safeguarding your data in compliance with global privacy standards.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">1. Information We Collect</h2>
                <ul className="list-disc pl-6 text-[#1b3fa0] mb-4">
                    <li>Personal information you provide (e.g., name, email, CV details)</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and similar technologies</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-[#1b3fa0] mb-4">
                    <li>To provide and improve our services</li>
                    <li>To communicate with you about your account and updates</li>
                    <li>To personalize your experience</li>
                    <li>To comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">3. Data Security</h2>
                <p className="text-[#1b3fa0] mb-4">We use industry-standard security measures to protect your information. Your data is never sold to third parties. You have full control over your data and can request deletion at any time.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">4. Your Rights</h2>
                <ul className="list-disc pl-6 text-[#1b3fa0] mb-4">
                    <li>Access, correct, or delete your personal data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request data portability</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">5. Changes to This Policy</h2>
                <p className="text-[#1b3fa0] mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">6. Contact Us</h2>
                <p className="text-[#1b3fa0] mb-8">For detailed information, please contact us at <a href="mailto:privacy@ajira365.com" className="text-[#ff7a01] underline">privacy@ajira365.com</a>.</p>
                <a href="/" className="text-[#ff7a01] hover:underline text-sm">&larr; Back to Home</a>
            </div>
        </section>
    );
}
