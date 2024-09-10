import Gallery, { Gallery2, Gallery3 } from "@/components/gallery/Gallery"
import Image from "next/image"
import bg from "../../public/page-bg.jpg";
import Carusel from "@/components/carusel";

import Narxlar from "../../public/narxlar.jpg";
import Link from "next/link";
import { Questions } from "@/components/Questions";
import { About } from "@/components/About";
import Direktor from "../../public/direktor.jpg";
import { Header2 } from "@/sections/Header";
import { Footer2 } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header2 />
      <div className=" md:flex w-full bg-gradient-to-r from-sky-500 to-indigo-500 p-4 py-20 sm:px-20 ">
        <span></span>
      </div>

      <Carusel />

      <div className="flex flex-col w-full bg-gradient-to-r from-sky-500 to-indigo-500 p-4 py-20 sm:px-20 sm:flex-row justify-between items-center">
        <p className=" text-white">
          <span className="text-4xl font-medium">Biz bilan bog&apos;lanmoqchimisiz?</span>
          <br />
          <span className="text-lg">Hoziroq bog&apos;laning ! </span>
        </p>
        <div className="font-medium  pt-4  dark:text-white">

          <div className="text-white grid gap-4">
            <Image className="hover:opacity-75" src={Direktor} alt={""} width={300} height={300} />
            <h3 className=" font-semibold">Xudoyberdiyev Sanjar Sobirovich</h3>
            <p className="text-gray-300">Direktor</p>
            <h4 className="font-medium  pt-4 leading-none"> Telefon nomerlar </h4>
            <p className=" text-white text-sm text-muted-foreground">
              67 226-36-59 Fax
            </p>
            <p className=" text-white text-sm text-muted-foreground">
              67 226-25-24 Bemorlar qabulxonasi
            </p>
            <p className=" text-white text-sm text-muted-foreground">
              67 226-49-79 Ma&apos;muriyat
            </p>
          </div>

        </div>
      </div>


      <main className="flex min-h-screen flex-col items-center justify-between sm:p-24">

        <About />
        <Gallery />
        {/* <Gallery2 /> */}
        <br/>
        Yangiliklar
        <br/>
        <br/>
        <Link href="/post1">
        <ul>
        <li>❇️ Davlat xaridlari sohasida katta o&apos;zgarishlar</li>
        </ul>
        </Link>
        <Questions />


        <Gallery3 />


        <h2 className=" pt-8 text-3xl">Meyoriy hujjatlar</h2>
        <section id="hujjatlar" className="flex flex-row justify-center gap-4 py-8">
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1QC_WWqwTtJ1R_q54mWN-ie_7YVKIBWW5/view?usp=sharing' title="Narxnoma">
            <Image src={Narxlar} alt={"narxlar"} width={100} height={100} />
          </Link>
        </section>
      </main>
      <Footer2 />
    </>

  )
}
