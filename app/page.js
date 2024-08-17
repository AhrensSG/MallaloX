import { Abhaya, Dancing, Noto } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen py-10 space-y-8">
      <div className="flex w-full justify-center items-center gap-3">
        <Image src={"/Line.svg"} width={60} height={1} alt="Line" />
        <p
          className={`${Dancing.className} flex flex-col justify-center items-center text-4xl`}
        >
          <span>Bienvenidos</span>
          <span>Welcome</span>
        </p>
        <Image src={"/Line.svg"} width={60} height={1} alt="Line" />
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <Image
          src={"/Logo148x145.svg"}
          width={148}
          height={145}
          alt="Mallalo X Logo"
        />
        <h1 className={`${Noto.className} font-bold text-[#898484] text-2xl`}>
          MALLALO X
        </h1>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-2">
      <link href="https://awards.infcdn.net/2024/circle_v3.css" rel="stylesheet" />

      <div id="circle_bw" data-length="29" class="circle_bw_black" onclick="if(event.target.nodeName.toLowerCase() != 'a') { var link = this.querySelector('.circle_bw_link'); if(link) { window.open(link.href); } return 0; }">
        <p className="circle_bw_year justify-center items-center">2024</p>
      </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <span className={`${Abhaya.className} font-bold text-xl`}>
          Seleccione su idioma / <br /> select your language
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <Link href={"/menu-es"}>
          <button
            className={`${Noto.className} p-2 px-6 border-2 border-[#B96F4C] rounded-lg font-bold text-2xl min-w-[145px]`}
          >
            Español
          </button>
        </Link>
        <Link href={"/menu-en"}>
          <button
            className={`${Noto.className} p-2 px-6 border-2 border-[#B96F4C] rounded-lg font-bold text-2xl min-w-[145px]`}
          >
            English
          </button>
        </Link>
      </div>
    </main>
  );
}
