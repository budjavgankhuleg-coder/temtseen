import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-slate-600 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 mb-6">
            Тавтай морилно уу!
          </h1>
          <div className="inline-block">
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Та хэрвээ тоглоом тоглоод мөнгөтөй болно гэвэл итгэх үү?
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <Link href="/cul">
            <button className="group relative px-12 py-6 bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:from-purple-700 hover:to-pink-700">
              <span className="relative z-10">Гол сэдэв</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-linear-to-r rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity z-0"></div>
              <div className="text-4xl mb-4">
                <img
                  src="/game.webp"
                  alt=""
                  className="w-24 h-24 object-cover rounded-xl shadow-md"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center transform transition-all duration-300 group-hover:text-purple-600">
              Тоглоом
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Олон төрлийн сонирхолтой тоглоомууд
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl mb-4">
              <img
                src="/ton.jpg"
                alt=""
                className="w-24 h-24 object-cover rounded-xl shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Өрсөлдөөн</h3>
            <p className="text-gray-600">Найзуудтайгаа өрсөлдөх боломж</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl mb-4">
              <img
                src="/gemini.png"
                alt=""
                className="w-24 h-24 object-cover rounded-xl shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Тухай</h3>
            <p className="text-gray-600">Чадвараа дээшлүүлэх боломж</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 text-gray-500">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="ml-2">Онлайн</span>
            </div>
            <div className="text-gray-300">|</div>
            <div>24/7 дэмжлэг</div>
          </div>
        </div>
      </div>
    </div>
  );
}
