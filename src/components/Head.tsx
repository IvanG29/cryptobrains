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
        <div className="">
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
