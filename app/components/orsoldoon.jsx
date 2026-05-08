"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const useRegisteredUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
      setRegisteredUsers(users);
    } catch (err) {
      setError("Failed to load registered users");
      console.error("Error loading users:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteUser = (userToDelete) => {
    try {
      const updatedUsers = registeredUsers.filter((user, index) => {
        if (userToDelete.userId) {
          return user.userId !== userToDelete.userId;
        } else {
          return index !== userToDelete;
        }
      });
      setRegisteredUsers(updatedUsers);
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return { registeredUsers, isLoading, error, deleteUser };
};

const GameCard = ({ game, date, registeredCount }) => (
  <div className="bg-white/20 backdrop-blur rounded-3xl p-8 mb-8 border border-white/20 transition-all hover:bg-white/30">
    <h2 className="text-2xl font-bold mb-4">{date}</h2>
    <p className="text-lg mb-4">{game}</p>
    {registeredCount > 0 && (
      <p className="text-green-400 text-sm font-medium mb-4">
        ✓ {registeredCount} хүн бүртгүүлсэн
      </p>
    )}
  </div>
);

GameCard.defaultProps = {
  game: "Unknown Game",
  date: "2026 оны 05.12",
};

export default function Orsoldoon() {
  const { registeredUsers, isLoading, error, deleteUser } =
    useRegisteredUsers();

  const games = [
    { name: "Standoff 2" },
    { name: "MLBB" },
    { name: "PUBG" },
    { name: "CODM" },
    { name: "Valorant" },
  ];

  const tournamentDate = "2026 оны 05.12";

  const getRegisteredCount = (gameName) => {
    return registeredUsers.filter((user) => user.game === gameName).length;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Ачаалж байна...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center text-red-400">
          <p>Алдаа гарлаа: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg text-black p-8 rounded-lg">
        {registeredUsers.length > 0 && (
          <div className="bg-white/20 backdrop-blur rounded-3xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Бүртгүүлсэн тоглогчид ({registeredUsers.length})
            </h2>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {registeredUsers.map((user, index) => (
                <div
                  key={user.userId || index}
                  className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 transition-all hover:bg-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold">
                        {user.name || "Нэргүй"}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {user.email || "И-мэйл байхгүй"}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {user.phone || "Утас байхгүй"}
                      </p>
                      <p className="text-blue-400 text-xs font-medium mt-1">
                        🎮 {user.game || "Тоглоом тодорхойгүй"}
                      </p>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <p className="text-green-400 text-sm font-bold">
                        ✓ Бүртгүүлсэн
                      </p>
                      <button
                        onClick={() => deleteUser(user.userId ? user : index)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Хасах
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <GameCard
              key={index}
              game={game.name}
              date={tournamentDate}
              registeredCount={getRegisteredCount(game.name)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/link">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors transform hover:scale-105">
              Бүртгүүлэх
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors transform hover:scale-105 ml-12">
              Буцах
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
