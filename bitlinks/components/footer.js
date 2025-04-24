import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} BitLinks. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
