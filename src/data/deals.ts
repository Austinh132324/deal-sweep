export interface Deal {
  id: string;
  title: string;
  description: string;
  category: "grocery" | "restaurant" | "lunch" | "coupon" | "cashback";
  discount: string;
  store: string;
  region: string;
  expiresAt: string;
  featured: boolean;
}

export interface Region {
  id: string;
  name: string;
  state: string;
}

export const regions: Region[] = [
  { id: "nyc", name: "New York City", state: "NY" },
  { id: "la", name: "Los Angeles", state: "CA" },
  { id: "chi", name: "Chicago", state: "IL" },
  { id: "hou", name: "Houston", state: "TX" },
  { id: "phx", name: "Phoenix", state: "AZ" },
  { id: "sea", name: "Seattle", state: "WA" },
  { id: "mia", name: "Miami", state: "FL" },
  { id: "den", name: "Denver", state: "CO" },
  { id: "atl", name: "Atlanta", state: "GA" },
  { id: "national", name: "National", state: "US" },
];

export const deals: Deal[] = [
  {
    id: "1",
    title: "Buy One Get One Free Entrées",
    description: "Valid on all entrées after 4 PM. Dine-in only.",
    category: "restaurant",
    discount: "BOGO",
    store: "Applebee's",
    region: "national",
    expiresAt: "2026-03-15",
    featured: true,
  },
  {
    id: "2",
    title: "$5 Off $25 Grocery Purchase",
    description: "Clip this digital coupon in your app for $5 off any $25+ purchase.",
    category: "grocery",
    discount: "$5 Off",
    store: "Kroger",
    region: "national",
    expiresAt: "2026-03-01",
    featured: true,
  },
  {
    id: "3",
    title: "Lunch Combo $7.99",
    description: "Sandwich, side, and drink combo available 11 AM – 2 PM.",
    category: "lunch",
    discount: "$7.99",
    store: "Panera Bread",
    region: "national",
    expiresAt: "2026-04-01",
    featured: false,
  },
  {
    id: "4",
    title: "5% Cash Back on Groceries",
    description: "Earn 5% cash back on all grocery purchases this month.",
    category: "cashback",
    discount: "5% Back",
    store: "Chase Freedom",
    region: "national",
    expiresAt: "2026-02-28",
    featured: true,
  },
  {
    id: "5",
    title: "20% Off Fresh Produce",
    description: "All fresh fruits and vegetables 20% off this week.",
    category: "grocery",
    discount: "20% Off",
    store: "Whole Foods",
    region: "nyc",
    expiresAt: "2026-02-23",
    featured: false,
  },
  {
    id: "6",
    title: "$2 Off Any Burrito Bowl",
    description: "Show coupon at checkout for $2 off any burrito bowl.",
    category: "coupon",
    discount: "$2 Off",
    store: "Chipotle",
    region: "la",
    expiresAt: "2026-03-10",
    featured: false,
  },
  {
    id: "7",
    title: "Free Delivery on Orders $15+",
    description: "Get free delivery on your next order of $15 or more.",
    category: "restaurant",
    discount: "Free Delivery",
    store: "DoorDash",
    region: "chi",
    expiresAt: "2026-03-05",
    featured: false,
  },
  {
    id: "8",
    title: "10% Off Entire Purchase",
    description: "Use code SAVE10 at checkout for 10% off everything.",
    category: "grocery",
    discount: "10% Off",
    store: "Target",
    region: "national",
    expiresAt: "2026-03-20",
    featured: false,
  },
  {
    id: "9",
    title: "$1 Large Coffee — Lunch Special",
    description: "Any large hot or iced coffee for $1 with food purchase 11 AM – 2 PM.",
    category: "lunch",
    discount: "$1",
    store: "McDonald's",
    region: "hou",
    expiresAt: "2026-03-31",
    featured: false,
  },
  {
    id: "10",
    title: "3% Cash Back at Restaurants",
    description: "Earn 3% cash back on all restaurant and dining purchases.",
    category: "cashback",
    discount: "3% Back",
    store: "Capital One SavorOne",
    region: "national",
    expiresAt: "2026-12-31",
    featured: false,
  },
  {
    id: "11",
    title: "Half-Price Appetizers After 9 PM",
    description: "All appetizers 50% off after 9 PM at the bar.",
    category: "restaurant",
    discount: "50% Off",
    store: "TGI Friday's",
    region: "atl",
    expiresAt: "2026-03-15",
    featured: false,
  },
  {
    id: "12",
    title: "$10 Off $50 — Weekly Digital Coupon",
    description: "Clip this weekly digital coupon to save $10 on orders of $50+.",
    category: "coupon",
    discount: "$10 Off",
    store: "Safeway",
    region: "sea",
    expiresAt: "2026-02-24",
    featured: true,
  },
];

export const categoryLabels: Record<Deal["category"], string> = {
  grocery: "Grocery",
  restaurant: "Restaurant",
  lunch: "Lunch Deal",
  coupon: "Coupon",
  cashback: "Cash Back",
};

export const categoryColors: Record<Deal["category"], string> = {
  grocery: "bg-green-100 text-green-800",
  restaurant: "bg-orange-100 text-orange-800",
  lunch: "bg-yellow-100 text-yellow-800",
  coupon: "bg-purple-100 text-purple-800",
  cashback: "bg-blue-100 text-blue-800",
};
