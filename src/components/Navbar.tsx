import { Link, useLocation } from "react-router-dom";
import { ScanSearch, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLanding = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <ScanSearch className="h-8 w-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Save<span className="text-primary-600">Sweep</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {isLanding ? (
              <>
                <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
                  Features
                </a>
                <a href="#deals" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
                  Deals
                </a>
                <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
                  How It Works
                </a>
              </>
            ) : (
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
                Home
              </Link>
            )}
            <Link
              to="/login"
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pb-4 space-y-2">
          {isLanding && (
            <>
              <a href="#features" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-gray-700">Features</a>
              <a href="#deals" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-gray-700">Deals</a>
              <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-gray-700">How It Works</a>
            </>
          )}
          <Link to="/login" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-gray-700">Log In</Link>
          <Link to="/signup" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-semibold text-primary-600">Get Started</Link>
        </div>
      )}
    </nav>
  );
}
