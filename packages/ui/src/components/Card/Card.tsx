import {
  forwardRef,
  type HTMLAttributes,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import { cn } from "../../utils/cn";
import { cardVariants } from "./Card.variants";
import type { CardProps } from "./Card.types";

const CardBase = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "outlined", hoverable = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, hoverable }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBase.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 pb-3 space-y-1.5", className)} {...props}>
        {children}
      </div>
    );
  }
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-lg font-semibold tracking-tight text-card-foreground", className)}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
});
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 pt-0 text-sm", className)} {...props}>
        {children}
      </div>
    );
  }
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-end gap-3 p-6 pt-0", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardFooter.displayName = "CardFooter";

export interface CardComponent
  extends ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>> {
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
}

export const Card = CardBase as CardComponent;
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;
