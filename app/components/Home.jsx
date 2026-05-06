import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="h-[800px] p-8 bg-black text-2xl text-black flex justify-center
    "
    >
      <div className=" relative bg-white backdrop-blur-md rounded-2xl p-8 w-[500px] h-150">
        <h1 className="text-3xl font-bold  text-gray-800 rounded-2xl m-23">
          Бүртгүүлэх хэсэг
        </h1>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Нэр"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-[40px]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[40px]"
          />
          <input
            type="number"
            placeholder="Phone"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[40px]"
          />
          <div className="mt-10 text-center flex justify-center">
            <Link href="/about">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Нэвтрэх
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
