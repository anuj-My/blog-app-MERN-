import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="py-6 dark:bg-slate-700 dark:text-slate-400 text-black flex justify-center items-center gap-4">
      <Logo />
      <p className="">Blog Application || 2023</p>
    </div>
  );
};

export default Footer;
