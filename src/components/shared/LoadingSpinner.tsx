import { cn } from "@/lib/utils";

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full h-4 w-4 border border-b-2 border-white",
        className
      )}
    ></div>
  );
};

export default LoadingSpinner;
