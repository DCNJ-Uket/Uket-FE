import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isIcon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {isIcon && (
          <Search className="absolute left-3 top-1/2 w-5 h-5 text-gray-500 transform -translate-y-1/2" />
        )}
        <input
          type={type}
          className={cn(
            "flex px-3 py-2 w-full h-10 text-sm bg-white rounded-md border ring-offset-white border-slate-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            className,
            isIcon ? "pl-10" : "",
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
