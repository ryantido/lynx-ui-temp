import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const LogoButton = ({
  className = "",
  style = "",
}: {
  className?: string;
  style?: string;
}) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 group", className)}
      aria-label="Lynx AI - Accueil"
    >
      <div className="w-10 h-10 rounded flex items-center justify-center relative overflow-hidden">
        <Image src="/placeholder.jpg" alt="Lynx AI Logo" fill />
      </div>
      <span
        className={cn(
          "group-hover:text-brand-indigo max-md:font-medium",
          "text-brand-black transition-colors font-poppins",
          "font-bold text-lg md:text-xl lg:text-2xl",
          style,
        )}
      >
        Lynx AI
      </span>
    </Link>
  );
};
