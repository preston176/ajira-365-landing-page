import React from "react";

export default function About() {
    return (
        <section className="min-h-screen bg-[#f5f8ff] py-12">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0a2e8c] mb-2 mt-8">About Ajira365</h1>
                <p className="text-[#1b3fa0] mb-6 text-sm">Last Updated: August 3, 2025</p>
                <p className="text-[#1b3fa0] mb-6">Ajira365 is Africa’s leading AI-powered career platform, designed to help job seekers and professionals unlock their full potential. Our mission is to bridge the gap between talent and opportunity by providing innovative interview practice tools, instant feedback, and actionable career resources. We are committed to empowering individuals to achieve their career goals and drive economic growth across the continent.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">Our Core Features</h2>
                <ul className="list-disc pl-6 text-[#1b3fa0] mb-4">
                    <li>AI-driven mock interviews tailored to your industry and role</li>
                    <li>Personalized feedback to help you improve and succeed</li>
                    <li>Comprehensive resources for job search, CV writing, and career growth</li>
                    <li>Trusted by thousands of users across Africa and beyond</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">Our Mission</h2>
                <p className="text-[#1b3fa0] mb-4">To empower job seekers with the tools, knowledge, and confidence to succeed in today’s competitive job market.</p>

                <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">Contact Us</h2>
                <p className="text-[#1b3fa0] mb-8">For more information about Ajira365, please contact us at <a href="mailto:info@ajira365.com" className="text-[#ff7a01] underline">info@ajira365.com</a>.</p>
                <a href="/" className="text-[#ff7a01] hover:underline text-sm">&larr; Back to Home</a>
            </div>
        </section>
    );
}
