"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-slate-600 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 mb-6">
            Холбоо барих
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Бидэнтэй холбогдож таны асуулт, санал хүсэлтийг илгээж болно
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Мэдээлэл илгээх
              </h2>
              <p className="text-gray-600">
                Бид таны зурвасад хариу өгөх болно
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Нэр
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      focusedField === "name"
                        ? "border-purple-500 ring-4 ring-purple-200 bg-purple-50"
                        : "border-gray-300 hover:border-purple-300"
                    }`}
                    placeholder="Таны нэр"
                  />
                  {focusedField === "name" && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 animate-pulse"></div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имэйл
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      focusedField === "email"
                        ? "border-purple-500 ring-4 ring-purple-200 bg-purple-50"
                        : "border-gray-300 hover:border-purple-300"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {focusedField === "email" && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 animate-pulse"></div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сэдэв
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      focusedField === "subject"
                        ? "border-purple-500 ring-4 ring-purple-200 bg-purple-50"
                        : "border-gray-300 hover:border-purple-300"
                    }`}
                    placeholder="Зурвасын сэдэв"
                  />
                  {focusedField === "subject" && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 animate-pulse"></div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Зурвас
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                      focusedField === "message"
                        ? "border-purple-500 ring-4 ring-purple-200 bg-purple-50"
                        : "border-gray-300 hover:border-purple-300"
                    }`}
                    placeholder="Таных санал хүсэлтээ энд бичнэ үү..."
                  />
                  {focusedField === "message" && (
                    <div className="absolute right-3 top-3 text-purple-500 animate-pulse"></div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-2xl shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Илгээж байна...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Зурвас илгээх
                  </span>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 border-2 border-green-300 rounded-xl text-green-700 text-center transform transition-all duration-300 animate-fade-in">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-bold">Амжилттай!</span>
                  </div>
                  Зурвас амжилттай илгээгдлээ. Бид танд удахгүй хариу өгөх
                  болно.
                </div>
              )}
            </form>
            <div>
              <Link href="/cul">
                <button className="bg-red-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors mt-10">
                  Буцах
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-10 h-10 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                Холбоо барих
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl transform transition-all duration-300 hover:scale-105">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Имэйл</h4>
                    <p className="text-gray-600">Budjavgankhuleg@gmail.com</p>
                    <p className="text-sm text-gray-500">
                      24 цагийн турш хариулна
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-linear-to-r from-blue-50 to-purple-50 rounded-xl transform transition-all duration-300 hover:scale-105">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Утас</h4>
                    <p className="text-gray-600">+976 9980-2084</p>
                    <p className="text-sm text-gray-500">
                      Цагийн хуваарь 9:00-18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl text-white transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Яаралтай тусламж?</h3>
              <p className="mb-6 opacity-90">
                Хэрэв танд яаралтай тусламж хэрэгтэй бол шууд бидэнтэй
                холбогдоорой.
              </p>
              <button className="w-full py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Яаралтай холбогдох
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
