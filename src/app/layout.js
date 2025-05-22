import "@/app/globals.css";
import "@/assets/styles/index.css";
import "@/assets/styles/serv.css";
import "@/assets/styles/about.css";
import "@/assets/styles/contact.css";
import "@/assets/styles/equip.css";
import "@/assets/styles/footer.css";
import "@/assets/styles/maintanencePlan.css";
import "@/assets/styles/schedule.css";
import "@/assets/styles/serv.css";
import "@/assets/styles/buttons.css";
import "@/assets/styles/navbar.css";
import "@/assets/styles/areas.css";

import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import Script from "next/script";

export const metadata = {
  title: "Smart HVAC",
  description: "Smart HVAC application with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="beforeInteractive"
        />

        <Script id="recaptcha-callback" strategy="lazyOnload">
          {`
            function onSubmit(token) {
              console.log("Token получен:", token);
              document.getElementById("demo-form").submit();
            }
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
