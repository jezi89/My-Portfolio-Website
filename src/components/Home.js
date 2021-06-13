import React from "react";
import image from "../assets/background.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="keyboard"
        className="absolute object-cover w-full h-full"
      />
      
      <section className="relative flex justify-end min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-yellow-500 font-bold cursive leading-none lg:leading-snug home-name t.textShadowLg bg-blue-600">
          Jer Hier!
        </h1>
      </section>
   
    
    </main>
  );
}
