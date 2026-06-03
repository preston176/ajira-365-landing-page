import { LegalPageLayout, LegalSection, LegalParagraph, LegalList, LegalMailLink } from "../components/LegalPageLayout";

export default function CookiePolicy() {
    return (
        <LegalPageLayout
            title="Cookie Policy"
            lastUpdated="August 3, 2025"
            intro="Ajira365 uses cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use."
        >
            <LegalSection title="1. What Are Cookies?">
                <LegalParagraph>
                    Cookies are small text files stored on your device by your web browser. They help websites remember your preferences, login details, and browsing activity to improve your experience.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="2. How We Use Cookies">
                <LegalList
                    items={[
                        "To understand how you use our platform and improve our services",
                        "To remember your preferences and settings",
                        "To analyze site traffic and usage patterns",
                        "To personalize content and features",
                    ]}
                />
            </LegalSection>

            <LegalSection title="3. Managing Cookies">
                <LegalParagraph>
                    You can manage or disable cookies in your browser settings. Please note that disabling cookies may affect the functionality of our platform.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="4. Third-Party Cookies">
                <LegalParagraph>
                    Some features on Ajira365 may use third-party cookies (e.g., analytics, social media integrations). We do not control these cookies and recommend reviewing the privacy policies of those third parties.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="5. Changes to This Policy">
                <LegalParagraph>
                    We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="6. Contact Us">
                <LegalParagraph className="mb-8">
                    If you have questions about our use of cookies, please contact us at <LegalMailLink email="privacy@ajira365.com" />.
                </LegalParagraph>
            </LegalSection>
        </LegalPageLayout>
    );
}
