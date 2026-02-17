import { Clock, MapPin } from "lucide-react";
import type { Deal } from "../data/deals";
import { categoryLabels, categoryColors, regions } from "../data/deals";

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
  const region = regions.find((r) => r.id === deal.region);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-44 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
          <span className="text-4xl font-extrabold text-primary-700/30">{deal.store[0]}</span>
        </div>
        <div className="absolute top-3 left-3">
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[deal.category]}`}>
            {categoryLabels[deal.category]}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-sm font-bold text-primary-700">{deal.discount}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
          {deal.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{deal.description}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            <span>{region ? `${region.name}, ${region.state}` : "National"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>Exp. {new Date(deal.expiresAt).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="mt-2 text-xs font-medium text-gray-600">{deal.store}</div>
      </div>
    </div>
  );
}
