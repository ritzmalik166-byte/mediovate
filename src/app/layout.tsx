import type { Metadata } from "next";
import { Montserrat, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mediovate.in"),
  title: "Best Influencer Marketing Agency in India | Mediovate",
  description:
    "Looking for the best influencer marketing agency in India? Mediovate delivers ROI-driven influencer campaigns, creator collaborations, UGC content, and brand promotions for startups and enterprises.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/Home/m_logo.png",
    apple: "/assets/Home/m_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
