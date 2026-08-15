import {
  createContext,
  useContext,
  forwardRef,
  useMemo,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";
import {
  paginationVariants,
  paginationContentVariants,
  paginationItemVariants,
  paginationEllipsisVariants,
} from "./Pagination.variants";
import type {
  PaginationProps,
  PaginationContentProps,
  PaginationItemProps,
  PaginationButtonProps,
  PaginationEllipsisProps,
  PaginationContextValue,
} from "./Pagination.types";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";

const PaginationContext = createContext<PaginationContextValue | null>(null);

function usePaginationContext() {
  return useContext(PaginationContext);
}

export const PaginationContent = forwardRef<HTMLUListElement, PaginationContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(paginationContentVariants(), className)}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
PaginationContent.displayName = "PaginationContent";

export const PaginationItem = forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ className, variant: itemVariant, size: itemSize, active = false, disabled, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = itemVariant || context?.variant || "default";
    const size = itemSize || context?.size || "medium";
    const isDisabled = disabled || context?.disabled || false;

    return (
      <li>
        <button
          ref={ref}
          type="button"
          aria-current={active ? "page" : undefined}
          disabled={isDisabled}
          className={cn(paginationItemVariants({ variant, size, active }), className)}
          {...props}
        >
          {children}
        </button>
      </li>
    );
  }
);
PaginationItem.displayName = "PaginationItem";

export const PaginationPrev = forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ className, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = context?.variant || "default";
    const size = context?.size || "medium";

    return (
      <li>
        <button
          ref={ref}
          type="button"
          aria-label="Go to previous page"
          className={cn(paginationItemVariants({ variant, size }), className)}
          {...props}
        >
          {children ?? <ChevronLeft className="w-4 h-4" />}
        </button>
      </li>
    );
  }
);
PaginationPrev.displayName = "PaginationPrev";

export const PaginationNext = forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ className, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = context?.variant || "default";
    const size = context?.size || "medium";

    return (
      <li>
        <button
          ref={ref}
          type="button"
          aria-label="Go to next page"
          className={cn(paginationItemVariants({ variant, size }), className)}
          {...props}
        >
          {children ?? <ChevronRight className="w-4 h-4" />}
        </button>
      </li>
    );
  }
);
PaginationNext.displayName = "PaginationNext";

export const PaginationFirst = forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ className, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = context?.variant || "default";
    const size = context?.size || "medium";

    return (
      <li>
        <button
          ref={ref}
          type="button"
          aria-label="Go to first page"
          className={cn(paginationItemVariants({ variant, size }), className)}
          {...props}
        >
          {children ?? <ChevronsLeft className="w-4 h-4" />}
        </button>
      </li>
    );
  }
);
PaginationFirst.displayName = "PaginationFirst";

export const PaginationLast = forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ className, children, ...props }, ref) => {
    const context = usePaginationContext();
    const variant = context?.variant || "default";
    const size = context?.size || "medium";

    return (
      <li>
        <button
          ref={ref}
          type="button"
          aria-label="Go to last page"
          className={cn(paginationItemVariants({ variant, size }), className)}
          {...props}
        >
          {children ?? <ChevronsRight className="w-4 h-4" />}
        </button>
      </li>
    );
  }
);
PaginationLast.displayName = "PaginationLast";

export const PaginationEllipsis = forwardRef<HTMLSpanElement, PaginationEllipsisProps>(
  ({ className, ...props }, ref) => {
    return (
      <li aria-hidden="true">
        <span
          ref={ref}
          role="presentation"
          className={cn(paginationEllipsisVariants(), className)}
          {...props}
        >
          <MoreHorizontal className="w-4 h-4" />
          <span className="sr-only">More pages</span>
        </span>
      </li>
    );
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";

function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1
): (number | "ellipsis-start" | "ellipsis-end")[] {
  const totalPageNumbers = siblingCount * 2 + 5; // 1 + siblings + current + siblings + last + 2 ellipses

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, "ellipsis-end", totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    );
    return [1, "ellipsis-start", ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i
  );
  return [1, "ellipsis-start", ...middleRange, "ellipsis-end", totalPages];
}

const PaginationRoot = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      className,
      page: controlledPage,
      defaultPage = 1,
      totalPages,
      siblingCount = 1,
      showEdges = false,
      showPrevNext = true,
      variant = "default",
      size = "medium",
      disabled = false,
      onPageChange,
      children,
      ...props
    },
    ref
  ) => {
    const currentPage = controlledPage ?? defaultPage;

    const handlePageClick = (newPage: number) => {
      if (newPage < 1 || (totalPages && newPage > totalPages) || disabled) return;
      onPageChange?.(newPage);
    };

    const contextValue: PaginationContextValue = useMemo(
      () => ({
        variant,
        size,
        disabled,
      }),
      [variant, size, disabled]
    );

    let content: ReactNode = children;

    if (totalPages !== undefined && !children) {
      const range = getPaginationRange(currentPage, totalPages, siblingCount);

      content = (
        <PaginationContent>
          {showEdges && (
            <PaginationFirst
              onClick={() => handlePageClick(1)}
              disabled={currentPage <= 1 || disabled}
            />
          )}

          {showPrevNext && (
            <PaginationPrev
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage <= 1 || disabled}
            />
          )}

          {range.map((item, index) => {
            if (typeof item === "string") {
              return <PaginationEllipsis key={`dots-${item}-${index}`} />;
            }

            return (
              <PaginationItem
                key={item}
                active={item === currentPage}
                onClick={() => handlePageClick(item)}
                disabled={disabled}
              >
                {item}
              </PaginationItem>
            );
          })}

          {showPrevNext && (
            <PaginationNext
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage >= totalPages || disabled}
            />
          )}

          {showEdges && (
            <PaginationLast
              onClick={() => handlePageClick(totalPages)}
              disabled={currentPage >= totalPages || disabled}
            />
          )}
        </PaginationContent>
      );
    }

    return (
      <PaginationContext.Provider value={contextValue}>
        <nav
          ref={ref}
          role="navigation"
          aria-label="pagination"
          className={cn(paginationVariants({ size }), className)}
          {...props}
        >
          {content}
        </nav>
      </PaginationContext.Provider>
    );
  }
);

PaginationRoot.displayName = "Pagination";

export const Pagination = Object.assign(PaginationRoot, {
  Content: PaginationContent,
  Item: PaginationItem,
  Prev: PaginationPrev,
  Next: PaginationNext,
  First: PaginationFirst,
  Last: PaginationLast,
  Ellipsis: PaginationEllipsis,
});
