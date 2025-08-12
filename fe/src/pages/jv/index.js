import { useState } from "react";
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

// Custom Arrow Components pakai SVG
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="hidden md:flex absolute top-1/2 right-[-30px] transform -translate-y-1/2 cursor-pointer z-10 
                       bg-green-700 text-white rounded-full w-10 h-10 lg:w-12 lg:h-12 items-center justify-center 
                       shadow-lg hover:bg-green-800"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="hidden md:flex absolute top-1/2 left-[-30px] transform -translate-y-1/2 cursor-pointer z-10 
                       bg-green-700 text-white rounded-full w-10 h-10 lg:w-12 lg:h-12 items-center justify-center 
                       shadow-lg hover:bg-green-800"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );
}

export default function Home({ content }) {
    const { title, description, hero, perkenalan, video, map, berita } = content;
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        centerMode: true,
        centerPadding: "0px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (_, next) => setActiveIndex(next),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
            { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false, arrows: false } },
        ],
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Inter:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Header />

            {/* HERO */}
            <section
                className="relative h-[50vh] md:h-[70vh] bg-cover bg-center flex items-center justify-start text-white"
                style={{ backgroundImage: `url(${hero.background})` }}
            >
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex gap-2 text-xs md:text-sm font-medium">
                        <a href="/" className="px-3 py-1 rounded-full bg-[#D3E3D0] text-[#4B6153] hover:bg-[#bcd1ba]">Indonesia</a>
                        <a href="/jv" className="px-3 py-1 rounded-full bg-[#4B6153] text-white">Jawa</a>
                        <a href="/en" className="px-3 py-1 rounded-full bg-[#D3E3D0] text-[#4B6153] hover:bg-[#bcd1ba]">English</a>
                    </div>
                </div>
                <div className="ml-4 md:ml-16 p-4 md:p-6 rounded text-left">
                    <h1 className="text-2xl md:text-5xl font-bold">{hero.heading}</h1>
                    <h2 className="text-lg md:text-4xl mt-2">{hero.subheading}</h2>
                </div>
            </section>

            {/* PERKENALAN */}
            <section className="bg-white text-[#565252] py-8 md:py-12 px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-[Poppins] text-[#0F7050] mb-4 font-bold">
                        {perkenalan.heading}
                    </h2>
                    <p className="text-base md:text-[20pt] leading-snug font-bold py-4 px-4 md:px-10">
                        {perkenalan.text}
                    </p>
                </div>
            </section>

            {/* VIDEO */}
            <section className="py-8 md:py-12 bg-gray-100 px-4 md:px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">{video.heading}</h2>
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
            <section className="bg-white py-8 md:py-12 px-4 md:px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">{map.heading}</h2>
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
            <section className="py-8 md:py-12 bg-gray-100 px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-6 md:mb-10">
                    Pawartos Enggal Padhukuhan Banyumanik
                </h2>
                <div className="relative max-w-6xl mx-auto">
                    <Slider {...settings}>
                        {berita.map((item, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div
                                    key={item.id}
                                    className="px-2 transition-transform duration-300 ease-in-out"
                                    style={{
                                        transform:
                                            isActive && settings.slidesToShow > 1
                                                ? "scale(1.10)"
                                                : "scale(0.95)",
                                        paddingTop: isActive ? "10px" : "20px",
                                        paddingBottom: isActive ? "10px" : "20px",
                                    }}
                                >
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
                                        <p className="text-xs md:text-sm text-gray-500">
                                            {item.tanggal}
                                        </p>
                                        <h3 className="mt-1 text-sm md:text-lg font-semibold text-[#1E1E1E] line-clamp-1">
                                            {item.judul}
                                        </h3>
                                        <p className="mt-1 flex-grow text-xs md:text-sm text-gray-500 line-clamp-3">
                                            {item.isi}
                                        </p>
                                        <a href="#" className="text-blue-600 text-xs md:text-sm mt-2 inline-block">
                                            Selengkapnya
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </section>

            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "src", "content", "jv.md");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
        props: {
            content: data,
        },
    };
}
