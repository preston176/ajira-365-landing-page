import type { ReactNode } from "react";

interface LegalPageLayoutProps {
    title: string;
    lastUpdated?: string;
    intro?: ReactNode;
    children: ReactNode;
}

/**
 * Shared scaffold for the static legal/info pages (about, careers, privacy,
 * cookies, terms, data processing). Renders the page section, container,
 * heading, optional "Last Updated" line, optional intro, body, and the
 * "Back to Home" link.
 */
export function LegalPageLayout({ title, lastUpdated, intro, children }: LegalPageLayoutProps) {
    return (
        <section className="min-h-screen bg-[#f5f8ff] py-12">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0a2e8c] mb-2 mt-8">{title}</h1>
                {lastUpdated && (
                    <p className="text-[#1b3fa0] mb-6 text-sm">Last Updated: {lastUpdated}</p>
                )}
                {intro && <p className="text-[#1b3fa0] mb-6">{intro}</p>}
                {children}
                <a href="/" className="text-[#ff7a01] hover:underline text-sm">
                    &larr; Back to Home
                </a>
            </div>
        </section>
    );
}

/** A section heading followed by its content. */
export function LegalSection({ title, children }: { title: string; children?: ReactNode }) {
    return (
        <>
            <h2 className="text-2xl font-semibold text-[#0a2e8c] mt-10 mb-2">{title}</h2>
            {children}
        </>
    );
}

/** A body paragraph. Pass `className` to override the default bottom margin. */
export function LegalParagraph({
    children,
    className = "mb-4",
}: {
    children: ReactNode;
    className?: string;
}) {
    return <p className={`text-[#1b3fa0] ${className}`}>{children}</p>;
}

/** A bulleted list of items. */
export function LegalList({ items }: { items: ReactNode[] }) {
    return (
        <ul className="list-disc pl-6 text-[#1b3fa0] mb-4">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}

/** A styled inline mailto link. */
export function LegalMailLink({ email }: { email: string }) {
    return (
        <a href={`mailto:${email}`} className="text-[#ff7a01] underline">
            {email}
        </a>
    );
}
