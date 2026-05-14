"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface DropdownOption {
  value: string;
  label: string;
  href: string;
}

interface NavItemProps {
  label: string;
  href: string;
  options?: DropdownOption[]; // Опционально: если нет опций, будет просто ссылка
}

export const NavItem: React.FC<NavItemProps> = ({ label, href, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const hasDropdown = options && options.length > 0;

  // Закрытие списка при клике вне элемента
  useEffect(() => {
    if (!hasDropdown) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [hasDropdown]);

  return (
    <li
      ref={dropdownRef}
      className="relative list-none text-xl text-color transition-colors duration-200 hover:text-blue-500/80"
    >
      <div className="flex items-center gap-3">
        {/* Главная ссылка пункта */}
        <Link href={href} className="py-2" onClick={() => setIsOpen(false)}>
          {label}
        </Link>

        {/* Кнопка-стрелка рендерится только если есть вложенные элементы */}
        {hasDropdown && (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 focus:outline-none"
            aria-expanded={isOpen}
          >
            <svg
              className={`h-4 w-4 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Выпадающее меню подкатегорий */}
      {hasDropdown && (
        <div
          className={`absolute left-0 z-50 mt-1 w-48 overflow-hidden rounded-lg border border-gray-700 bg-[#1a1a1a] shadow-xl transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-60 opacity-100 translate-y-0 visible"
              : "max-h-0 opacity-0 -translate-y-2 invisible pointer-events-none"
          }`}
        >
          <ul className="py-1">
            {options.map((option) => (
              <li key={option.value}>
                <Link
                  href={option.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-lg text-color transition-colors duration-150 hover:bg-gray-800 hover:text-blue-400"
                >
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
