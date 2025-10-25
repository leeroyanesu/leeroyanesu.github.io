import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  colors?: string[];
}

const defaultColors = ["from-primary", "via-orange", "to-primary"];

export function GradientText({
  children,
  className,
  animate = true,
  colors = defaultColors,
}: GradientTextProps) {
  const gradientClasses = cn(
    "bg-clip-text text-transparent",
    "bg-gradient-to-r",
    ...colors,
    animate && "animate-gradient bg-[length:200%_auto]",
    className
  );

  return <span className={gradientClasses}>{children}</span>;
}