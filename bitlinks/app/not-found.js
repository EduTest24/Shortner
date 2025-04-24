"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center mb-6"
      >
        <Ghost size={80} className="text-purple-800" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl font-bold text-purple-800 mb-4"
      >
        404 Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg text-gray-700 mb-8 max-w-md"
      >
        Oops! The page you are looking for doesnapos;t exist. It might have been
        moved or deleted.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Link href="/">
          <button className="bg-purple-800 text-white px-6 py-3 rounded hover:bg-purple-700 transition">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Custom404;
