import React from "react";

import Link from "next/link";

export function Logo() {
  return (
    <div>
      <Link className="p-1 font-semibold" href="/">
        SouthStar.log
      </Link>
    </div>
  );
}
