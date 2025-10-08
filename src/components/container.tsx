import * as React from "react";
import { cn } from "../app/lib/utils";
import Navbar from "../app/presentation/shared/navbar";

function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="w-full">
      <Navbar />
      <div
        className={cn(
          "w-full h-full px-10 sm:px-24 m-0 bg-gray-100",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export { Container };
