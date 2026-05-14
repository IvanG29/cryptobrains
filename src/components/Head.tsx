"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { NavItem } from "./NavItem";

const navigationConfig = [
  {
    label: "Market",
    href: "/market",
    options: [
      { value: "markets", label: "Markets Overview", href: "/market" },
      { value: "info", label: "Token Info", href: "/market/info" },
      { value: "news", label: "Crypto News", href: "/news" },
    ],
  },
  {
    label: "Trade",
    href: "/trade",
    options: [
      { value: "spot", label: "Spot", href: "/trade/spot" },
      { value: "margin", label: "Margin", href: "/trade/margin" },
      { value: "p2p", label: "P2P Trading", href: "/trade/p2p" },
    ],
  },
  {
    label: "Earn",
    href: "/earn",
    options: [
      { value: "staking", label: "Staking", href: "/earn/staking" },
      {
        value: "affiliate",
        label: "Affiliate Program",
        href: "/earn/affiliate",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    options: [
      { value: "about-us", label: "About Us", href: "/about" },
      { value: "team", label: "Our Team", href: "/about/team" },
      { value: "roadmap", label: "Road Map", href: "/about/roadmap" },
    ],
  },
  {
    label: "Career",
    href: "/career",
  },
];

export default function Head() {
  return (
    <header className="">
      <div className="bg-background  text-color flex justify-between items-center py-8 px-41.5">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Описание картинки"
            width={200}
            height={200}
            className=""
          />
        </Link>
        <div className="">
          <div className="flex justify-between gap-14">
            <ul className="flex items-center gap-16">
              {navigationConfig.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  options={item.options}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <nav className="flex justify-between items-center gap-5 text-colorall">
            <Link href="/login">
              <li className="list-none text-xl hover:text-blue-500/80">
                Log in
              </li>
            </Link>
            <Link href="/auth">
              <li className="list-none text-xl border-2 border-blue-500 p-2 rounded-2xl bg-blue-500 hover:text-blue-800/85">
                Sign up
              </li>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
