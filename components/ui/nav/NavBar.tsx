// components/Navbar/Navbar.tsx
import { LogoButton } from "../button/LogoButton";
import { LinksMotion } from "./LinksMotion";
import { LynxButton } from "../button/LynxButton";
import { MobileMenu } from "../button/MobileButton";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <LogoButton />
          <LinksMotion />
          <div className="hidden md:block">
            <LynxButton variant="primary" size="sm">
              Demander une démo
            </LynxButton>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};
