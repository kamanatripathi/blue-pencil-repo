import type { Metadata } from "next";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Providers } from './provider';
import {Roboto} from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100' , '300' , '400' , '500' , '700' , '900'],
  style: ['normal' , 'italic'],
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Generated by Kamana",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className} >
        <Providers>{children}</Providers>
        </body>
     </html>
  );
}
