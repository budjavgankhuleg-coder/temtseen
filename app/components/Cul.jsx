"use client";

import Link from "next/link";
import { useState } from "react";

export default function Cul() {
  const [selectedGame, setSelectedGame] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [email, setEmail] = useState("");
  const [hoveredGame, setHoveredGame] = useState("");

  const games = [
    {
      id: "standoff2",
      name: "Standoff 2",
      description: "FPS тоглоом, тактик",
      icon: "",
      color: "from-red-500 to-orange-500",
      image: "/dof.jpg",
    },
    {
      id: "mlbb",
      name: "Mobile Legends",
      description: "MOBA тоглоом, багийн тактик",
      icon: "",
      color: "from-blue-500 to-purple-500",
      image: "/alus.jfif",
    },
    {
      id: "pugb",
      name: "PUBG",
      description: "Battle Royale, амьд үлдэх",
      icon: "",
      color: "from-green-500 to-teal-500",
      image: "/pubg.png",
    },
    {
      id: "valorant",
      name: "Valorant",
      description: "FPS тоглоом, тактик",
      icon: "",
      color: "from-red-500 to-orange-500",
      image: "/images.jfif",
    },
    {
      id: "csgo",
      name: "CS:GO",
      description: "FPS тоглоом, тактик",
      icon: "",
      color: "from-red-500 to-orange-500",
      image: "/1426.webp",
    },
    {
      id: "lol",
      name: "League of Legends",
      description: "MOBA тоглоом, багийн тактик",
      icon: "",
      color: "from-blue-500 to-purple-500",
      image: "/of.webp",
    },
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    if (playerName && email && selectedGame) {
      setIsRegistered(true);
      setTimeout(() => setIsRegistered(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-slate-600 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 mb-6">
            Тэмцээнд оролцох
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Та ажил хийж мөнгө олох арай бага байна уу? Тэгвэл би танийг энд
            урьж байна. Энд та зүгээр өрсөлдөж болох ямар тоглоом байна, тэр
            бүгдээр чинь би сар бүр бүүр болий гэвэл долоо хоног бүр тэмцээн
            цохиох болно. Та бэлэн үү?
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 relative">
            <span className="relative z-10">Тоглоомын төрөл</span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400 blur-3xl opacity-30"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div
                key={game.id}
                onClick={() => setSelectedGame(game.id)}
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame("")}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                  selectedGame === game.id ? "scale-105" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-r ${game.color} rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div
                  className={`relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border-2 ${
                    selectedGame === game.id
                      ? "border-white shadow-2xl ring-4 ring-white/50"
                      : "border-transparent shadow-xl"
                  }`}
                >
                  <div
                    className={`text-6xl mb-6 text-center transform transition-all duration-300 max-h-40 ${
                      hoveredGame === game.id ? "scale-125 rotate-12" : ""
                    }`}
                  >
                    {game.icon}
                    <img
                      src={game.image}
                      alt=""
                      className="w-32 h-32 flex justify-center"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
                    {game.name}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {game.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center flex justify-center gap-2">
          <Link href="/about">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Бүртгүүлэх
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Холбоо барих
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Буцах
            </button>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 text-gray-500 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="ml-2 font-medium">Тэмцээн нээлттэй</span>
            </div>
            <div className="text-gray-300">|</div>
            <div className="font-medium">Долоо хоног бүр</div>
          </div>
        </div>
      </div>
    </div>
  );
}
