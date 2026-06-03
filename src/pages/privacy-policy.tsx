import { LegalPageLayout, LegalSection, LegalParagraph, LegalList, LegalMailLink } from "../components/LegalPageLayout";

export default function PrivacyPolicy() {
    return (
        <LegalPageLayout
            title="Privacy Policy"
            lastUpdated="August 3, 2025"
            intro="At Ajira365, your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform. We are committed to transparency and safeguarding your data in compliance with global privacy standards."
        >
            <LegalSection title="1. Information We Collect">
                <LegalList
                    items={[
                        "Personal information you provide (e.g., name, email, CV details)",
                        "Usage data and analytics",
                        "Cookies and similar technologies",
                    ]}
                />
            </LegalSection>

            <LegalSection title="2. How We Use Your Information">
                <LegalList
                    items={[
                        "To provide and improve our services",
                        "To communicate with you about your account and updates",
                        "To personalize your experience",
                        "To comply with legal obligations",
                    ]}
                />
            </LegalSection>

            <LegalSection title="3. Data Security">
                <LegalParagraph>
                    We use industry-standard security measures to protect your information. Your data is never sold to third parties. You have full control over your data and can request deletion at any time.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="4. Your Rights">
                <LegalList
                    items={[
                        "Access, correct, or delete your personal data",
                        "Opt out of marketing communications",
                        "Request data portability",
                    ]}
                />
            </LegalSection>

            <LegalSection title="5. Changes to This Policy">
                <LegalParagraph>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="6. Contact Us">
                <LegalParagraph className="mb-8">
                    For detailed information, please contact us at <LegalMailLink email="privacy@ajira365.com" />.
                </LegalParagraph>
            </LegalSection>
        </LegalPageLayout>
    );
}
