"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({ firstName, lastName, phone, email, password, agreeTerms });
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row text-white font-sans">
      {/* Левая сторона: Форма регистрации */}
      <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 lg:px-20 xl:px-32">
        <div className="mx-auto w-full max-w-sm">
          <h2 className="text-[36px] font-semibold tracking-tight text-center md:text-center mb-8">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Имя и Фамилия в одну строку */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-base leading-6 text-color mb-2"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                  placeholder="Type here"
                  required
                  className="w-full rounded-md px-3 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-base leading-6 text-color mb-2"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                  placeholder="Type here"
                  required
                  className="w-full rounded-md px-3 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Поле Телефон */}
            <div>
              <label
                htmlFor="phone"
                className="block text-base leading-6 text-color mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
                placeholder="Type here"
                required
                className="w-full rounded-md px-3 py-3 text-base leading-6 text-colorall placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Поле Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-base leading-6 text-color mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Type here"
                required
                className="w-full rounded-md px-3 py-3 text-base leading-6 text-white placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Поле Пароль */}
            <div>
              <label
                htmlFor="password"
                className="block text-base leading-6 text-color mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Type here"
                  required
                  className="w-full rounded-md px-3 py-3 pr-10 text-base leading-6 text-white placeholder-color outline-hidden border border-transparent focus:border-blue-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-300 cursor-pointer"
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <p className="mt-1.5 text-base text-right text-color">
                Password must be at least 8 characters long
              </p>
            </div>

            {/* Чекбокс соглашения */}
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAgreeTerms(e.target.checked)
                  }
                  required
                  className="h-4 w-4 rounded-sm border-gray-700 bg-[#12131a] text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900 cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-color">
                  I Agree To The Website{" "}
                  <Link href="/login" className="text-colorall hover:underline">
                    Terms & Conditions
                  </Link>
                </label>
              </div>
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className="w-full rounded-md bg-[#2563eb] py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
            >
              Sign Up
            </button>
            <div className="text-center text-xs leading-6 text-colorall">
              Have an Account?{" "}
              <Link
                href="/login"
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                Login Here
              </Link>
            </div>
          </form>
        </div>

        <div className="mt-auto pt-8 text-center text-base leading-6 text-colorall">
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
