"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center text-sm font-medium px-base py-xs rounded-m text-neutrals-900 ${
        isActive && "bg-neutrals-200"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavItem;
