import { Link } from "react-router-dom";
import { ScanSearch } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  linkTo?: string;
  variant?: "light" | "dark";
}

const sizeMap = {
  sm: { icon: "h-7 w-7", text: "text-lg" },
  md: { icon: "h-8 w-8", text: "text-xl" },
  lg: { icon: "h-10 w-10", text: "text-2xl" },
} as const;

const variantMap = {
  light: {
    icon: "text-primary-600 group-hover:text-primary-700",
    label: "text-gray-900",
    accent: "text-primary-600",
  },
  dark: {
    icon: "text-primary-400",
    label: "text-white",
    accent: "text-primary-400",
  },
} as const;

export default function Logo({ size = "md", linkTo = "/", variant = "light" }: LogoProps) {
  const { icon, text } = sizeMap[size];
  const colors = variantMap[variant];

  const content = (
    <>
      <ScanSearch className={`${icon} ${colors.icon} transition-colors`} />
      <span className={`${text} font-bold ${colors.label} tracking-tight`}>
        Save<span className={colors.accent}>Sweep</span>
      </span>
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="inline-flex items-center gap-2 group">
        {content}
      </Link>
    );
  }

  return <div className="inline-flex items-center gap-2">{content}</div>;
}
