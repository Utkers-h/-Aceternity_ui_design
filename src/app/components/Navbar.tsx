"use client"

import React, { useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div
                className={cn(
                    "fixed bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-20 w-full top-5 inset-x-0 z-50 flex flex-wrap items-center justify-between p-4",
                    isOpen ? "h-screen" : "h-auto",
                    "md:h-auto"
                )}
            >
                <div className="text-lg font-bold">NAVBAR</div>

                <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto`}>
                    <Menu setActive={setActive} >
                        <MenuItem setActive={setActive} active={active} item="Home" />
                        <MenuItem setActive={setActive} active={active} item="Products">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                <HoveredLink href="/branding">Branding</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Resources">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Pricing" />
                    </Menu>
                </div>

                <div className="space-x-4 hidden md:flex">
                    <button className="px-4 py-2 rounded-md border border-purple-200 bg-purple-100 font-semibold text-purple-700 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        Log in
                    </button>
                    <button className="px-4 py-2 rounded-md border border-purple-700 font-semibold bg-purple-700 text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        Signup
                    </button>
                </div>

                {/* Hamburger Menu */}
                <button
                    id="menu-btn"
                    className="block hamburger md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`hamburger-top ${isOpen ? "transform rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`hamburger-middle ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`hamburger-bottom ${isOpen ? "transform -rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>
        </>
    );
}


export default Navbar
