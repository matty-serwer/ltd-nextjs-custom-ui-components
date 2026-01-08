import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input">;

function Input({ className, type, ...props }: InputProps) {
    const isFileInput = type === "file";

    if (isFileInput) {
        return (
            <input
                type="file"
                className={cn(
                    // Base file input styles (Tailwind 4 recommended approach)
                    "w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm",
                    "text-foreground placeholder:text-muted-foreground",
                    "shadow-xs outline-none transition-colors",
                    // File button styles (simplified)
                    "file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5",
                    "file:text-sm file:font-medium file:text-primary-foreground",
                    "hover:file:bg-primary/90",
                    // Focus & disabled states
                    "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className,
                )}
                {...props}
            />
        );
    }

    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                // Base input styles
                "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1",
                "text-base shadow-xs outline-none transition-[color,box-shadow] md:text-sm",
                "dark:bg-input/30",
                // Text & selection
                "text-foreground placeholder:text-muted-foreground",
                "selection:bg-primary selection:text-primary-foreground",
                // Focus state
                "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
                // Invalid state
                "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
                "dark:aria-invalid:ring-destructive/40",
                // Disabled state
                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        />
    );
}

export { Input };
