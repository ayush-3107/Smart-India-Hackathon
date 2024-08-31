import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="bg-[#2b6b4b] text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ScheduLine || All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
