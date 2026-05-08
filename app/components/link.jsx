"use client";

import { useState } from "react";
import Link from "next/link";

export default function LinkComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    game: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const games = ["Standoff 2", "MLBB", "PUBG", "CODM", "Valorant"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registrationData = {
      ...formData,
      registeredAt: new Date().toISOString(),
      userId: Math.random().toString(36).substr(2, 9),
    };

    localStorage.setItem(
      "tournamentRegistration",
      JSON.stringify(registrationData),
    );

    const existingUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]",
    );
    existingUsers.push(registrationData);
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

    setShowSuccess(true);

    setTimeout(() => {
      window.location.href = "/orsoldoon";
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-slate-600 to-black p-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Тоглолтын бүртгэл
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Нэр
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Өөрийн нэрийг оруулна уу"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                И-мэйл
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Утас
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="99999999"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Тоглоом сонгох
              </label>
              <select
                name="game"
                value={formData.game}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="" className="bg-gray-800">
                  Тоглоом сонгоно уу
                </option>
                {games.map((game) => (
                  <option key={game} value={game} className="bg-gray-800">
                    {game}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Бүртгүүлэх
            </button>
          </form>

          {showSuccess && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-400 rounded-2xl">
              <p className="text-green-400 text-center font-bold">
                ✓ Таны бүртгэл амжилттай!
              </p>
              <p className="text-green-300 text-center text-sm mt-1">
                Таны мэдээлэл нэмэгдлээ, шууд шилжих байна...
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              href="/orsoldoon"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Буцах
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
