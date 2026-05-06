import Link from "next/link";

export default function Col() {
  return (
    <div className="bg-linear-to-br from-indigo-100 via-slate-600 to-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 m-15 ">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="text-4xl mb-4">
            <img
              src="/game.webp"
              alt=""
              className="w-24 h-24 object-cover rounded-xl shadow-md"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Нийт тоглолт</h3>
          <p className="text-3xl font-bold text-purple-600">0</p>
          <p className="text-gray-600">Тоглолтын тоо</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="text-4xl mb-4">
            <img
              src="/ton.jpg"
              alt=""
              className="w-24 h-24 object-cover rounded-xl shadow-md"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Ялалт</h3>
          <p className="text-3xl font-bold text-green-600">0</p>
          <p className="text-gray-600">Ялалтын тоо</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="text-4xl mb-4">
            <img
              src="/od.png"
              alt=""
              className="w-24 h-24 object-cover rounded-xl shadow-md"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Үнэлгээ</h3>
          <p className="text-3xl font-bold text-yellow-600">0</p>
          <p className="text-gray-600">Дундаж үнэлгээ</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Сүүлийн үр дүн
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-linear-to-r from-blue-50 to-purple-50 rounded-xl">
            <div className="flex items-center">
              <span className="text-2xl mr-3"></span>
              <div>
                <h4 className="font-bold text-gray-800">Standoff 2</h4>
                <p className="text-sm text-gray-600">Тоглолт болоогүй</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-green-600"></p>
              <p className="text-sm text-gray-600"></p>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl">
            <div className="flex items-center">
              <span className="text-2xl mr-3"></span>
              <div>
                <h4 className="font-bold text-gray-800">Mobile Legends</h4>
                <p className="text-sm text-gray-600">Тоглолт болоогүй</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-red-600"></p>
              <p className="text-sm text-gray-600"></p>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-linear-to-r from-green-50 to-teal-50 rounded-xl">
            <div className="flex items-center">
              <span className="text-2xl mr-3"></span>
              <div>
                <h4 className="font-bold text-gray-800">PUBG</h4>
                <p className="text-sm text-gray-600">Тоглолт болоогүй</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-green-600"></p>
              <p className="text-sm text-gray-600"></p>
            </div>
          </div>
        </div>
        <div>
          <Link href="/export">
            <button className="bg-red-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors mt-10">
              Буцах
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
