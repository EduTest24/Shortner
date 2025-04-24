import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen flex items-center justify-center px-4 py-12 bg-purple-100">
      <section className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-800 mb-4">
            Shorten. Share. Simplify.
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            BitLinks helps you turn long, cluttered URLs into short, beautiful
            links. Perfect for sharing across social platforms, emails, and more
            ✨.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link href="/shorten">
              <button className="bg-purple-800 text-white px-6 py-2 rounded hover:bg-purple-700 cursor-pointer">
                Try Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/heroicon.png"
            alt="URL Shortener Illustration"
            width={450}
            height={350}
            className="mx-auto"
            priority
          />
        </div>
      </section>
    </main>
  );
}
