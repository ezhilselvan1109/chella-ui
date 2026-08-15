import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { statCardVariants, statCardTrendVariants } from "./StatCard.variants";
import type {
  StatCardProps,
  StatCardHeaderProps,
  StatCardTitleProps,
  StatCardValueProps,
  StatCardTrendProps,
  StatCardIconProps,
} from "./StatCard.types";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export const StatCardHeader = forwardRef<HTMLDivElement, StatCardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-between gap-2 pb-2", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
StatCardHeader.displayName = "StatCardHeader";

export const StatCardTitle = forwardRef<HTMLHeadingElement, StatCardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-xs font-bold uppercase tracking-wider text-muted-foreground", className)}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
StatCardTitle.displayName = "StatCardTitle";

export const StatCardIcon = forwardRef<HTMLDivElement, StatCardIconProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn("p-2 rounded-chella-md bg-primary/10 text-primary shrink-0 [&>svg]:size-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
StatCardIcon.displayName = "StatCardIcon";

export const StatCardValue = forwardRef<HTMLDivElement, StatCardValueProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-2xl sm:text-3xl font-black text-foreground tracking-tight", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
StatCardValue.displayName = "StatCardValue";

export const StatCardTrend = forwardRef<HTMLDivElement, StatCardTrendProps>(
  ({ className, direction = "neutral", value, label, children, ...props }, ref) => {
    const renderTrendIcon = () => {
      if (direction === "up") return <TrendingUp className="w-3.5 h-3.5 shrink-0" />;
      if (direction === "down") return <TrendingDown className="w-3.5 h-3.5 shrink-0" />;
      return <Minus className="w-3.5 h-3.5 shrink-0" />;
    };

    return (
      <div
        ref={ref}
        className={cn(statCardTrendVariants({ direction }), className)}
        {...props}
      >
        {renderTrendIcon()}
        {value && <span>{value}</span>}
        {label && <span className="text-muted-foreground font-normal ml-0.5">{label}</span>}
        {children}
      </div>
    );
  }
);
StatCardTrend.displayName = "StatCardTrend";

const StatCardRoot = forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      variant = "default",
      hoverable = false,
      title,
      value,
      icon,
      trend,
      description,
      children,
      ...props
    },
    ref
  ) => {
    if (!children && (title || value)) {
      return (
        <div
          ref={ref}
          className={cn(statCardVariants({ variant, hoverable }), className)}
          {...props}
        >
          <div>
            <StatCardHeader>
              {title && <StatCardTitle>{title}</StatCardTitle>}
              {icon && <StatCardIcon>{icon}</StatCardIcon>}
            </StatCardHeader>

            {value && <StatCardValue>{value}</StatCardValue>}
          </div>

          <div>
            {trend && (
              <StatCardTrend
                direction={trend.direction}
                value={trend.value}
                label={trend.label}
              />
            )}
            {description && (
              <p className="text-xs text-muted-foreground mt-1.5">{description}</p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(statCardVariants({ variant, hoverable }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

StatCardRoot.displayName = "StatCard";

export const StatCard = Object.assign(StatCardRoot, {
  Header: StatCardHeader,
  Title: StatCardTitle,
  Icon: StatCardIcon,
  Value: StatCardValue,
  Trend: StatCardTrend,
});
