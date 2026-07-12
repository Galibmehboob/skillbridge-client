"use client";

import Link from "next/link";
import {
 
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "@/components/common/container/Container";
import Logo from "@/components/common/logo/Logo";
import { LogoFacebook, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
    icon: LogoGithub,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon:LogoLinkedin,
  },
  {
    label: "Facebook",
    href: "#",
    icon: LogoFacebook,
  },
] as const;

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-background/70 shadow-sm backdrop-blur-xl dark:border-white/10">
      <Container className="py-14">
        <div className="rounded-3xl border border-black/10 bg-background/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Logo />

              <p className="mt-5 max-w-xs text-sm leading-7 text-foreground/70">
                SkillBridge helps learners discover opportunities, build
                practical skills, and connect with a growing community through a
                modern learning platform.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold">Quick Links</h3>

              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base font-semibold">Contact</h3>

              <ul className="mt-5 space-y-4 text-sm text-foreground/70">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>support@skillbridge.dev</span>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>+880 1700-000000</span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-base font-semibold">Social</h3>

              <div className="mt-5 flex flex-col gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-foreground/70 transition-all duration-200 hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="my-8 h-px bg-black/10 dark:bg-white/10" />

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-foreground/60 md:flex-row">
            <p>© 2026 SkillBridge. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="transition-colors hover:text-foreground"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-foreground"
              >
                Terms
              </Link>

              <Link
                href="/support"
                className="transition-colors hover:text-foreground"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}