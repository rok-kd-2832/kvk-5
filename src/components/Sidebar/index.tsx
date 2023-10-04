"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import calculatorActiveIco from "@/assets/img/nav/nav_calculator_active_ico.png";
import dataActiveIco from "@/assets/img/nav/nav_data_active_ico.png";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 right-0 bottom-0 h-14 bg-white border-t border-main w-full">
      <ul className="h-full flex text-white">
        <li className="h-full w-1/2">
          <Link className="flex items-center justify-center h-full" href="/">
            <p className="flex flex-col items-center justify-center">
              <img
                src={calculatorActiveIco.src}
                alt=""
                className={`mx-auto h-5 ${pathname !== "/" && "grayscale"}`}
              />
              <span
                className={`text-main mt-0.5 text-[10px] ${
                  pathname !== "/" && "hidden"
                }`}
              >
                CALCULATOR
              </span>
            </p>
          </Link>
        </li>
        <li className="h-full w-1/2">
          <Link
            className="flex items-center justify-center h-full"
            href="/kvk-data"
          >
            <p className="flex flex-col items-center justify-center">
              <img
                src={dataActiveIco.src}
                alt=""
                className={`mx-auto h-5 ${
                  pathname !== "/kvk-data/" && "grayscale"
                }`}
              />
              <span
                className={`text-main mt-0.5 text-[10px] ${
                  pathname !== "/kvk-data/" && "hidden"
                }`}
              >
                KVK-DATA
              </span>
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
