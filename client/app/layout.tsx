import "./globals.css";
import localFont from "next/font/local";
import React from "react";

const robotoMono = localFont({
  src: "../public/fonts/Roboto_Mono/RobotoMono-VariableFont_wght.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-mono",
});

const robotoFlex = localFont({
  src: "../public/fonts/Roboto_Flex/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-text",
});

const play = localFont({
  src: "../public/fonts/Play/Play-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-header",
});

const notable = localFont({
  src: "../public/fonts/Notable/Notable-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-title",
});

const smooch = localFont({
  src: "../public/fonts/Smooch_Sans/SmoochSans-VariableFont_wght.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-smooch",
});

const libre = localFont({
  src: "../public/fonts/Libre_Barcode_39/LibreBarcode39-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-libre",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full ${robotoFlex.variable} ${robotoMono.variable} ${play.variable} ${notable.variable} ${libre.variable} ${smooch.variable}`}
    >
      <body className="flex flex-col h-full text-primary-dark dark:fill-primary-light dark:text-primary-light dark:bg-primary-dark">
        {children}
      </body>
    </html>
  );
}
