"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <header className="">
      <footer className="bg-backgroundFooter ">
        <div className=" pt-30 px-52 ">
          <div className="flex justify-between items-center">
            <h1 className="my-10">
              <Image
                src="/Logo.svg"
                alt="Описание картинки"
                width={150}
                height={150}
              />
            </h1>
            <nav className="flex justify-between gap-5">
              <p className="text-colorall text-xl font-semibold">Community</p>
              <ul className="flex items-start gap-2">
                <li>
                  <Link
                    href="/login"
                    className="pb-2 border-colorCard hover:drop-shadow-[0_0_15px_rgba(88,101,242,0.9)] transition delay-150 duration-300 ease-in-ou"
                  >
                    <Image
                      src="/brand-discord.svg"
                      alt="Описание картинки"
                      width={25}
                      height={25}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="pb-2 border-colorCard hover:drop-shadow-[0_0_15px_rgba(88,101,242,0.9)] transition delay-150 duration-300 ease-in-ou"
                  >
                    <Image
                      src="/brand-telegram.svg"
                      alt="Описание картинки"
                      width={25}
                      height={25}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="pb-2 border-colorCard hover:drop-shadow-[0_0_15px_rgba(88,101,242,0.9)] transition delay-150 duration-300 ease-in-ou"
                  >
                    <Image
                      src="/brand-instagram.svg"
                      alt="Описание картинки"
                      width={25}
                      height={25}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="pb-2 border-colorCard hover:drop-shadow-[0_0_15px_rgba(88,101,242,0.9)] transition delay-150 duration-300 ease-in-ou"
                  >
                    <Image
                      src="/brand-linkedin.svg"
                      alt="Описание картинки"
                      width={25}
                      height={25}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="pb-2 border-colorCard hover:drop-shadow-[0_0_15px_rgba(88,101,242,0.9)] transition delay-150 duration-300 ease-in-ou"
                  >
                    <Image
                      src="/brand-youtube.svg"
                      alt="Описание картинки"
                      width={25}
                      height={25}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-between items-start gap-25  relative">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-gray-500/20 via-gray-500 to-gray-500/20"></div>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">
                Crypto Brains
              </h1>
              <ul className="text-color mt-4">
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/about" className="pb-2">
                    About Us
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/ourteam" className="pb-2">
                    Our Team
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/roadmap" className="pb-2">
                    Road Map
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/riskdisclosure" className="pb-2">
                    Risk Disclosure
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">Knowledge</h1>
              <ul className="text-color mt-4">
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/faq" className="pb-2">
                    F.A.Q.
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/articals" className="pb-2">
                    Articals
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/videotutorial" className="pb-2">
                    Video Tutorial
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/begginnersguide" className="pb-2">
                    Beginner’s Guide
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">Services</h1>
              <ul className="text-color mt-4">
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/apiservice" className="pb-2">
                    API Service
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/tokenlisting" className="pb-2">
                    Token Listing
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/apidocument" className="pb-2">
                    API Document
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/ticketservices" className="pb-2">
                    Ticket Services
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">Exchange</h1>
              <ul className="text-color mt-4">
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/p2p" className="pb-2">
                    P2P
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/referral" className="pb-2">
                    Referral
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/markets" className="pb-2">
                    Markets
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/affiliateprogram" className="pb-2">
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">
                Support Sevice
              </h1>
              <ul className="text-color mt-4">
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/career" className="pb-2">
                    Career
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/comunity" className="pb-2">
                    Comunity
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/customerchat" className="pb-2">
                    Customer Chat
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/technicalsupport" className="pb-2">
                    Technical Support
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">Press</h1>
              <ul className="text-color mt-4">
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/blog" className="pb-2">
                    Blog
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/news" className="pb-2">
                    News
                  </Link>
                </li>
                <li className="list-none text-base hover:text-blue-500/80">
                  <Link href="/events" className="pb-2">
                    Events
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="relative mt-10">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-gray-500/20 via-gray-500 to-gray-500/20"></div>
            <div>
              <p></p>
              <div></div>
              <div></div>
            </div>
            <div>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </footer>
    </header>
  );
}
