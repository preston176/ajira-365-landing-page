import { LegalPageLayout, LegalSection, LegalParagraph, LegalList, LegalMailLink } from "../components/LegalPageLayout";

export default function TermsOfService() {
    return (
        <LegalPageLayout
            title="Terms of Service"
            lastUpdated="August 3, 2025"
            intro="Welcome to our platform. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website if you do not accept all of the terms and conditions stated on this page."
        >
            <LegalSection title="1. Introduction">
                <LegalParagraph>
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of the jurisdiction in which we operate.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="2. License to Use">
                <LegalParagraph className="mb-2">
                    Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on our website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
                </LegalParagraph>
                <LegalList
                    items={[
                        "Republish material from this website",
                        "Sell, rent or sub-license material from the website",
                        "Reproduce, duplicate or copy material from the website",
                        "Redistribute content from this website (unless content is specifically made for redistribution)",
                    ]}
                />
            </LegalSection>

            <LegalSection title="3. User Accounts">
                <LegalParagraph>
                    When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service. You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="4. Services">
                <LegalParagraph>
                    Our platform provides AI-powered career development tools, including mock interviews, CV building, and personalized feedback. While we strive to provide accurate and helpful services, we do not guarantee employment outcomes or specific results from using our platform. The information and feedback provided by our AI tools are for educational and practice purposes only. You should use your own judgment when applying this information to your actual job search and interviews.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="5. User Content">
                <LegalParagraph>
                    Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness. By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="6. Limitation of Liability">
                <LegalParagraph>
                    In no event shall we, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="7. Disclaimer">
                <LegalParagraph>
                    Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="8. Governing Law">
                <LegalParagraph>
                    These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="9. Changes to Terms">
                <LegalParagraph>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="10. Contact Us">
                <LegalParagraph className="mb-8">
                    If you have any questions about these Terms, please contact us at <LegalMailLink email="privacy@ajira365.com" />.
                </LegalParagraph>
            </LegalSection>
        </LegalPageLayout>
    );
}
