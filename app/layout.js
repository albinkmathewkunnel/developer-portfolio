import { Inter } from "next/font/google";
import ClientOnlyWrapper from "./components/ClientOnlyWrapper";
import "./css/globals.scss";
import "./css/card.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Albin K Mathew - Software Developer",
  description:
    "This is the portfolio of Albin K Mathew. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnlyWrapper>{children}</ClientOnlyWrapper>
      </body>
    </html>
  );
}
