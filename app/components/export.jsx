"use client";

import Link from "next/link";

const ranking = [
  {
    id: "Нэр",
    name: "Мэдэгдэхгүй",
    age: "Мэдэгдэхгүй",
    password: "",
    icon: "blue",
    color: "from",
  },
];

export default function Export() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-slate-600 to-black p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              Хувийн мэдээлэл
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Таны тоглолтын мэдээллийг сонгосон форматад экспортлаж болно
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Тоглогчын чансаа
            </h2>
            
            <div className="space-y-4">
              {ranking.map((player, index) => (
                <div key={index} className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{player.name}</h3>
                        <p className="text-gray-300">Нас: {player.age}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        #{index + 1}
                      </p>
                      <p className="text-gray-300 text-sm">Чансаа</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl px-6 py-3">
                <p className="text-white font-bold text-lg">Нийт тоглолт  0</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Link href="/col">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl h-[60px] w-[300px] text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Тоглолтын мэдээлэл
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
