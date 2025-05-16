"use client";

import {
  RiHome4Line,
  RiMenuSearchLine,
  RiCalculatorLine,
  RiGamepadLine,
  RiSurveyLine,
  RiHeadphoneLine,
  RiQuestionLine,
  RiFireLine,
  RiFireFill,
  RiHistoryLine,
  RiSave3Line,
  RiWallet3Line,
  RiShieldUserLine,
  RiUserSettingsLine,
} from "@remixicon/react";
import { useState } from "react";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside className="hide-scrollbar fixed left-0 top-0 z-20 hidden h-screen w-64 overflow-y-auto bg-trBlack shadow-md md:block">
      <div className="flex min-h-screen flex-col">
        <div className="h-[73px] p-4 pt-7 text-xl font-bold text-transparent"></div>
        <nav className="mx-4 mt-4 space-y-1 rounded-lg bg-sdBlack p-3 drop-shadow-md">
          <div className="px-3 pt-2 font-semibold">MENU</div>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 text-prRed hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue hover:text-white"
          >
            <RiHome4Line className="pr-1" />
            Beranda
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue hover:text-white"
          >
            <RiGamepadLine className="pr-1" />
            Semua Game
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiMenuSearchLine className="pr-1" />
            Lacak Pesanan
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiCalculatorLine className="pr-1" />
            Kalkulator
          </a>
          <div className="px-3 pt-2 font-semibold">LAIN-LAIN</div>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiSurveyLine className="pr-1" />
            Cek Transaksi
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiHeadphoneLine className="pr-1" />
            Dukungan
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiQuestionLine className="pr-1" />
            FAQ
          </a>
          <div className="px-3 pt-2 font-semibold">NAVIGASI USER</div>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 text-prBlue hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue hover:text-white"
          >
            <RiHome4Line className="pr-1" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiHistoryLine className="pr-1" />
            Riwayat Transaksi
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiSave3Line className="pr-1" />
            Save ID
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiWallet3Line className="pr-1" />
            Deposit
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiShieldUserLine className="pr-1" />
            Membership
          </a>
          <a
            href="#"
            className="flex flex-row rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-prRed hover:to-prBlue"
          >
            <RiUserSettingsLine className="pr-1" />
            Edit Profile
          </a>
        </nav>
        <a
          href="#"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mx-4 mt-4 mb-20 flex flex-row items-center rounded-md bg-prRed p-2 drop-shadow-md transition-all hover:bg-srRed"
        >
          <div className="flex flex-row items-center pl-4 text-white">
            {isHovered ? (
              <RiFireFill className="mr-2 transition-all" />
            ) : (
              <RiFireLine className="mr-2 transition-all" />
            )}
            Daftar Sekarang
          </div>
        </a>
      </div>
    </aside>
  );
}
