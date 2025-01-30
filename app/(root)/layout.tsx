// "use client";
import React from "react";
// import NavbarPS from "@/components/NavbarPS";
// import dynamic from "next/dynamic";

// const DynamicWhatsapp = dynamic(() => import("@/components/Whatsapp"));
// const DynamicFooter = dynamic(() => import("@/components/Footer"));

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <div>
        <div>
          <nav className="w-full">
            <NavbarPS />
          </nav>
          {children}
          <DynamicWhatsapp />
          <footer className="bg-[#1f1f1f] px-5 sm:px-10">
            <DynamicFooter />
          </footer>
        </div>
      </div> */}
      {children}
    </>
  );
};

export default layout;
