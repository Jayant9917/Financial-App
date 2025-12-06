'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    
    // If we're on a different page, navigate to home first, then scroll
    if (pathname !== '/') {
      router.push('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      // If we're already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Services',
      link: '#services',
      isScrollLink: true,
      sectionId: 'services',
    },
    {
      name: 'About',
      link: '#about',
      isScrollLink: true,
      sectionId: 'about',
    },
    {
      name: 'Contact',
      link: '#contact',
      isScrollLink: true,
      sectionId: 'contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full" style={{ position: 'relative' }}>
      <ResizableNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo href="/" />

          <NavItems 
            items={navItems} 
            onItemClick={(item, e) => {
              if (item.isScrollLink && item.sectionId) {
                handleScrollClick(item.sectionId, e);
              }
            }}
          />

          <div className="flex items-center">
            <button
              onClick={(e) => {
                handleScrollClick('contact', e);
              }}
              className="px-6 py-3 rounded-md bg-white button bg-white text-black text-base font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center min-h-[44px] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              Apply Now
            </button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo href="/" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  if (item.isScrollLink && item.sectionId) {
                    handleScrollClick(item.sectionId, e);
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm sm:text-base"
              >
                <span className="block py-1.5 sm:py-2">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-3 sm:gap-4 pt-3 sm:pt-4">
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollClick('contact', e);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-sm sm:text-base py-2 sm:py-3 px-6 rounded-md bg-white button bg-white text-black text-base font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center min-h-[44px] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              >
                Apply Now
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}

