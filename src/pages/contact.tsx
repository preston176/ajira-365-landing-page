import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState("idle");



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        try {
            const res = await fetch("https://formspree.io/f/" + import.meta.env.VITE_FORMSPREE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formState),
            });
            const data = await res.json();
            if (res.ok && data.ok !== false) {
                setFormStatus("success");
                setFormState({ name: "", email: "", subject: "", message: "" });
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            console.error(error)
            setFormStatus("error");
        }
    };

    return (
        <section className="min-h-screen bg-[#0a2e8c] flex items-center justify-center py-16 px-4 md:pt-20">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white/90 rounded-2xl shadow-2xl p-8 md:p-10 border border-[#b3c6f7] flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0a2e8c] mb-2">Send us a message</h2>
                    {formStatus === "success" ? (
                        <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="font-medium text-[#0a2e8c]">Message sent successfully!</h3>
                                <p className="text-[#1b3fa0] mt-1">
                                    Thank you for reaching out. We'll get back to you as soon as possible.
                                </p>
                                <button
                                    className="mt-4 bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded font-medium"
                                    onClick={() => setFormStatus("idle")}
                                >
                                    Send another message
                                </button>
                            </div>
                        </div>
                    ) : formStatus === "error" ? (
                        <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="font-medium text-[#0a2e8c]">Something went wrong</h3>
                                <p className="text-[#1b3fa0] mt-1">
                                    We couldn't send your message. Please try again or contact us directly.
                                </p>
                                <button
                                    className="mt-4 bg-orange-500 hover:bg-orange-400 text-black px-4 py-2 rounded font-medium"
                                    onClick={() => setFormStatus("idle")}
                                >
                                    Try again
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-[#b3c6f7] focus:outline-none focus:ring-2 focus:ring-[#0a2e8c]"
                                placeholder="Your Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-[#b3c6f7] focus:outline-none focus:ring-2 focus:ring-[#0a2e8c]"
                                placeholder="Email Address"
                            />
                            <input
                                type="text"
                                name="subject"
                                value={formState.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-[#b3c6f7] focus:outline-none focus:ring-2 focus:ring-[#0a2e8c]"
                                placeholder="Subject"
                            />
                            <textarea
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-[#b3c6f7] focus:outline-none focus:ring-2 focus:ring-[#0a2e8c]"
                                placeholder="Message"
                            />
                            <button
                                type="submit"
                                className="w-full bg-[#ff7a01] hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow transition-colors duration-200"
                                disabled={formStatus === "submitting"}
                            >
                                {formStatus === "submitting" ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>
                {/* Contact Info and FAQ */}
                <div className="flex flex-col gap-8">
                    <div className="bg-white/90 rounded-2xl shadow-2xl p-8 border border-[#b3c6f7]">
                        <h3 className="text-xl font-bold text-[#0a2e8c] mb-4">Contact Information</h3>
                        <div className="mb-2">
                            <span className="block text-[#1b3fa0] font-semibold">Phone Number</span>
                            <a href="tel:+254799078848" className="block text-orange-600 cursor-pointer hover:underline">+254 (799) 078848</a>
                            <span className="block text-xs text-[#1b3fa0]">Monday-Friday, 9AM-6PM EAT</span>
                        </div>
                        <div>
                            <span className="block text-[#1b3fa0] font-semibold">Email Address</span>
                            <a
                                href="mailto:support@ajira365.com"
                                className="block text-orange-600 cursor-pointer hover:underline">support@ajira365.com</a>
                            <span className="block text-xs text-[#1b3fa0]">We typically respond within 24 hours</span>
                        </div>
                    </div>
                    <div className="bg-white/90 rounded-2xl shadow-2xl p-8 border border-[#b3c6f7]">
                        <h3 className="text-xl font-bold text-[#0a2e8c] mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-3">
                            <div>
                                <span className="font-semibold text-[#1b3fa0]">How quickly can I start using the platform?</span>
                                <p className="text-[#0a2e8c] text-sm">You can start immediately after signing up. Our onboarding process takes less than 5 minutes.</p>
                            </div>
                            <div>
                                <span className="font-semibold text-[#1b3fa0]">Is the service really free?</span>
                                <p className="text-[#0a2e8c] text-sm">Yes, our core features are completely free to use (as of now). We may introduce premium features in the future.</p>
                            </div>
                            <div>
                                <span className="font-semibold text-[#1b3fa0]">How accurate is the AI feedback?</span>
                                <p className="text-[#0a2e8c] text-sm">Our AI is trained on thousands of real interviews and provides feedback comparable to human recruiters in most cases.</p>
                            </div>
                            <a href="/#faq" className="block mt-2 text-orange-600 font-semibold hover:underline">View all FAQs &gt;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
