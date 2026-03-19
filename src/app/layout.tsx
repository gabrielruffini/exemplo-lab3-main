import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});


const sora = Sora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Lab3 | Tecnologia que organiza, automatiza e escala",
  description: "Desenvolvemos aplicativos, sistemas personalizados, automações e sites para empresas que querem crescer com mais eficiência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${poppins.variable} ${sora.variable} antialiased bg-[#0a0c16] text-off-white font-poppins min-h-screen selection:bg-[#ffd7a0]/30 selection:text-[#ffd7a0]`}
      >
        {children}
      </body>
    </html>
  );
}
