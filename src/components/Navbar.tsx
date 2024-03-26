'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 backdrop-blur-sm", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Projects"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">Web Dev</HoveredLink>
            <HoveredLink href="/courses">
Machine Learning            </HoveredLink>
            <HoveredLink href="/courses">
C/C++ OOPs            </HoveredLink>
            <HoveredLink href="/courses">Blockchain</HoveredLink>
            
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
            
            </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar