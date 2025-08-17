import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProfilEn({ content }) {
    const {
        title,
        visi,
        misi,
        sejarah_heading,
        sejarah_paragraphs = [],
        kelembagaan,
        batas_wilayah_heading,
        batas_wilayah_paragraphs = [],
        kependudukan,
    } = content || {};

    const router = useRouter();
    const currentPath = router.asPath || "";
    const langActive = currentPath.includes("/profil/en")
        ? "en"
        : currentPath.includes("/profil/jv")
            ? "jv"
            : "id";

    const langBtnClass = (id) =>
        `px-4 py-1 rounded-full text-sm font-medium transition ${id === langActive
            ? "bg-[#4B6153] text-white"
            : "bg-[#D3E3D0] text-[#4B6153] hover:bg-[#bcd1ba]"
        }`;

    return (
        <>
            <Head>
                <title>{title || "Profile of Banyumanik Hamlet"}</title>
                <meta name="description" content={visi || ""} />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Inter:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Header />

            {/* Language switch */}
            <div className="w-full bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-center py-6">
                        <nav role="tablist" aria-label="Choose language" className="flex items-center gap-3">
                            <Link href="/profil" scroll={false}>
                                <button className={langBtnClass("id")} aria-pressed={langActive === "id"}>
                                    Indonesia
                                </button>
                            </Link>

                            <Link href="/profil/jv" scroll={false}>
                                <button className={langBtnClass("jv")} aria-pressed={langActive === "jv"}>
                                    Jawa
                                </button>
                            </Link>

                            <Link href="/profil/en" scroll={false}>
                                <button className={langBtnClass("en")} aria-pressed={langActive === "en"}>
                                    English
                                </button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Vision & Mission */}
            <section className="bg-gray-100 py-6">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F7050] mb-16">Vision & Mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        <h3 className="text-[#1E1E1E] md:text-[21.3pt] px-4 md:px-10 text-xl font-bold mb-4 text-center">Vision</h3>
                        <p className="text-[#1E1E1E] md:text-[17.3pt] px-4 md:px-10 leading-relaxed whitespace-pre-line text-center">
                            {visi}
                        </p>

                        <h3 className="text-[#1E1E1E] md:text-[21.3pt] px-4 md:px-10 text-xl font-bold mb-4 text-center">Mission</h3>
                        <p className="text-[#1E1E1E] md:text-[17.3pt] px-4 md:px-10 leading-relaxed whitespace-pre-line text-center">
                            {misi}
                        </p>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F7050] mb-6">{sejarah_heading || "History & Origin"}</h2>

                    {sejarah_paragraphs.map((p, idx) => (
                        <div key={idx} className="mb-6 py-6">
                            <h4 className="text-[#1E1E1E] md:text-[21.3pt] px-4 md:px-10 text-xl font-bold mb-4 text-center">{p.heading}</h4>
                            <p className="text-[#1E1E1E] md:text-[17.3pt] px-4 md:px-10 leading-relaxed whitespace-pre-line text-center">{p.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Institutions */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F7050] text-center mb-6">Institutional Structure</h2>

                    {kelembagaan?.image ? (
                        <div className="rounded p-6 flex justify-center">
                            <div className="max-w-3xl w-full">
                                <Image
                                    src={kelembagaan.image}
                                    alt={kelembagaan.caption || "Institutional Structure"}
                                    width={1436}
                                    height={808}
                                    layout="responsive"
                                    objectFit="contain"
                                    priority
                                />
                                {kelembagaan.caption && <p className="text-[#1E1E1E] md:text-[16pt] px-4 py-4 md:px-10 leading-relaxed whitespace-pre-line text-center">{kelembagaan.caption}</p>}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">Institution image not uploaded yet.</div>
                    )}
                </div>
            </section>

            {/* Boundary & Geography */}
            <section className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F7050] mb-4">{batas_wilayah_heading || "Boundary & Geographic Conditions"}</h2>

                    {batas_wilayah_paragraphs.map((p, idx) => (
                        <div key={idx} className="mb-6 py-6">
                            <h4 className="text-[#1E1E1E] md:text-[21.3pt] px-4 md:px-10 text-xl font-bold mb-4 text-center">{p.heading}</h4>
                            <p className="text-[#1E1E1E] md:text-[17.3pt] px-4 md:px-10 leading-relaxed whitespace-pre-line text-center">{p.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Population */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F7050] text-center mb-6">{kependudukan?.heading || "Population"}</h2>
                    {kependudukan?.image ? (
                        <div className="bg-white p-4 rounded shadow max-w-3xl mx-auto">
                            <Image
                                src={kependudukan.image}
                                alt={kependudukan.caption || "Population chart"}
                                width={1200}
                                height={600}
                                layout="responsive"
                                objectFit="contain"
                                priority
                            />
                            {kependudukan.caption && <p className="text-sm text-center text-gray-600 mt-3">{kependudukan.caption}</p>}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">Population image not uploaded yet.</div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}

// getStaticProps
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "src", "content", "profil.en.md");
    let content = {};
    try {
        const file = fs.readFileSync(filePath, "utf8");
        const { data } = matter(file);
        content = data || {};
    } catch (err) {
        console.warn("profil.en.md not found:", err.message);
    }

    return {
        props: {
            content,
        },
    };
}