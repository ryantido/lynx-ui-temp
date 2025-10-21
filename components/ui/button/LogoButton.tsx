import Image from "next/image";
import Link from "next/link";

export const LogoButton = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 group"
      aria-label="Lynx AI - Accueil"
    >
      <div className="w-10 h-10 rounded flex items-center justify-center relative overflow-hidden">
        <Image src="/placeholder.jpg" alt="Lynx AI Logo" fill />
      </div>
      <span
        className="text-brand-black transition-colors font-poppins group-hover:text-brand-indigo 
        max-md:font-medium font-bold text-lg md:text-xl lg:text-2xl"
      >
        Lynx AI
      </span>
    </Link>
  );
};
