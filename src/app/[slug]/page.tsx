import {Footer2} from "@/sections/Footer";
import { Header2 } from "@/sections/Header";
import Image from "next/image";
import Xarid from "../../../public/xarid.jpg";
export default function Page({ params }: { params: { slug: string } }) {
    return (
    <>
    <Header2/>
    <div className=" md:flex w-full bg-gradient-to-r from-sky-500 to-indigo-500 p-4 py-20 sm:px-20 ">
        <span></span>
      </div>
        <main className="flex min-h-screen flex-col items-center justify-between sm:p-24">
        <Image width={600} alt="xarid" src={Xarid}></Image>
        <div className="flex flex-col justify-center pt-8">
        
<ul>
    <li>Davlat xaridlari sohasida katta o&apos;zgarishlar</li>
                    
    <br />
    <li>10.07.2024 yilda O&apos;zbekiston Respublikasi Prezidentining “Davlat xaridlari tizimini takomillashtirish va unda kichik tadbirkorlik sub&apos;ektlari ishtirokini rag&apos;batlantirish chora-tadbirlari to&apos;g&apos;risida”gi PQ-249-sonli qarori qabul qilindi. Unda davlat xaridlari sohasiga kiritiladigan bir qancha yangiliklar ko&apos;zda tutilgan. </li><br />
Eng katta o&apos;zgarishlar:<br />

❇️ 01.09.2024 yildan boshlab elektron do&apos;konda ishtirokchilar o&apos;rtasida narx va texnik talablar bo&apos;yicha tenglik yuzaga kelganda, nogironligi bo&apos;lgan shaxslar, xotin-qizlar va yoshlarning bandligini ta&apos;minlagan kichik tadbirkorlik sub&apos;ektlarining takliflari ustunlikka ega bo&apos;ladi. Tegishli vazirlik tomonidan buning texnik imkoniyati yaratiladi.<br />
❇️ davlat buyurtmachilari tomonidan to&apos;g&apos;ridan-to&apos;g&apos;ri shartnomalar ular tuzilishidan oldin kamida bir ish kuni, shuningdek, tender savdolari natijalariga ko&apos;ra rasmiylashtirilgan bayonnomalar maxsus portalga joylashtirish orqali kamida ikki ish kuni davomida jamoatchilik muhokamasidan o&apos;tkaziladi;<br />
✳️ Yagona yetkazib beruvchilar reestriga bozorda muqobillari bo&apos;lmagan va texnik jihatdan murakkab tovarlarni yetkazib beruvchilar Raqobat qo&apos;mitasi xulosasi asosida kiritiladi;<br />
❇️ shartnomalarni bajarish vaqtida xarid tizim operatori tomonidan davlat buyurtmachisi va ishtirokchi o&apos;rtasidagi nizolarni sudgacha hal qilishga ko&apos;maklashish amaliyoti yo&apos;l qo&apos;yiladi;<br />
✳️ tender savdolarida bitta tadbirkorlik sub&apos;ekti ishtirok etgan taqdirda, davlat buyurtmachisi xarid qilish tartib-taomilini hamda tovarlarga (ishlarga, xizmatlarga) oid mezonlarni o&apos;zgartirmagan holda takroran e&apos;lon joylashtirganda va takroriy tender savdolarining yagona ishtirokchisi ilgari ishtirok etgan tadbirkorlik sub&apos;ekti bo&apos;lganda, tender savdolari o&apos;tkazilgan deb hisoblanadi;<br />
❇️ 01.09.2024 yildan boshlab ustav fondida davlat ulushi 50 foizdan yuqori bo&apos;lgan xo&apos;jalik jamiyatlari, shuningdek, ularning tarkibidagi xo&apos;jalik jamiyatlari kuzatuv kengashlarining davlat xaridlari yillik va choraklik reja-jadvallari hamda import qilish rejalashtirilgan tovarlar (ishlar, xizmatlar) ro&apos;yxatlarini tasdiqlash bo&apos;yicha qarorlari muhim fakt sifatida oshkor qilib borilishi lozim.<br />
✳️ Iqtisodiyot va moliya vazirligiga 01.10.2024 yilga qadar davlat xaridlari maxsus axborot portalida davlat buyurtmachilari amalga oshirgan davlat xaridlari natijalariga ko&apos;ra tovarlar (ishlar, xizmatlar), shu jumladan, ularning turlari kesimida shakllangan narxlarni jamoatchilik uchun ochiq ifodalovchi alohida sahifa joriy etsin, davlat buyurtmachilariga ushbu sahifa asosida boshlang&apos;ich narxni shakllantirish imkoniyatini yaratish topshirig&apos;i berildi. <br />
</ul>
<br />
<br />
Z.Radjabov - Guliston tumanlararo iqtisodiy sudining sudyasi
    </div>
    </main>
    
    <Footer2/>
    </>)
  }