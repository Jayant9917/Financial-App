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

  const handleScrollClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
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
            <NavbarButton as={Link} href="/apply-now" variant="primary">
              Apply Now
            </NavbarButton>
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
              
              <NavbarButton
                as={Link}
                href="/apply-now"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-sm sm:text-base py-2 sm:py-3"
              >
                Apply Now
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}

