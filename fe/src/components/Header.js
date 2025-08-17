// src/components/Header.js
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    // helper untuk menentukan apakah href aktif
    const isActive = (href) => {
        if (href === "/") return router.pathname === "/";
        // gunakan startsWith agar child routes juga dianggap aktif
        return router.pathname.startsWith(href);
    };

    // komponen link kecil supaya mudah menambahkan active class
    const NavLink = ({ href, children }) => {
        const active = isActive(href);
        const base = "px-3 py-2 transition-colors duration-150";
        const activeClass = "border-b-2 border-yellow-400 pb-1";
        const normalClass = "hover:border-b-2 hover:border-yellow-400 pb-1";
        return (
            <Link
                href={href}
                className={`${base} ${active ? activeClass : normalClass} text-white`}
                onClick={() => setOpen(false)} // tutup mobile menu saat navigasi
            >
                {children}
            </Link>
        );
    };

    return (
        <header className="bg-[#00321F] text-white px-4 sm:px-6 py-2 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo + teks */}
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/logo.png"
                            alt="Logo Padukuhan Banyumanik"
                            width={48}
                            height={48}
                            className="rounded-full"
                            priority
                        />
                    </div>

                    <div className="leading-tight">
                        <div className="font-semibold text-sm sm:text-base">Padukuhan Banyumanik</div>
                        <div className="text-xs sm:text-sm">Kabupaten Gunungkidul</div>
                    </div>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-6 text-sm items-center">
                    <NavLink href="/">Beranda</NavLink>
                    <NavLink href="/profil">Profil Dusun</NavLink>
                    <NavLink href="/wisata">Potensi Wisata</NavLink>
                    <NavLink href="/umkm">UMKM & Produk Lokal</NavLink>
                    <NavLink href="/galeri">Galeri</NavLink>
                    <NavLink href="/berita">Berita</NavLink>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen((s) => !s)}
                        aria-label="Toggle menu"
                        className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#00321F] focus:ring-white"
                    >
                        <svg
                            className={`h-6 w-6 transition-transform duration-150 ${open ? "rotate-90" : ""}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden bg-[#00321F] border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
                        <NavLink href="/">Beranda</NavLink>
                        <NavLink href="/profil">Profil Dusun</NavLink>
                        <NavLink href="/wisata">Potensi Wisata</NavLink>
                        <NavLink href="/umkm">UMKM & Produk Lokal</NavLink>
                        <NavLink href="/galeri">Galeri</NavLink>
                        <NavLink href="/berita">Berita</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
}
