"use client";
import HomeComponent from "./components/Home";
import Cul from "./components/Cul";

export default function Home() {
  return (
    <>
      <div className="bg-sky-300 min-h-dvh">
        <HomeComponent />
        <Cul />
      </div>
    </>
  );
}
