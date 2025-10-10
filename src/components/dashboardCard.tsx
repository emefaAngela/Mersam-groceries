import React, { type ReactNode } from "react";
import { cn } from "../app/lib/utils";

interface DashboardCardProps {
  title: string;
  icon: ReactNode;
  count: number;
  percentage: string;
  children?: ReactNode;
  className?: string;
}

export function DashboardCard({
  title,
  icon,
  count,
  percentage,
  className,
  children,
  ...props
}: DashboardCardProps) {
  return (
    <div
      className={cn("h-32 w-48 flex flex-col justify-between", className)}
      {...props}
    >
      <div className="flex flex-row space-x-4">
        <div className="h-8 w-8 bg-green-400 rounded-md text-center items-center flex justify-center">
          {icon}
        </div>
        <div className="text-md text-gray-800">{title}</div>
      </div>
      <div className="font-bold text-xl text center items-center">{count}</div>
      <div className="text-xs text-gray-600">{percentage} vs last week</div>
      {children}
    </div>
  );
}
