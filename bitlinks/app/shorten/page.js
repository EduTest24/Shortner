"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!url || !shorturl) {
      toast.error("Please fill in both fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const result = await response.json();
      if (result.success) {
        const newUrl = `${process.env.NEXT_PUBLIC_HOST}/${shorturl}`;
        setGenerated(newUrl);
        setUrl("");
        setShorturl("");
        toast.success(result.message);
      } else {
        toast.error(result.message || "Failed to generate URL");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-purple-800">
          URL Shortener
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Enter your long URL and a custom short text.
        </p>

        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="url"
          placeholder="https://example.com/..."
          className="w-full px-4 py-2 border border-gray-300 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          value={shorturl}
          onChange={(e) => setShorturl(e.target.value)}
          type="text"
          placeholder="custom-short-text"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          onClick={generate}
          disabled={loading}
          className={`w-full bg-purple-700 text-white py-2 rounded-xl hover:bg-purple-600 transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Generating..." : "Generate Short URL"}
        </button>

        {generated && (
          <div className="mt-4 text-center">
            <span className="text-gray-600">Shortened URL:</span>{" "}
            <Link
              href={generated}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline break-words"
            >
              {generated}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
