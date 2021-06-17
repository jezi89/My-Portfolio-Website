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
      
      <section className="relative flex justify-center pt-12 lg:pt-36">
        <div className="h-24 min-h-0">
        <div className="container mx-auto opacity-100 hover:opacity-90">
        <h1 className="px-3 text-6xl text-center text-aqua-deep font-bold serif bg-brown-100 leading-none lg:leading-snug rounded-xl mb-4">Where?</h1>
            </div>
          <div className="container opacity-100 hover:opacity-90">
            <h1 className="py-2 px-3 text-4xl text-center text-brown-100  font-bold serif bg-aqua-deep bg-clip-border leading-none lg:leading-snug ">@<span className="inline-block transform -rotate-3"> jer</span><span className="inline-block transform rotate-3">ome</span></h1> 
            <h1 className="py-2 px-3 text-4xl text-center text-aqua-deep font-bold serif bg-brown-100 leading-none lg:leading-snug ">vanderzijde.online</h1>
          </div>
        </div>
      </section>
      </main>
  );
}
