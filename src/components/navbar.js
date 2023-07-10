'use client';

import headerNavLinks from "../../data/headerNavLinks";
import ThemeSwitch from "./themeswitch"
import MobileNav from "./mobilenav"
import Link from 'next/link'
import siteMetadata from "../../data/sitemetadata";

export default function Navbar(){
    return (
      <header className="flex items-center justify-between py-3 mx-auto">
        <div>
          <Link href="/" aria-label={siteMetadata.publishName} passHref >
            <div className="flex items-center justify-between">
              <div className="text-xl whitespace-nowrap font-semibold rounded-lg sm:block text-zinc-800 hover:bg-zinc-50 dark:hover:bg-slate-800 dark:text-zinc-200 select-none tracking-tight px-3 py-1 duration-300">
                {siteMetadata.publishName}
              </div>
            </div>
          </Link>
        </div>
        <nav className="flex items-center text-base leading-6">
          <div className="hidden sm:block" tabIndex="0">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="rounded-lg px-3 py-2 font-normal text-zinc-500 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-slate-800 transition trasnform duration-300 select-none"
                 >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
        <div className="flex items-center text-base leading-5">
        <Link href="/search" aria-label="Search">
          <svg
              className="h-5 w-5 mb-1 mx-1 text-zinc-500 dark:text-zinc-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            </Link>
            <MobileNav />
          <ThemeSwitch />
        </div>
      </header>
    );
}