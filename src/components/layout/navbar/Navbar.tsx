"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import {
  Avatar,
  Button,
  Dropdown,
  Label,
} from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";
import { toast } from "sonner";

import Container from "@/components/common/container/Container";
import Logo from "@/components/common/logo/Logo";
import ThemeToggle from "@/components/common/theme-toggle/ThemeToggle";
import { useRouter } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Dashboard", href: "/dashboard" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileUserMenuOpen, setIsMobileUserMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    setIsMobileUserMenuOpen(false);
  };

  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsDesktopDropdownOpen(false);
      } else {
        setIsOpen(false);
        setIsMobileUserMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleNavigation = navigation.filter(
    (item) => item.label !== "Dashboard" || !!session
  );

  const handleLogout = async () => {
    try {
      await signOut();

      toast.success("Logged out successfully");
      closeMenu();
      router.push("/login");

    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Logout failed"
      );
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/70 backdrop-blur-xl shadow-sm dark:border-white/10">
      <Container className="py-3">
        <nav
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3 shadow-[0_8px_32px_0_rgba(30,58,138,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-white/20"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {visibleNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-[#14B8A6]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            {isPending ? (
              <>
                <div className="h-10 w-10 animate-pulse rounded-full bg-default-200/60" />
                <div className="h-10 w-24 animate-pulse rounded-full bg-default-200/60" />
              </>
            ) : session ? (
              <Dropdown isOpen={isDesktopDropdownOpen} onOpenChange={setIsDesktopDropdownOpen}>
                <Button
                  isIconOnly
                  variant="outline"
                  className="rounded-full p-0 border border-default-200/60 transition duration-200 hover:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                >
                  <Avatar size="sm" className="ring-2 ring-transparent transition duration-200 hover:ring-[#14B8A6]/40">
                    {session.user.image ? (
                      <Avatar.Image
                        alt={session.user.name}
                        src={session.user.image}
                      />
                    ) : null}

                    <Avatar.Fallback className="bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] text-white text-xs font-bold">
                      {session.user.name?.charAt(0).toUpperCase()}
                    </Avatar.Fallback>
                  </Avatar>
                </Button>

                <Dropdown.Popover className="border border-white/10 bg-background/80 backdrop-blur-xl shadow-xl rounded-2xl p-1">
                  <Dropdown.Menu aria-label="User menu">
                    <Dropdown.Item
                      id="profile"
                      textValue="Profile"
                      onPress={() => router.push("/profile")}
                      className="rounded-xl transition duration-200 hover:bg-[#1E3A8A]/10 hover:text-[#1E3A8A]"
                    >
                      <Label className="cursor-pointer font-medium">Profile</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="logout"
                      textValue="Logout"
                      variant="danger"
                      onAction={handleLogout}
                      className="rounded-xl transition duration-200"
                    >
                      <Label className="cursor-pointer font-medium">Logout</Label>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="rounded-full px-5 border border-default-200/60 bg-background/40 font-medium transition duration-200 hover:bg-background/80 hover:border-[#1E3A8A]/40 hover:text-[#1E3A8A]"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button
                    variant="primary"
                    className="rounded-full px-5 bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] text-white font-medium shadow-md shadow-[#1E3A8A]/10 transition duration-200 hover:opacity-95 hover:scale-[1.02]"
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-default-200/60 bg-background/40 backdrop-blur-md transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-foreground/80" />
              ) : (
                <Menu className="h-5 w-5 text-foreground/80" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown View */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? "max-h-[650px] pt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-background/70 p-4 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {visibleNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-[#1E3A8A]/5 hover:text-[#1E3A8A] dark:hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 flex items-center justify-between rounded-xl border border-default-200/40 px-3 py-2.5 bg-background/30">
                <span className="text-sm font-medium text-foreground/70">Theme</span>
                <ThemeToggle />
              </div>

              {isPending ? (
                <div className="mt-4 space-y-3">
                  <div className="h-10 animate-pulse rounded-xl bg-default-200/60" />
                  <div className="h-10 animate-pulse rounded-xl bg-default-200/60" />
                </div>
              ) : session ? (
                <div className="mt-3 border-t border-default-200/40 pt-3">
                  {/* Clickable Mobile Avatar/Trigger */}
                  <button
                    type="button"
                    onClick={() => setIsMobileUserMenuOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition duration-200 hover:bg-default-100/50"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        {session.user.image ? (
                          <Avatar.Image
                            alt={session.user.name}
                            src={session.user.image}
                          />
                        ) : null}

                        <Avatar.Fallback className="bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] text-white text-xs font-bold">
                          {session.user.name?.charAt(0).toUpperCase()}
                        </Avatar.Fallback>
                      </Avatar>

                      <span className="text-sm font-semibold text-foreground/90">
                        {session.user.name}
                      </span>
                    </div>
                    {/* Small arrow indicator */}
                    <span
                      className={`text-xs text-foreground/50 transition-transform duration-200 ${
                        isMobileUserMenuOpen ? "rotate-180 text-[#14B8A6]" : ""
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  {/* Mobile Dropdown Items */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      isMobileUserMenuOpen ? "max-h-40 mt-1" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col gap-1 pl-12 pr-2">
                      <Link
                        href="/profile"
                        onClick={closeMenu}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-[#1E3A8A]/5 hover:text-[#1E3A8A] dark:hover:bg-white/5"
                      >
                        Profile
                      </Link>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-xl px-3 py-2 text-left text-sm font-medium text-danger transition-colors hover:bg-danger/10"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2 mt-4">
                  <Link
                    href="/login"
                    onClick={closeMenu}
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-full border border-default-200/60 bg-background/40 font-medium transition duration-200 hover:bg-background/80 hover:text-[#1E3A8A]"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link
                    href="/register"
                    onClick={closeMenu}
                  >
                    <Button
                      variant="primary"
                      className="w-full rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] text-white font-medium shadow-md shadow-[#1E3A8A]/10 transition duration-200 hover:opacity-95"
                    >
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}