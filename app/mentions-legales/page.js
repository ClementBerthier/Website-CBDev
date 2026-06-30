import LegalMention from "@/components/LegalMention/LegalMention";

export const metadata = {
    title: "Mentions légales",
    description:
        "Mentions légales, CGU, CGV et politique de confidentialité du site Clément Berthier Développeur.",
    alternates: {
        canonical: "/mentions-legales",
    },
};

export default function LegalMentionPage() {
    return <LegalMention />;
}
