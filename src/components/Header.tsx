"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Building2, Briefcase, Mail } from "lucide-react";

const navItems = [
  { href: "/", label: "ホーム", icon: Home },
  { href: "/about/", label: "会社概要", icon: Building2 },
  { href: "/business/", label: "事業内容", icon: Briefcase },
  { href: "/contact/", label: "お問い合わせ", icon: Mail },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-washi-white/95 backdrop-blur-md shadow-subtle-line">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-charcoal-black flex items-center justify-center">
              <span className="text-washi-white font-serif-jp text-sm md:text-lg font-bold">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-jp text-lg md:text-xl font-bold text-charcoal-black tracking-wider">
                株式会社KANAE
              </span>
              <span className="text-[10px] md:text-xs text-rust-iron tracking-widest hidden sm:block">
                宅地建物取引業 東京都知事(1)第107157号
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group font-sans-jp text-sm text-charcoal-black hover:text-light-copper transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-light-copper group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal-black hover:text-light-copper transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-washi-white border-t border-concrete-grey"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-charcoal-black hover:bg-concrete-grey/50 hover:text-light-copper rounded transition-colors duration-300"
                >
                  <item.icon size={18} />
                  <span className="font-sans-jp">{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
