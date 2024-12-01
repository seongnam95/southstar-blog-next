"use client";

import { usePathname } from "next/navigation";

import { NavigationBarItem } from "./NavigationBarItem";

const menuItems = [
  {
    key: "blog",
    title: "Blog",
    path: "/blog"
  },
  {
    key: "about",
    title: "About",
    path: "/about"
  }
];

export function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav>
      {menuItems.map((item) => (
        <NavigationBarItem
          key={item.key}
          active={pathname.startsWith(item.path)}
          title={item.title}
          path={item.path}
        />
      ))}
    </nav>
  );
}
