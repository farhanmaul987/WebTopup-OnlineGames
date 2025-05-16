import Image from "next/image";
import { RiArrowRightSFill } from "@remixicon/react";

const PopularGames = ({ populars }) => {
  return (
    <section className="popular-games">
      <div className="heading-3 pl-3 pt-2">Popular Games</div>
      <div className="popular-grid">
        {populars.map((popular) => (
          <div key={popular.id}>
            <a href="">
              <div className="popular-content relative overflow-hidden rounded-lg">
                <div className="relative">
                  {/* Konten utama */}
                  <div className="relative z-10 flex items-center gap-5">
                    <Image
                      src={popular.thumbnail}
                      alt="Game thumbnail"
                      width={110}
                      height={110}
                      className=""
                    />
                    <div className="flex flex-col justify-center">
                      <div className="pr-2 text-lg font-semibold">
                        {popular.title}
                      </div>
                      <div className="pr-2 text-sm">{popular.developer}</div>
                    </div>
                  </div>
                  <div className="flex h-16 w-full items-center justify-center bg-trBlack">
                    <div className="flex items-center bg-prRed px-2 py-1 text-sm">
                      TOPUP SEKARANG!
                      <RiArrowRightSFill />
                    </div>
                  </div>
                </div>
                <div className="h-1 w-full bg-prRed"></div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGames;
