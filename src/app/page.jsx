import BannerCarousel from "@comp/BannerCarousel";
import PopularGames from "@comp/PopularGames";
import ProductList from "@comp/ProductList";
import Footer from "./components/Footer";

const banners = [
  {
    id: 1,
    image: "/banners/mlbb.webp",
    title: "Promo Mobile Legends",
    description: "Dapatkan bonus Diamond untuk pembelian pertamamu!",
  },
  {
    id: 2,
    image: "/banners/pubgm.webp",
    title: "Promo PUBG Mobile",
    description: "Dapatkan bonus UC untuk pembelian pertamamu!",
  },
  {
    id: 3,
    image: "/banners/hok.webp",
    title: "Promo Honor of Kings",
    description: "Dapatkan bonus Token untuk pembelian pertamamu!",
  },
];

const populars = [
  {
    id: 1,
    thumbnail: "/gameCards/mlbb.webp",
    title: "Mobile Legends",
    developer: "Moonton",
  },
  {
    id: 2,
    thumbnail: "/gameCards/hok.webp",
    title: "Honor of Kings",
    developer: "TiMi Studio Group",
  },
  {
    id: 3,
    thumbnail: "/gameCards/ff.webp",
    title: "Free Fire",
    developer: "Garena International I",
  },
  {
    id: 4,
    thumbnail: "/gameCards/pubgm.webp",
    title: "PUBG Mobile",
    developer: "LightSpeed & Quantum Studio",
  },
  {
    id: 5,
    thumbnail: "/gameCards/genshin.webp",
    title: "Genshin Impact",
    developer: "miHoYo",
  },
  {
    id: 6,
    thumbnail: "/gameCards/valo.webp",
    title: "Valorant",
    developer: "Riot Games",
  },
];

// const products = [
//   {
//     id: 1,
//     thumbnail: "/gameCards/mlbb.webp",
//     title: "Mobile Legends: Bang Bang",
//     developer: "Moonton",
//   },
//   {
//     id: 2,
//     thumbnail: "/gameCards/hok.webp",
//     title: "Honor of Kings",
//     developer: "TiMi Studio Group",
//   },
//   {
//     id: 3,
//     thumbnail: "/gameCards/ff.webp",
//     title: "Free Fire",
//     developer: "Garena International I",
//   },
//   {
//     id: 4,
//     thumbnail: "/gameCards/pubgm.webp",
//     title: "PUBG Mobile",
//     developer: "LightSpeed & Quantum Studio",
//   },
//   {
//     id: 5,
//     thumbnail: "/gameCards/genshin.webp",
//     title: "Genshin Impact",
//     developer: "miHoYo",
//   },
//   {
//     id: 6,
//     thumbnail: "/gameCards/valo.webp",
//     title: "Valorant",
//     developer: "Riot Games",
//   },
//   {
//     id: 7,
//     thumbnail: "/gameCards/tft.webp",
//     title: "Teamfight Tactics",
//     developer: "Riot Games",
//   },
//   {
//     id: 8,
//     thumbnail: "/gameCards/mcgg.webp",
//     title: "Magic Chess: Go Go",
//     developer: "Moonton",
//   },
//   {
//     id: 9,
//     thumbnail: "/gameCards/lolwr.webp",
//     title: "League of Legends: Wild Rift",
//     developer: "Riot Games",
//   },
//   {
//     id: 10,
//     thumbnail: "/gameCards/hsr.webp",
//     title: "Honkai Star Rail",
//     developer: "miHoYo",
//   },
// ];

export default function HomePage() {
  return (
    <div>
      <BannerCarousel banners={banners} />
      <PopularGames populars={populars} />
      <ProductList />
      <Footer />
    </div>
  );
}
