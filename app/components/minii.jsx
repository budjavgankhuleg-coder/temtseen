"use client";

import Link from "next/link";

export default function Minii() {
  return (
    <div className="bg-[#020817] text-white min-h-screen flex items-center justify-center px-10">
      <div className="max-w-5xl text-center">
        <h1 className="text-7xl font-extrabold mb-8 leading-tight">
          Сайн байна уу?
        </h1>

        <p className="text-gray-400 text-xl leading-9 max-w-4xl mx-auto">
          Тэмцээн зохион байгуулахад хамгийн хурдан, шударга, найдвартай
          платформ. Хэрэглэгч бүрт хялбар орчин, бодит өрсөлдөөн, сонирхолтой
          уралдааныг нэг дор мэдрүүлэх нь бидний гол зорилго.
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <Link href="/about">
            <button className="bg-purple-600 px-8 py-4 rounded-2xl font-bold hover:bg-purple-700 duration-300">
              Буцах
            </button>
          </Link>
          <Link href="/del">
            <button className="border border-gray-600 px-8 py-4 rounded-2xl hover:bg-white hover:text-black duration-300">
              Дэлгэрэнгүй
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
