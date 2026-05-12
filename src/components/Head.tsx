"use client";
import Image from "next/image";
import Link from "next/link";

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
        <div className="xl:flex hidden">
          <nav className="flex justify-between gap-20 ">
            <li className="list-none text-xl  hover:text-blue-500/80">
              <Link href="/market">Market</Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/trade">Trade</Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/earn">Earn</Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/about">About</Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/career">Career</Link>
            </li>
          </nav>
        </div>
        <div className="">
          <nav className="flex justify-between items-center gap-5 text-colorall">
            <li className="hidden md:text list-none text-xl">Log in</li>
            <li className="list-none text-xl border-2 border-blue-500 p-2 rounded-2xl bg-blue-500">
              Sign up
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
}
