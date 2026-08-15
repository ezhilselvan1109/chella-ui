import {
  createContext,
  useContext,
  forwardRef,
  useMemo,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";
import {
  breadcrumbVariants,
  breadcrumbListVariants,
  breadcrumbItemVariants,
  breadcrumbLinkVariants,
  breadcrumbPageVariants,
  breadcrumbSeparatorVariants,
} from "./Breadcrumb.variants";
import type {
  BreadcrumbProps,
  BreadcrumbListProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbPageProps,
  BreadcrumbSeparatorProps,
  BreadcrumbEllipsisProps,
  BreadcrumbContextValue,
  BreadcrumbItemData,
} from "./Breadcrumb.types";
import { ChevronRight, MoreHorizontal } from "lucide-react";

const BreadcrumbContext = createContext<BreadcrumbContextValue | null>(null);

function useBreadcrumbContext() {
  return useContext(BreadcrumbContext);
}

export const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, children, ...props }, ref) => {
    const context = useBreadcrumbContext();
    const size = context?.size || "medium";

    return (
      <ol
        ref={ref}
        className={cn(breadcrumbListVariants({ size }), className)}
        {...props}
      >
        {children}
      </ol>
    );
  }
);
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(breadcrumbItemVariants(), className)}
        {...props}
      >
        {children}
      </li>
    );
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(breadcrumbLinkVariants(), className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbPage = forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn(breadcrumbPageVariants(), className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
BreadcrumbPage.displayName = "BreadcrumbPage";

export const BreadcrumbSeparator = forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  ({ className, children, ...props }, ref) => {
    const context = useBreadcrumbContext();
    const defaultIcon = context?.separator || <ChevronRight className="w-3.5 h-3.5" />;

    return (
      <li
        ref={ref}
        role="presentation"
        aria-hidden="true"
        className={cn(breadcrumbSeparatorVariants(), className)}
        {...props}
      >
        {children ?? defaultIcon}
      </li>
    );
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export const BreadcrumbEllipsis = forwardRef<HTMLSpanElement, BreadcrumbEllipsisProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="presentation"
        aria-hidden="true"
        className={cn("flex h-6 w-6 items-center justify-center text-muted-foreground", className)}
        {...props}
      >
        <MoreHorizontal className="w-4 h-4" />
        <span className="sr-only">More links</span>
      </span>
    );
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

function renderItemsList(
  items: BreadcrumbItemData[],
  maxItems?: number,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 2
): ReactNode {
  let hasEllipsis = false;

  if (maxItems && items.length > maxItems) {
    const totalVisible = itemsBeforeCollapse + itemsAfterCollapse;
    if (items.length > totalVisible) {
      hasEllipsis = true;
    }
  }

  if (!hasEllipsis) {
    return items.map((item, index) => {
      const isLast = index === items.length - 1 || item.active;

      return (
        <span key={index} className="inline-flex items-center gap-1.5">
          {index > 0 && <BreadcrumbSeparator />}
          <BreadcrumbItem>
            {isLast ? (
              <BreadcrumbPage>
                {item.icon && <span className="mr-1.5 inline-flex">{item.icon}</span>}
                {item.label}
              </BreadcrumbPage>
            ) : (
              <BreadcrumbLink
                href={item.href}
                onClick={item.onClick}
                className={item.onClick ? "cursor-pointer" : undefined}
              >
                {item.icon && <span className="mr-1.5 inline-flex">{item.icon}</span>}
                {item.label}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        </span>
      );
    });
  }

  const startItems = items.slice(0, itemsBeforeCollapse);
  const endItems = items.slice(items.length - itemsAfterCollapse);

  return (
    <>
      {startItems.map((item, index) => (
        <span key={`start-${index}`} className="inline-flex items-center gap-1.5">
          {index > 0 && <BreadcrumbSeparator />}
          <BreadcrumbItem>
            <BreadcrumbLink href={item.href} onClick={item.onClick}>
              {item.icon && <span className="mr-1.5 inline-flex">{item.icon}</span>}
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </span>
      ))}

      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>

      {endItems.map((item, index) => {
        const isLast = index === endItems.length - 1 || item.active;
        return (
          <span key={`end-${index}`} className="inline-flex items-center gap-1.5">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {isLast ? (
                <BreadcrumbPage>
                  {item.icon && <span className="mr-1.5 inline-flex">{item.icon}</span>}
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href} onClick={item.onClick}>
                  {item.icon && <span className="mr-1.5 inline-flex">{item.icon}</span>}
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </span>
        );
      })}
    </>
  );
}

const BreadcrumbRoot = forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      className,
      separator,
      size = "medium",
      items,
      maxItems,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 2,
      children,
      ...props
    },
    ref
  ) => {
    const contextValue: BreadcrumbContextValue = useMemo(
      () => ({
        separator,
        size,
      }),
      [separator, size]
    );

    return (
      <BreadcrumbContext.Provider value={contextValue}>
        <nav
          ref={ref}
          aria-label="breadcrumb"
          className={cn(breadcrumbVariants({ size }), className)}
          {...props}
        >
          {items ? (
            <BreadcrumbList>
              {renderItemsList(items, maxItems, itemsBeforeCollapse, itemsAfterCollapse)}
            </BreadcrumbList>
          ) : (
            children
          )}
        </nav>
      </BreadcrumbContext.Provider>
    );
  }
);

BreadcrumbRoot.displayName = "Breadcrumb";

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis,
});
