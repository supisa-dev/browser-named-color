import { ReactNode } from 'react';
import Header from '../header';
import Footer from '../footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="w-full h-[calc(100vh-8rem)] relative">{children}</main>
      <Footer />
    </>
  );
}
