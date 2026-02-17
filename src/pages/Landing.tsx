import { Link } from "react-router-dom";
import {
  ScanSearch,
  MapPin,
  Bell,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Star,
  Zap,
  Search,
} from "lucide-react";
import DealCard from "../components/DealCard";
import { deals } from "../data/deals";

const featuredDeals = deals.filter((d) => d.featured).slice(0, 4);

export default function Landing() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-400/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            New deals added weekly
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Never Miss a{" "}
            <span className="text-primary-600">Local Deal</span> Again
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            DealSweep checks your area every week for the best coupons,
            cash-back offers, and local deals — so you never miss savings
            again.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
            >
              Start Saving Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#deals"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:border-primary-300 hover:text-primary-600 transition-colors"
            >
              Browse Deals
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span>4.9 rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ScanSearch className="h-4 w-4 text-primary-500" />
              <span>10k+ deals found</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent-500" />
              <span>50+ regions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How DealSweep Saves You Money
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We do the hard work of finding deals so you don't have to.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: "Smart Scanning",
                desc: "Our system scans hundreds of sources for grocery deals, restaurant offers, and cash-back promotions.",
              },
              {
                icon: MapPin,
                title: "Region-Based",
                desc: "Set your location and get deals that are actually available near you — not generic national promos.",
              },
              {
                icon: Bell,
                title: "Weekly Alerts",
                desc: "Get notified every week about new deals in your area so you never miss a window.",
              },
              {
                icon: ShieldCheck,
                title: "Verified Deals",
                desc: "Every deal is verified before it reaches you. No expired coupons, no dead links.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section id="deals" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Featured Deals
              </h2>
              <p className="mt-2 text-gray-600">
                Top picks updated weekly across groceries, restaurants, and more.
              </p>
            </div>
            <Link
              to="/dashboard"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              View All Deals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Get Started in 3 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Create Your Account",
                desc: "Sign up for free and tell us your region to start receiving relevant deals.",
              },
              {
                step: "2",
                title: "Customize Your Preferences",
                desc: "Pick the categories that matter — groceries, restaurants, cash-back, lunch specials, and more.",
              },
              {
                step: "3",
                title: "Start Saving",
                desc: "Browse your personalized deal feed every week and never overpay again.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 sm:p-16 text-white">
            <TrendingUp className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Saving?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-lg mx-auto">
              Join thousands of smart shoppers who save every week with
              DealSweep.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary-700 font-semibold hover:bg-primary-50 transition-colors"
            >
              Create Free Account
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
