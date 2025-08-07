import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Slider from "react-slick";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home({ content }) {
    const { title, description, hero, perkenalan, video, map, berita } = content;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <Header />

            {/* HERO */}
            <section
                className="relative h-[70vh] bg-cover bg-center flex items-center justify-start text-white"
                style={{ backgroundImage: `url(${hero.background})` }}
            >
                {/* Switch Bahasa */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex gap-4 text-sm text-white font-semibold">
                        <a href="/" className="hover:underline">Indonesia</a>
                        <a href="/jv" className="underline text-yellow-400">Jawa</a>
                        <a href="/en" className="hover:underline">English</a>
                    </div>
                </div>
                <div className="ml-8 md:ml-16 p-6 rounded text-left">
                    <h1 className="text-3xl md:text-5xl font-bold">{hero.heading}</h1>
                    <h2 className="text-2xl md:text-4xl mt-2">{hero.subheading}</h2>
                </div>
            </section>

            {/* PERKENALAN */}
            <section className="bg-white text-[#565252] py-12 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-green-900 mb-4">{perkenalan.heading}</h2>
                    <p className="text-gray-700 text-lg">{perkenalan.text}</p>
                </div>
            </section>

            {/* VIDEO */}
            <section className="py-12 bg-gray-100 px-6 text-center">
                <h2 className="text-3xl font-bold text-green-900 mb-6">{video.heading}</h2>
                <div className="max-w-3xl mx-auto aspect-video">
                    <iframe
                        className="w-full h-full rounded"
                        src={video.youtubeUrl}
                        title="Video Profil"
                        style={{ border: "0" }}
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* PETA */}
            <section className="bg-white py-12 px-6 text-center">
                <h2 className="text-3xl font-bold text-green-900 mb-6">{map.heading}</h2>
                <div className="max-w-4xl mx-auto aspect-video">
                    <iframe
                        src={map.embedUrl}
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className="rounded shadow"
                        style={{ border: "0" }}
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* BERITA */}
            <section className="py-12 bg-gray-100 px-6">
                <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
                    {content.beritaHeading || "Berita Padukuhan"}
                </h2>
                <div className="max-w-6xl mx-auto">
                    <Slider {...settings}>
                        {berita.map((item) => (
                            <div key={item.id} className="px-2">
                                <div className="bg-white rounded shadow p-4 h-full flex flex-col">
                                    <div className="w-full h-40 relative mb-3">
                                        <Image
                                            src={item.img}
                                            alt={item.judul}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500">{item.tanggal}</p>
                                    <h3 className="font-semibold text-lg mt-1">{item.judul}</h3>
                                    <p className="text-sm text-gray-700 mt-1 flex-grow">{item.isi}</p>
                                    <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
                                        Selengkapnya
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "src\\content", "jv.md");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
        props: {
            content: data,
        },
    };
}
