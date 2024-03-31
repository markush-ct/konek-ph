import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-8 bg-dark-1 text-white text-center">
      A Pet Project Created with ❤ by{" "}
      <span className="font-bold hover:underline cursor-pointer">
        <Link
          href="https://markushct.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marc Jenald Galino - MJCodeArtisan
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
