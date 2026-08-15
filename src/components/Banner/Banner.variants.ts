import { cva } from "class-variance-authority";

export const bannerVariants = cva(
  "w-full px-4 py-3 font-sans select-none text-xs flex items-center justify-between gap-3 transition-all",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground border-b border-border",
        primary: "bg-primary text-primary-foreground shadow-xs",
        info: "bg-sky-500 text-white shadow-xs",
        success: "bg-emerald-600 text-white shadow-xs",
        warning: "bg-amber-500 text-slate-950 font-medium shadow-xs",
        danger: "bg-rose-600 text-white shadow-xs",
        gradient: "bg-linear-to-r from-primary via-indigo-600 to-purple-600 text-white shadow-md",
      },
      position: {
        static: "relative",
        top: "fixed top-0 left-0 right-0 z-50",
        bottom: "fixed bottom-0 left-0 right-0 z-50",
      },
    },
    defaultVariants: {
      variant: "gradient",
      position: "static",
    },
  }
);

export const bannerCloseButtonVariants = cva(
  "inline-flex items-center justify-center rounded-chella-sm p-1 hover:bg-black/10 dark:hover:bg-white/10 text-current transition-colors shrink-0 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
);
