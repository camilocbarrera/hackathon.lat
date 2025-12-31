import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025 Wrapped | The Hackathon Company",
  description:
    "A year of innovation, community, and building the future of Latin America. +$30K raised, 700+ hackers, 127 submissions across 2 countries.",
  openGraph: {
    title: "2025 Wrapped | The Hackathon Company",
    description:
      "A year of innovation, community, and building the future of Latin America. +$30K raised, 700+ hackers, 127 submissions across 2 countries.",
    type: "website",
    url: "https://hackathon.lat/2025",
    images: [
      {
        url: "/og?title=2025%20Wrapped&description=A%20year%20of%20innovation%2C%20community%2C%20and%20building%20the%20future%20of%20Latin%20America",
        width: 1200,
        height: 630,
        alt: "2025 Wrapped | The Hackathon Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2025 Wrapped | The Hackathon Company",
    description:
      "A year of innovation, community, and building the future of Latin America. +$30K raised, 700+ hackers, 127 submissions across 2 countries.",
  },
};

export default function Wrapped2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

