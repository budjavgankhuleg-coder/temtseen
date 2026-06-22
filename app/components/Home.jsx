"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "И-мэйл хаягаа оруулна уу";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Зөв и-мэйл хаяг оруулна уу";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Нууц үгээ оруулна уу";
    } else if (formData.password.length < 6) {
      newErrors.password = "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const storedData = localStorage.getItem("userRegistration");
    if (storedData) {
      const storedUser = JSON.parse(storedData);
      if (formData.email === storedUser.email && formData.password === storedUser.password) {
        setErrors({});
        setLoginError("");
        setIsRegistered(true);
        setTimeout(() => router.push("/about"), 2000);
      } else {
        setLoginError("И-мэйл эсвэл нууц үг буруу байна!");
      }
    } else {
      setLoginError("Эхлээд бүртгүүлнэ үү!");
    }
  };

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-slate-600 to-black p-4 md:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Нэвтрэлт амжилттай!</h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">/about хуудас руу шилжиж байна...</p>
          <div className="w-12 h-1 md:w-16 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-slate-600 to-black p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Нэвтрэх</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">И-мэйл</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/20 border rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.email ? "border-red-500" : "border-white/30"}`}
                placeholder="example@email.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Нууц үг</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/20 border rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.password ? "border-red-500" : "border-white/30"}`}
                placeholder="Нууц үгээ оруулна уу"
              />
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>
            {loginError && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-3">
                <p className="text-red-300 text-center">{loginError}</p>
              </div>
            )}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Нэвтрэх
            </button>
            <div className="text-center">
              <span className="text-gray-400 text-sm">Бүртгэл байхгүй юу? </span>
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors"
              >
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}