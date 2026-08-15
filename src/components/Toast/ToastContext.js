import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useCallback, useMemo, } from "react";
import { Toast } from "./Toast";
import { toastContainerVariants } from "./Toast.variants";
import { cn } from "../../utils/cn";
export const ToastContext = createContext(undefined);
export function ToastProvider({ children, placement = "top-right", maxToasts = 5, }) {
    const [toasts, setToasts] = useState([]);
    const dismiss = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);
    const clear = useCallback(() => {
        setToasts([]);
    }, []);
    const addToast = useCallback((options) => {
        const id = Math.random().toString(36).substring(2, 9);
        const newToast = { ...options, id };
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
    }, [dismiss, maxToasts]);
    const toastApi = useMemo(() => {
        const fn = (options) => addToast(options);
        fn.success = (title, description) => addToast({ title, description, variant: "success" });
        fn.error = (title, description) => addToast({ title, description, variant: "danger" });
        fn.warning = (title, description) => addToast({ title, description, variant: "warning" });
        fn.info = (title, description) => addToast({ title, description, variant: "info" });
        fn.dismiss = dismiss;
        fn.clear = clear;
        return fn;
    }, [addToast, dismiss, clear]);
    const value = useMemo(() => ({
        toasts,
        toast: toastApi,
    }), [toasts, toastApi]);
    return (_jsxs(ToastContext.Provider, { value: value, children: [children, _jsx("div", { className: cn(toastContainerVariants({ placement })), "aria-live": "polite", "aria-atomic": "false", children: toasts.map((item) => (_jsx(Toast, { id: item.id, title: item.title, description: item.description, variant: item.variant, action: item.action, onClose: () => {
                        dismiss(item.id);
                        item.onClose?.();
                    } }, item.id))) })] }));
}
export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a <ToastProvider>");
    }
    return context.toast;
}
