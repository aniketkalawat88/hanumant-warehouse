import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HANUMANT WAREHOUSE",
  description: "HANUMANT Warehouse is a trusted name in the agricultural industry, specializing in the supply and export of high-quality products. Located in Merta City, the largest raw material mandi in India, we ensure the best quality guar products, spices, and agricultural commodities. Our expertise in processing and quality control allows us to deliver premium products to our clients worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.12223.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n   body {\n            font-family: 'Roboto', sans-serif;\n        }\n  ",
          }}
        />
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-primary-main text-white py-2 px-4 rounded-r-lg z-10 flex flex-col gap-2">
          <Link className="" href="#">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link className="" href="#">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="" href="#">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link className="" href="#">
            <i className="fab fa-pinterest"></i>
          </Link>
        </div>
        <div className="fixed bottom-4 right-4 z-20">
        <Link href={'https://api.whatsapp.com/send?phone=+919876543210&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?'} className="bg-primary-main text-white py-2 px-4 rounded-full flex items-center shadow-md">
          <i className="fas fa-comments mr-2" /> Click Here To Chat
        </Link>
      </div>
        {children}
      </body>
    </html>
  );
}
