import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#00321F] text-white pt-8 pb-4 px-4 sm:px-6 text-sm">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Kolom 1 - Logo & Alamat */}
                <div className="flex items-start gap-4">
                    {/* Logo */}
                    <Image
                        src="/images/logo.png"
                        alt="Logo Padukuhan Banyumanik"
                        width={100} height={100} // ukuran lebih kecil di mobile
                        className="mt-1"
                    />
                    {/* Teks */}
                    <div className="leading-snug">
                        <h4 className="font-bold text-base sm:text-lg mb-1">
                            Pemerintah Padukuhan Banyumanik
                        </h4>
                        <p className="text-xs sm:text-sm">
                            Padukuhan Banyumanik, Kalurahan Pacarejo, Kapanewon Semanu, Kabupaten Gunungkidul, Provinsi Daerah Istimewa Yogyakarta, 55893
                        </p>
                    </div>
                </div>

                {/* Kolom 2 - Kontak */}
                <div className="flex flex-col gap-1">
                    <h4 className="font-semibold text-base sm:text-lg mb-2">Hubungi Kami</h4>
                    <p className="flex items-center gap-2 text-xs sm:text-sm">
                        <FaPhoneAlt className="text-white" /> -
                    </p>
                    <p className="flex items-center gap-2 text-xs sm:text-sm">
                        <FaEnvelope className="text-white" /> banyumanikofficial@gmail.com
                    </p>
                </div>

                {/* Kolom 3 - Jelajahi */}
                <div className="flex flex-col gap-1">
                    <h4 className="font-semibold text-base sm:text-lg mb-2">Jelajahi</h4>
                    <a
                        href="https://www.youtube.com/@banyumanikofficial"
                        className="underline text-xs sm:text-sm"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Youtube Padukuhan Banyumanik
                    </a>
                    <a
                        href="https://www.pacarejo.id/"
                        className="underline text-xs sm:text-sm"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Website Kalurahan Pacarejo
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 text-center text-xs border-t border-white/20 pt-3">
                &copy; 2025 Padukuhan Banyumanik. All rights reserved.
            </div>
        </footer>
    );
}
