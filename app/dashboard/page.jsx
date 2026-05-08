import Header from "../components/Header";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-slate-600 to-black p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              Нийтлэг самбар
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Бүх тоглогчдын статистик, амжилт, хөгжилтийн мэдээлэл
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Тоглолтын талаар
            </h2>

            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Тоглолт олдсонгүй
              </h3>

              <p className="text-gray-400 text-center max-w-md mb-8">
                Одоогоор ямар ч тоглолт байхгүй байна. Бүх тоглогчид шинэ
                тоглолт эхлүүлж статистикийг эхлүүлнэ үү.
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-4 mb-6">
                <p className="text-white font-bold text-lg">Нийт тоглолт: 0</p>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl px-8 py-4">
                <p className="text-white font-bold text-lg mb-2">
                  Дараагийн тоглолт:
                </p>
                <p className="text-white/90 text-sm">
                  Мэдэгдэхгүй - Тун удахгүй
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Хожилт</p>
                  <p className="text-3xl font-bold text-green-400">0</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Хожигдолт</p>
                  <p className="text-3xl font-bold text-red-400">0</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Тэнцээ</p>
                  <p className="text-3xl font-bold text-yellow-400">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
