import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import plumeria from "../assets/desk.jpg";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img
        src={plumeria}
        alt="plumeria background"
        className="absolute w-full"
      />
      <div className="p-12 pt-20 lg:pt-64 container mx-auto relative">
        <section className="bg-aqua-deep-200 rounded-lg shadow-2xl lg:flex p-20 opacity-80">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded mr-8"
            alt="Jerôme"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-brown-400 mb-4">
              Hey there. I'm{" "}
              <span className="text-brown-200">{author.name}</span>
            </h1>
            <p className="text-gray-800 text-lg">{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
