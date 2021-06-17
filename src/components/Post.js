import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-aqua-deep-200 min-h-screen p-12">
      <section className="container mx-auto">
      <h1 className="text-brown-300 text-5xl flex justify-center serif bold bg-gray-100 rounded-lg py-3 border-2 border-black">
          Jer's Codinghands Trivia!
        </h1>
        <h2 className="pt-2 text-center text-aqua-deep-600 text-xl text-gray-600 flex justify-center mb-12">
          Welcome to my page of blog posts & < br/> synced notes I made during my Full Stack Web Dev course< br/>  @ Wildcodeschool Lisbon
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-gray-200 border-double border-8 border-black p-8 inline-block"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
