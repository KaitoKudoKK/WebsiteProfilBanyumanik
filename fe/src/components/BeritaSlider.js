import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function BeritaSlider() {
  const berita = [
    {
      title: 'Analisis Risiko Lingkungan',
      img: '/images/berita-1.jpg',
      date: '27-02-2023',
    },
    {
      title: 'Rasulan Banyumanik',
      img: '/images/berita-2.jpg',
      date: '22-02-2023',
    },
    {
      title: 'Judul Lorem Ipsum dolor sit amet',
      img: '/images/berita-3.jpg',
      date: '20-02-2023',
    },
    {
      title: 'Berita 4',
      img: '/images/berita-4.jpg',
      date: '18-02-2023',
    },
    {
      title: 'Berita 5',
      img: '/images/berita-5.jpg',
      date: '15-02-2023',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {berita.map((item, index) => (
        <div key={index} className="px-2">
          <div className="bg-white rounded shadow p-4">
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded mb-2" />
            <p className="text-xs text-gray-500 mb-1">{item.date}</p>
            <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
            <a href="#" className="text-blue-600 text-sm hover:underline">Selengkapnya</a>
          </div>
        </div>
      ))}
    </Slider>
  );
}
