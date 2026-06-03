import { LegalPageLayout, LegalSection, LegalParagraph, LegalList, LegalMailLink } from "../components/LegalPageLayout";

export default function DataProcessing() {
    return (
        <LegalPageLayout
            title="Data Processing"
            lastUpdated="August 3, 2025"
            intro="Ajira365 is committed to processing your data responsibly and transparently. This page outlines how we handle, store, and protect your information in compliance with data protection laws."
        >
            <LegalSection title="1. Purpose of Data Processing">
                <LegalParagraph>
                    We process your data only for legitimate business purposes, such as providing our services, improving user experience, and complying with legal obligations.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="2. Data Security">
                <LegalParagraph>
                    We implement robust security measures to safeguard your data against unauthorized access, alteration, or disclosure.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="3. Your Rights">
                <LegalList
                    items={[
                        "Access, correct, or delete your data",
                        "Request data portability",
                        "Withdraw consent at any time",
                    ]}
                />
            </LegalSection>

            <LegalSection title="4. Compliance">
                <LegalParagraph>
                    We comply with all applicable data protection regulations and industry standards.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="5. Contact Us">
                <LegalParagraph className="mb-8">
                    For more details, contact <LegalMailLink email="privacy@ajira365.com" />.
                </LegalParagraph>
            </LegalSection>
        </LegalPageLayout>
    );
}
