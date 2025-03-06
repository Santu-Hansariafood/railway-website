"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/app/components/common/Header/Header"));
const Footer = dynamic(() => import("@/app/components/common/Footer/Footer"));

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content - Full Width */}
      <main className="flex-grow pt-[70px] bg-gray-100">
        <div className="w-full bg-white">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
