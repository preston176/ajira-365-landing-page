import { LegalPageLayout, LegalSection, LegalParagraph, LegalList, LegalMailLink } from "../components/LegalPageLayout";

export default function Careers() {
    return (
        <LegalPageLayout
            title="Careers at Ajira365"
            lastUpdated="August 3, 2025"
            intro="Join Ajira365 and help shape the future of work in Africa. We are a passionate team of technologists, career coaches, and innovators dedicated to empowering job seekers and professionals. If you’re driven by impact and want to make a difference, explore our open roles or send us your CV for future opportunities."
        >
            <LegalSection title="Why Work With Us?">
                <LegalList
                    items={[
                        "Collaborative, mission-driven culture",
                        "Opportunities for growth and learning",
                        "Remote-friendly and flexible work environment",
                        "Make a real impact on people’s lives",
                    ]}
                />
            </LegalSection>

            <LegalSection title="Open Positions">
                <LegalParagraph>
                    No open positions at the moment. Check back soon or email us at <LegalMailLink email="careers@ajira365.com" />.
                </LegalParagraph>
            </LegalSection>
        </LegalPageLayout>
    );
}
