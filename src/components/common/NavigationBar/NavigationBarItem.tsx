import { cn } from "@lib/cn";
import Link from "next/link";

interface NavigationBarItemProps {
  title: string;
  path: string;
  active?: boolean;
}

export function NavigationBarItem({ title, path, active }: NavigationBarItemProps) {
  return (
    <Link
      className={cn(
        `rounded-full px-3 py-1 text-sm transition-colors duration-100 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background`,
        active && "bg-primary-surface text-primary"
      )}
      href={path}
    >
      {title}
    </Link>
  );
}
