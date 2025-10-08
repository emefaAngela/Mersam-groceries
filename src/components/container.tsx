import * as React from "react";
import { cn } from "../app/lib/utils";

function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full h-full px-10 sm:px-24 m-0 bg-gray-100", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
