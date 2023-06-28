import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "messianico.",
  description: "Applicativo de agendamento para igrejas messianicas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
