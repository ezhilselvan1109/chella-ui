import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import type {
  ToastData,
  ToastContextValue,
  ToastProviderProps,
} from "./Toast.types";
import { Toast } from "./Toast";
import { toastContainerVariants } from "./Toast.variants";
import { cn } from "../../utils/cn";

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({
  children,
  placement = "top-right",
  maxToasts = 5,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clear = useCallback(() => {
    setToasts([]);
  }, []);

  const addToast = useCallback(
    (options: Omit<ToastData, "id">): string => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastData = { ...options, id };

      setToasts((prev) => {
        const next = [newToast, ...prev];
        return next.slice(0, maxToasts);
      });

      // Auto dismiss
      const duration = options.duration ?? 4000;
      if (duration > 0) {
        setTimeout(() => {
          dismiss(id);
          options.onClose?.();
        }, duration);
      }

      return id;
    },
    [dismiss, maxToasts]
  );

  const toastApi = useMemo(() => {
    const fn = (options: Omit<ToastData, "id">) => addToast(options);
    fn.success = (title: ReactNode, description?: ReactNode) =>
      addToast({ title, description, variant: "success" });
    fn.error = (title: ReactNode, description?: ReactNode) =>
      addToast({ title, description, variant: "danger" });
    fn.warning = (title: ReactNode, description?: ReactNode) =>
      addToast({ title, description, variant: "warning" });
    fn.info = (title: ReactNode, description?: ReactNode) =>
      addToast({ title, description, variant: "info" });
    fn.dismiss = dismiss;
    fn.clear = clear;
    return fn;
  }, [addToast, dismiss, clear]);

  const value = useMemo(
    () => ({
      toasts,
      toast: toastApi,
    }),
    [toasts, toastApi]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Floating Stacking Toasts Container */}
      <div
        className={cn(toastContainerVariants({ placement }))}
        aria-live="polite"
        aria-atomic="false"
      >
        {toasts.map((item) => (
          <Toast
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            variant={item.variant}
            action={item.action}
            onClose={() => {
              dismiss(item.id);
              item.onClose?.();
            }}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue["toast"] {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a <ToastProvider>");
  }
  return context.toast;
}
