import Footer from "@/module/share/Footer";
import Navbar from "@/module/share/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex relativ flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
