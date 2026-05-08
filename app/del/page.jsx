import Header from "../components/Header";
import Link from "next/link";

export default function Del() {
  return (
    <>
      <Header />

      <div className="bg-gray-900 min-h-screen">
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-7xl font-extrabold text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Сайн байна уу?
            </h1>

            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 mt-10 shadow-2xl">
              <h2 className="text-4xl font-bold text-center text-white mb-6">
                Хийхэд Гарсан Асуудал
              </h2>

              <p className="text-gray-300 text-lg leading-8 text-center">
                Би анх энэхүү вэб-ийг хийхэд их асуудалтай тулгарсан тэр бүхэнд
                багш болон AI-ийн тусламжтайгаар шийдэж ирсэн. Тэр дундаас надад
                тулгарсан хамгийн том асуудал бол бүртгэлээ хийсний дараа хувийн
                мэдээлэл дээр хэрхэн хадгалах вэ гэсэн асуудал тулгарсан. Тэгээд
                би олон төрлийн арга ашиглаад болохгүй байхаар нь AI-ийг
                ашигласан.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                  Гол санаа
                </h2>

                <p className="text-gray-300 text-lg leading-8 text-center">
                  Манай вэб нь зөвхөн тоглоом тоглох орчин биш, харин e-sport
                  сонирхдог залуусыг нэгтгэсэн community болох зорилготой.
                  Хэрэглэгчид өөрийн ур чадвараа хөгжүүлж, баг бүрдүүлэн,
                  тэмцээн уралдаанд оролцож бодит шагнал болон орлого олох
                  боломжтой. Мөн манай платформ нь шударга өрсөлдөөн, аюулгүй
                  орчин, хурдан matchmaking системээрээ онцлог бөгөөд тоглогч
                  бүрт өөрийн чадвараа харуулах тэгш боломжийг олгоно. Ирээдүйд
                  бид олон улсын хэмжээний тэмцээн зохион байгуулж, Монголын
                  e-sport соёлыг дараагийн түвшинд хүргэх зорилготой байна.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-4xl font-bold text-center text-white mb-6">
                  Найзууд. Баг. Ялалт.
                </h2>

                <p className="text-gray-300 text-lg leading-8 text-center">
                  Манай community нь зөвхөн тоглоом тоглодог газар биш, харин
                  нэг зорилготой залуусын нэгдэл юм. Энд чи шинэ найзуудтай
                  болж, өөрийн ур чадвараа хөгжүүлэн, хүчирхэг багийн нэг хэсэг
                  болж чадна. Бид хамтын ажиллагаа, нөхөрлөл, өрсөлдөөнийг нэг
                  дор бий болгож, gamer бүрт өөрийгөө харуулах боломж олгодог.
                  Тэмцээн, event болон идэвхтэй community орчноор дамжуулан бид
                  ялалтыг хамтдаа бүтээдэг. Ирээдүйн аваргууд эндээс эхэлнэ.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Link href="/about">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors w-[100px] mr-10 mt-10">
                Буцах
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
