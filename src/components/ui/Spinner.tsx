interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className = "h-8 w-8" }: SpinnerProps) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-primary-600 border-t-transparent ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
}
