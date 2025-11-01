"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Hero, About } from '../components/landing-page';
import { ModeToggle } from '../components/ui/toggle-theme';
import { GithubButton } from '../components/ui/github-button';
import { FacebookButton } from '@/components/ui/facebook-button';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MarqueeSkills from '@/components/landing-page/MarqueeSkills';
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import Projects from '@/components/landing-page/Projects';
import Contact from '@/components/landing-page/Contact';
import Note from '@/components/landing-page/Note';

//styles
//--------------------------------------------------------------------//

const headerStyles = clsx(
  "body-font",
  "fixed",
  "w-full",
  "shadow-md",
  "bg-background",
  "z-50"
);

const headerContainerStyles = clsx(
  "container",
  "mx-auto",
  "flex",
  "flex-wrap",
  "p-3",
  "items-center",
  "justify-between",
);

const desktopNavStyles = clsx(
  "hidden",
  "md:flex",
  "md:ml-4",
  "md:py-1",
  "md:pl-4",
  "md:border-l",
  "md:border-gray-400",
  "flex-wrap",
  "items-center",
  "text-base",
  "flex-1"
);

const mobileMenuStyles = clsx(
  "md:hidden",
  "fixed",
  "top-16",
  "left-0",
  "w-full",
  "h-[calc(100vh-4rem)]",
  "bg-background",
  "z-40",
  "flex",
  "flex-col",
  "items-center",
  "pt-10",
  "space-y-6"
);

const logoNameStyles = clsx(
  'ml-3',
  'text-xl',
  'font-bold',
  'bg-gradient-to-r',
  'from-green-400',
  'to-blue-500',
  'bg-clip-text',
  'text-transparent'
);

//--------------------------------------------------------------------//

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={headerStyles}>
        <div className={headerContainerStyles}>
          {/* Logo */}
          <a className="flex title-font font-medium items-center">
            <Image
              src="/images/anime_logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className={logoNameStyles}>NJ Veneracion</span>
          </a>

          {/* Desktop Navigation */}
          <nav className={desktopNavStyles}>
            <a href="#about" className="mr-5 cursor-pointer">About</a>
            <a href="#projects" className="mr-5 cursor-pointer">Projects</a>
            <a href="#contact" className="mr-5 cursor-pointer">Contact</a>
            <a href="#blog" className="mr-5 cursor-pointer">Blog</a>
          </nav>

          {/* Right Side Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <FacebookButton />
            <GithubButton />
            <ModeToggle />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={mobileMenuStyles}>
          <a
            href="#about"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-lg "
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#blog"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-4 pt-6">
            <FacebookButton />
            <GithubButton />
            <ModeToggle />
          </div>
        </div>
      )}
    </>
  )
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
     <section className='fixed bottom-5 z-20 left-5'>
       <Note />
     </section>
      {/* Header Section */}
      <section>
        <Header />
      </section>

      {/* Hero Section */}
      <section className="relative">
        <GridPattern
          width={50}
          height={40}
          strokeDasharray={"20 5"}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          )}
        />
        <Hero />
      </section>

      {/* Marquee Skills Section */}
      <section>
        <MarqueeSkills />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <Contact />
      </section>
    </main>
  )
}