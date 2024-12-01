import { DarkModeToggle } from "@components/common/DarkModeToggle";
import { Logo } from "@components/common/Logo";
import { NavigationBar } from "@components/common/NavigationBar";

export function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-5">
      <Logo />
      <div className="flex items-center gap-2">
        <NavigationBar />
        <DarkModeToggle />
      </div>
    </header>
  );
}
