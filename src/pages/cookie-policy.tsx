import React from "react";

export default function CookiePolicy() {
    return (
        <section className="min-h-screen bg-[#f5f8ff] py-12">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0a2e8c] mb-2 mt-8">Cookie Policy</h1>
                <p className="text-[#1b3fa0] mb-6 text-sm">Last Updated: August 3, 2025</p>
                <p className="text-[#1b3fa0] mb-6">Ajira365 uses cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">1. What Are Cookies?</h2>
                <p className="text-[#1b3fa0] mb-4">Cookies are small text files stored on your device by your web browser. They help websites remember your preferences, login details, and browsing activity to improve your experience.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">2. How We Use Cookies</h2>
                <ul className="list-disc pl-6 text-[#1b3fa0] mb-4">
                    <li>To understand how you use our platform and improve our services</li>
                    <li>To remember your preferences and settings</li>
                    <li>To analyze site traffic and usage patterns</li>
                    <li>To personalize content and features</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">3. Managing Cookies</h2>
                <p className="text-[#1b3fa0] mb-4">You can manage or disable cookies in your browser settings. Please note that disabling cookies may affect the functionality of our platform.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">4. Third-Party Cookies</h2>
                <p className="text-[#1b3fa0] mb-4">Some features on Ajira365 may use third-party cookies (e.g., analytics, social media integrations). We do not control these cookies and recommend reviewing the privacy policies of those third parties.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">5. Changes to This Policy</h2>
                <p className="text-[#1b3fa0] mb-4">We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">6. Contact Us</h2>
                <p className="text-[#1b3fa0] mb-8">If you have questions about our use of cookies, please contact us at <a href="mailto:privacy@ajira365.com" className="text-[#ff7a01] underline">privacy@ajira365.com</a>.</p>
                <a href="/" className="text-[#ff7a01] hover:underline text-sm">&larr; Back to Home</a>
            </div>
        </section>
    );
}
