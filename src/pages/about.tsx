import { LegalPageLayout, LegalSection, LegalParagraph, LegalList, LegalMailLink } from "../components/LegalPageLayout";

export default function About() {
    return (
        <LegalPageLayout
            title="About Ajira365"
            lastUpdated="August 3, 2025"
            intro="Ajira365 is Africa’s leading AI-powered career platform, designed to help job seekers and professionals unlock their full potential. Our mission is to bridge the gap between talent and opportunity by providing innovative interview practice tools, instant feedback, and actionable career resources. We are committed to empowering individuals to achieve their career goals and drive economic growth across the continent."
        >
            <LegalSection title="Our Core Features">
                <LegalList
                    items={[
                        "AI-driven mock interviews tailored to your industry and role",
                        "Personalized feedback to help you improve and succeed",
                        "Comprehensive resources for job search, CV writing, and career growth",
                        "Trusted by thousands of users across Africa and beyond",
                    ]}
                />
            </LegalSection>

            <LegalSection title="Our Mission">
                <LegalParagraph>
                    To empower job seekers with the tools, knowledge, and confidence to succeed in today’s competitive job market.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="Contact Us">
                <LegalParagraph className="mb-8">
                    For more information about Ajira365, please contact us at <LegalMailLink email="info@ajira365.com" />.
                </LegalParagraph>
            </LegalSection>
        </LegalPageLayout>
    );
}
