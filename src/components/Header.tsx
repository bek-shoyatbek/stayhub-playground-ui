import { useState } from "react";
import {
  Globe,
  Menu,
  Settings,
  LogOut,
  UserCircle,
  MessageSquare,
  Heart,
} from "lucide-react";
import { FaAirbnb } from "react-icons/fa";

type NavItem = "stays" | "experiences";

const Header = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeNav, setActiveNav] = useState<NavItem>("stays");

  return (
    <header className="border-b border-gray-200 px-8 py-4 bg-white">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <FaAirbnb className="h-7 w-7 md:h-9 md:w-9" color="#FF385C" />
          <span className="hidden lg:block text-[#FF385C] text-xl font-[1000] ml-1 font-sans">
            airbnb
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setActiveNav("stays")}
            className={`font-medium h-14 w-28 hover:rounded-full transition-all duration-300
          ${
            activeNav === "stays"
              ? "rounded-full text-zinc-400"
              : "hover:bg-slate-100 hover:text-black-400"
          }`}
          >
            Stays
          </button>
          <button
            onClick={() => setActiveNav("experiences")}
            className={`font-medium h-14 w-28 hover:rounded-full transition-all duration-300
          ${
            activeNav === "experiences"
              ? "rounded-full text-zinc-400"
              : "hover:bg-slate-100 hover:text-black-400"
          }`}
          >
            Experiences
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block font-medium hover:text-gray-500">
            Airbnb your home
          </button>

          <div className="relative">
            <button
              onClick={() => setShowLanguageModal(!showLanguageModal)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Globe className="h-5 w-5" />
            </button>

            {showLanguageModal && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                    English
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                    Español
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                    Français
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-md transition-shadow"
            >
              <Menu className="h-5 w-5" />
              <UserCircle className="h-8 w-8 text-gray-500" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3" />
                    Messages
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center">
                    <Heart className="h-5 w-5 mr-3" />
                    Wishlists
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center">
                    <Settings className="h-5 w-5 mr-3" />
                    Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center">
                    <LogOut className="h-5 w-5 mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
