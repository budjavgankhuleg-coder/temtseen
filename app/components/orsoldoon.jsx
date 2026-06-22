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
  <div className="bg-white/20 backdrop-blur rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 border border-white/20 transition-all hover:bg-white/30">
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 responsive-title">
      {date}
    </h2>
    <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 responsive-text">
      {game}
    </p>
    {registeredCount > 0 && (
      <p className="text-green-400 text-xs sm:text-sm font-medium mb-2 sm:mb-3 md:mb-4">
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
    <div className="min-h-screen bg-gray-900 text-white py-4 sm:py-6 md:py-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg text-black p-4 sm:p-6 md:p-8 rounded-lg responsive-padding">
        {registeredUsers.length > 0 && (
          <div className="bg-white/20 backdrop-blur rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 border border-white/20">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-white responsive-title">
              Бүртгүүлсэн тоглогчид ({registeredUsers.length})
            </h2>
            <div className="space-y-2 sm:space-y-3 max-h-60 overflow-y-auto">
              {registeredUsers.map((user, index) => (
                <div
                  key={user.userId || index}
                  className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 transition-all hover:bg-white/20"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-white font-bold text-sm sm:text-base">
                        {user.name || "Нэргүй"}
                      </p>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        {user.email || "И-мэйл байхгүй"}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {user.phone || "Утас байхгүй"}
                      </p>
                      <p className="text-blue-400 text-xs sm:text-xs font-medium mt-1">
                        🎮 {user.game || "Тоглоом тодорхойгүй"}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 sm:text-right">
                      <p className="text-green-400 text-xs sm:text-sm font-bold">
                        ✓ Бүртгүүлсэн
                      </p>
                      <button
                        onClick={() => deleteUser(user.userId ? user : index)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-xs sm:text-sm transition-colors min-h-[44px]"
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

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <GameCard
              key={index}
              game={game.name}
              date={tournamentDate}
              registeredCount={getRegisteredCount(game.name)}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center mobile-center">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link href="/link">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-colors transform hover:scale-105 w-full sm:w-auto min-h-[44px]">
                Бүртгүүлэх
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-colors transform hover:scale-105 w-full sm:w-auto min-h-[44px]">
                Буцах
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
