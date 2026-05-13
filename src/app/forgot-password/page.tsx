"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");

  const handleSendCode = (): void => {
    // Логика отправки кода подтверждения на Email/Телефон
    console.log("Sending code to:", emailOrPhone);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Логика проверки кода
    console.log({ emailOrPhone, verificationCode });

    router.push("/new-password");
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row text-colorall">
      <div className="flex w-full flex-col justify-center px-6 py-36 md:w-1/2 lg:px-20 xl:px-32">
        <div className="mx-auto w-full max-w-sm">
          <h2 className="text-[36px] font-semibold tracking-tight text-center md:text-center mb-8">
            Forgot Password
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="emailOrPhone"
                  className="block text-base text-color"
                >
                  Email or Phone
                </label>
                <button
                  type="button"
                  onClick={handleSendCode}
                  className="text-base leading-6 text-[#2563eb] hover:text-blue-400 font-medium transition-colors cursor-pointer"
                >
                  Send Code
                </button>
              </div>
              <input
                id="emailOrPhone"
                type="text"
                value={emailOrPhone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmailOrPhone(e.target.value)
                }
                placeholder="Type here"
                required
                className="w-full rounded-md px-3 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="verificationCode"
                className="block text-base leading-6 text-color mb-2"
              >
                Verification Code
              </label>
              <input
                id="verificationCode"
                type="text"
                value={verificationCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setVerificationCode(e.target.value)
                }
                placeholder="Type here"
                required
                className="w-full rounded-md px-3 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#2563eb] py-3 text-base leading-6 font-medium text-colorall hover:bg-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
            >
              Submit Code
            </button>

            <div className="text-center text-base leading-6 text-color">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-color hover:text-colorall font-medium transition-colors"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </div>

        <div className="mt-auto pt-8 text-center text-base leading-6 text-color">
          Copyright 2023 All Rights Reserved
        </div>
      </div>

      <div className="hidden md:flex w-1/2 items-center justify-center p-12">
        <Image
          src="/Auth.svg"
          alt="Описание картинки"
          width={811}
          height={811}
          className=""
        />
      </div>
    </div>
  );
}
