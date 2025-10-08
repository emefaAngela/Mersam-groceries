import * as React from "react";
import { cn } from "../app/lib/utils";

function Button({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn("rounded-full px-2 py-1 w-fit", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
