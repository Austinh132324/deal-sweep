import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  linkTo?: string;
  variant?: "light" | "dark";
}

const sizeMap = {
  sm: { icon: "h-8 w-8", text: "text-lg", gap: "gap-2" },
  md: { icon: "h-10 w-10", text: "text-xl", gap: "gap-2.5" },
  lg: { icon: "h-12 w-12", text: "text-2xl", gap: "gap-3" },
} as const;

const variantMap = {
  light: {
    label: "text-gray-900",
    save: "text-primary-600",
    sweep: "text-accent-600",
    sub: "text-gray-500",
  },
  dark: {
    label: "text-white",
    save: "text-primary-300",
    sweep: "text-accent-400",
    sub: "text-gray-300",
  },
} as const;

export default function Logo({ size = "md", linkTo = "/", variant = "light" }: LogoProps) {
  const style = sizeMap[size];
  const colors = variantMap[variant];

  const content = (
    <div className={`inline-flex items-center ${style.gap}`}>
      <img
        src={`${import.meta.env.BASE_URL}branding/savesweep-mark.svg`}
        alt="SaveSweep"
        className={`${style.icon} rounded-xl`}
      />
      <span className={`font-extrabold leading-none tracking-tight ${style.text} ${colors.label}`}>
        <span className={colors.save}>Save</span>
        <span className={colors.sweep}>Sweep</span>
        {size !== "sm" ? (
          <span className={`block text-xs font-medium italic mt-1 ${colors.sub}`}>
            Savings on autopilot.
          </span>
        ) : null}
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="inline-flex items-center" aria-label="SaveSweep">
        {content}
      </Link>
    );
  }

  return <div className="inline-flex items-center">{content}</div>;
}
