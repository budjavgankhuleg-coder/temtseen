"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function About() {
  const [userData, setUserData] = useState({
    name: "Мэдэгдэхгүй",
    age: "Мэдэгдэхгүй",
    email: "Мэдэгдэхгүй",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userRegistration");
    if (storedData) {
      const user = JSON.parse(storedData);
      setUserData({
        name: user.name || "Мэдэгдэхгүй",
        age: user.age || "Мэдэгдэхгүй",
        email: user.email || "Мэдэгдэхгүй",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-slate-600 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Gaming World-д <br /> тавтай морил
          </h1>
          <div className="inline-block">
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Чиний дараагийн ялалт эндээс эхэлнэ, зүгээр л эхний алхмаа
              хийгээрэй
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-25 mb-12">
          <Link href="/cul">
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
          </Link>
          <Link href="/orsoldoon">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
              <div className="text-4xl mb-4">
                <img
                  src="/ton.jpg"
                  alt=""
                  className="w-24 h-24 object-cover rounded-xl shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Өрсөлдөөн
              </h3>
              <p className="text-gray-600">Найзуудтайгаа өрсөлдөх боломж</p>
            </div>
          </Link>

          <Link href="/minii">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl mb-12">
                <img
                  src="/gemini.png"
                  alt=""
                  className="w-24 h-24 object-cover rounded-xl shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Тухай</h3>
              <p className="text-gray-600">Чадвараа дээшлүүлэх боломж</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
