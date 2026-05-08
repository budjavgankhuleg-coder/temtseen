"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const tournamentData = {
  standoff2: {
    name: "Standoff 2",
    description: "FPS тоглоом, тактик",
    prize: "₮1,000,000",
    date: "2026-05-15",
    time: "18:00",
    participants: 128,
    maxParticipants: 256,
    rules: [
      "5 vs 5 Team Deathmatch",
      "Best of 3 format",
      "No cheating allowed",
      "Tournament rules apply",
    ],
    image: "/dof.jpg",
  },
  mlbb: {
    name: "Mobile Legends",
    description: "MOBA тоглоом, багийн тактик",
    prize: "₮2,000,000",
    date: "2026-05-15",
    time: "16:00",
    participants: 64,
    maxParticipants: 128,
    rules: [
      "5 vs 5 Classic Mode",
      "Best of 5 format",
      "Ban/pick system",
      "Tournament rules apply",
    ],
    image: "/alus.jfif",
  },
  pugb: {
    name: "PUBG",
    description: "Battle Royale, амьд үлдэх",
    prize: "₮3,000,000",
    date: "2026-05-15",
    time: "14:00",
    participants: 96,
    maxParticipants: 100,
    rules: [
      "Squad mode (4 players)",
      "3 matches total",
      "Points based on placement",
      "Tournament rules apply",
    ],
    image: "/pubg.png",
  },
  valorant: {
    name: "Valorant",
    description: "FPS тоглоом, тактик",
    prize: "₮1,500,000",
    date: "2026-05-15",
    time: "17:00",
    participants: 32,
    maxParticipants: 64,
    rules: [
      "5 vs 5 Spike Rush",
      "Best of 3 format",
      "Agent restrictions apply",
      "Tournament rules apply",
    ],
    image: "/images.jfif",
  },
  csgo: {
    name: "CS:2",
    description: "FPS тоглоом, тактик",
    prize: "₮2,500,000",
    date: "2026-05-15",
    time: "15:00",
    participants: 48,
    maxParticipants: 64,
    rules: [
      "5 vs 5 Competitive",
      "Best of 3 format",
      "Map rotation system",
      "Tournament rules apply",
    ],
    image: "/cs2.webp",
  },
  lol: {
    name: "League of Legends",
    description: "MOBA тоглоом, багийн тактик",
    prize: "₮5,000,000",
    date: "2026-05-15",
    time: "13:00",
    participants: 24,
    maxParticipants: 32,
    rules: [
      "5 vs 5 Summoner's Rift",
      "Best of 5 format",
      "Ban/pick system",
      "Tournament rules apply",
    ],
    image: "/of.webp",
  },
};

export default function TournamentDetail() {
  const params = useParams();
  const router = useRouter();
  const gameId = params.gameId;

  const [playerName, setPlayerName] = useState("");
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const tournament = tournamentData[gameId];

  if (!tournament) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Тэмцээн олдсонгүй</h1>
          <Link href="/cul" className="text-blue-400 hover:text-blue-300">
            Буцах
          </Link>
        </div>
      </div>
    );
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (playerName && email && teamName) {
      setIsRegistered(true);
      setTimeout(() => {
        setIsRegistered(false);
        setPlayerName("");
        setEmail("");
        setTeamName("");
      }, 3000);
    }
  };

  const progressPercentage =
    (tournament.participants / tournament.maxParticipants) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/cul"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          ← Буцах
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Тэмцээний мэдээлэл */}
          <div>
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <img
                src={tournament.image}
                alt={tournament.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">
                {tournament.name} Тэмцээн
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                {tournament.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Шагнал</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {tournament.prize}
                  </p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Огноо</p>
                  <p className="text-xl font-semibold">{tournament.date}</p>
                  <p className="text-gray-300">{tournament.time}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Оролцогчид</span>
                  <span className="text-white">
                    {tournament.participants}/{tournament.maxParticipants}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">Дүрэм</h2>
              <ul className="space-y-2">
                {tournament.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Бүртгэлийн хэсэг */}
          <div>
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Тэмцээнд бүртгүүлэх
              </h2>

              {isRegistered ? (
                <div className="text-center py-8">
                  <div className="text-green-400 text-2xl mb-4">✓</div>
                  <p className="text-xl text-white mb-2">
                    Амжилттай бүртгэгдлээ!
                  </p>
                  <p className="text-gray-400">
                    Тэмцээний талаар дэлгэрэнгүй мэдээллийг имэйл хаягаар хүлээн
                    авна.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Таны нэр</label>
                    <input
                      type="text"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                      placeholder="Нэрээ оруулна уу"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      Имэйл хаяг
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      Багийн нэр
                    </label>
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                      placeholder="Багийн нэрээ оруулна уу"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Бүртгүүлэх
                  </button>
                </form>
              )}

              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <p className="text-yellow-400 text-sm mb-2">⚠️ Анхаар:</p>
                <p className="text-gray-300 text-sm">
                  Бүртгүүлсэний дараа таны имэйл хаяг руу баталгаажуулах мессеж
                  ирэх болно. Тэмцээний өдөр 30 минутын өмнө нэвтэрнэ үү.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
