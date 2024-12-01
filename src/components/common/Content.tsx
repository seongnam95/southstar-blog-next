import React from "react";

import { cn } from "@lib/cn";

interface ContentProps {
  children?: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return <div className={cn("m-auto mt-10 min-h-full max-w-[700px] p-6")}>{children}</div>;
}

export default Content;
