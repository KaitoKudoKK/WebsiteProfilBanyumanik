import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-[#00321F] text-white px-4 sm:px-6 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo + Teks */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/images/logo.png"
                        alt="Logo Padukuhan Banyumanik"
                        width={100}
                        height={108}
                        className="w-12 h-12"
                    />
                    <div className="leading-tight">
                        <div className="font-semibold text-sm sm:text-base">
                            Padukuhan Banyumanik
                        </div>
                        <div className="text-xs sm:text-sm">
                            Kabupaten Gunungkidul
                        </div>
                    </div>
                </div>

                {/* Menu Navigasi */}
                <nav className="hidden md:flex gap-6 text-sm">
                    <a href="" className="border-b-2 border-yellow-400 pb-1">Beranda</a>
                    <a href="/profil" className="hover:border-b-2 hover:border-yellow-400 pb-1">Profil Dusun</a>
                    <a href="/wisata" className="hover:border-b-2 hover:border-yellow-400 pb-1">Potensi Wisata</a>
                    <a href="/umkm" className="hover:border-b-2 hover:border-yellow-400 pb-1">UMKM & Produk Lokal</a>
                    <a href="/galeri" className="hover:border-b-2 hover:border-yellow-400 pb-1">Galeri</a>
                    <a href="/berita" className="hover:border-b-2 hover:border-yellow-400 pb-1">Berita</a>
                </nav>
            </div>
        </header>
    );
}
