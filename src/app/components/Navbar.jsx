import { RiSearchLine } from "@remixicon/react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar sticky top-0 z-50 bg-sdBlack shadow-xl">
      <div className="relative flex h-[50px] items-center justify-between px-4">
        {/* Logo */}
        <a href="" className="flex w-56 items-center pl-3">
          <Image
            src="/images/ar_title.png"
            alt="Logo"
            width={200}
            height={40}
          />
        </a>

        {/* Search (centered absolutely but stays in layout) */}
        <div className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 transform">
          <div className="items-center rounded-lg bg-gradient-to-r from-prRed to-prRed/5">
            <button className="flex flex-row px-4 py-2 text-white">
              <RiSearchLine className="pr-2" />
              Cari Game Favorit Kamu . . .
            </button>
          </div>
        </div>

        {/* Auth Button */}
        <div className="ml-auto mr-2 flex flex-row gap-x-4">
          <button className="items-center justify-center rounded-md border-[1px] border-transparent px-6 text-[15px] text-white transition duration-100 hover:border-white">
            <i className="ri-login-box-line pr-1" />
            Masuk
          </button>
          <button className="btn-auth">
            <i className="ri-user-add-line pr-1" />
            Daftar
          </button>
        </div>
      </div>
    </nav>
  );
}
