"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  type: "default" | "dropdown" | "link";
  state: "default" | "openMenu" | "selected";
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, type = "default", state = "default" }) => {
  const general = "flex items-center text-sm font-medium text-neutrals-900 px-base py-xs rounded-m"

  const typeStyles = {
    default: "",
    dropdown: "",
    link: "",
  };

  const stateStyles = {
    default: "",
    openMenu: "bg-neutrals-200",
    selected: "bg-neutrals-200",
  }

  const pathname = usePathname(); 
  const isActive = pathname === href; //TODO

  return (
    <Link
      href={href}
      className={`${general} ${stateStyles[state]} ${typeStyles[type]}`}
    >
      {label}
    </Link>
  );
};

export default NavItem;
