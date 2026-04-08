import SEOPageWrapper from "@/components/SEOPageWrapper";
import PrivacyPolicyClient from "@/components/PrivacyPolicyClient";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title: "Privacy Policy | MSA Club - MSA Academy",
  description:
    "Read the MSA Club privacy policy. Learn how MSA Academy collects, uses, and protects your personal information, payment data, and account details.",
  keywords: [
    "MSA Club privacy policy",
    "MSA Academy privacy",
    "MSA Club data protection",
    "MSA Club terms",
  ].join(", "),
  alternates: {
    canonical: "https://msa-club.com/privacy-policy",
  },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Privacy Policy | MSA Club",
    description:
      "Read the MSA Club privacy policy. Learn how we collect, use, and protect your personal information.",
    url: "https://msa-club.com/privacy-policy",
    images: [
      {
        url: "https://msa-club.com/hero_banner.jpg",
        width: 1200,
        height: 630,
        alt: "MSA Club - Animation Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | MSA Club",
    description:
      "Read the MSA Club privacy policy. Learn how we protect your personal information.",
    images: ["https://msa-club.com/hero_banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <SEOPageWrapper>
      <PrivacyPolicyClient />
    </SEOPageWrapper>
  );
}
