import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useRef, useMemo, } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useId } from "../../hooks/useId";
import { modalBackdropVariants, modalDialogVariants } from "./Modal.variants";
import { X } from "lucide-react";
const ModalContext = createContext(undefined);
export function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("Modal compound subcomponents must be used within a <Modal>");
    }
    return context;
}
export function Modal({ open, onClose, title, description, children, footer, size = "medium", closeOnEsc = true, closeOnBackdropClick = true, showCloseButton = true, className, backdropClassName, }) {
    const modalId = useId("modal");
    const titleId = `${modalId}-title`;
    const descriptionId = `${modalId}-desc`;
    const dialogRef = useRef(null);
    // Focus trap
    useFocusTrap(dialogRef, { active: open, restoreFocus: true });
    // Body scroll lock
    useEffect(() => {
        if (!open)
            return;
        const originalStyle = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [open]);
    // ESC key handler
    useEffect(() => {
        if (!open || !closeOnEsc)
            return;
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                e.stopPropagation();
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, closeOnEsc, onClose]);
    const contextValue = useMemo(() => ({
        onClose,
        titleId,
        descriptionId,
    }), [onClose, titleId, descriptionId]);
    if (!open || typeof document === "undefined") {
        return null;
    }
    return createPortal(_jsx(ModalContext.Provider, { value: contextValue, children: _jsx("div", { className: cn(modalBackdropVariants(), backdropClassName), onClick: (e) => {
                if (closeOnBackdropClick && e.target === e.currentTarget) {
                    onClose();
                }
            }, children: _jsxs("div", { ref: dialogRef, role: "dialog", "aria-modal": "true", "aria-labelledby": title ? titleId : undefined, "aria-describedby": description ? descriptionId : undefined, tabIndex: -1, className: cn(modalDialogVariants({ size }), className), children: [showCloseButton && (_jsx("button", { type: "button", onClick: onClose, "aria-label": "Close dialog", className: "absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors", children: _jsx(X, { className: "w-4 h-4" }) })), (title || description) && (_jsxs("div", { className: "p-6 pb-2 space-y-1", children: [title && (_jsx("h2", { id: titleId, className: "text-lg font-semibold tracking-tight text-foreground", children: title })), description && (_jsx("p", { id: descriptionId, className: "text-sm text-muted-foreground", children: description }))] })), _jsx("div", { className: "p-6 pt-2 overflow-y-auto flex-1", children: children }), footer && (_jsx("div", { className: "flex items-center justify-end gap-3 p-6 pt-3 border-t border-border bg-muted/20 rounded-b-chellaa-lg", children: footer }))] }) }) }), document.body);
}
export function ModalHeader({ children, className }) {
    return _jsx("div", { className: cn("p-6 pb-3 space-y-1", className), children: children });
}
export function ModalTitle({ children, className }) {
    const { titleId } = useModalContext();
    return (_jsx("h2", { id: titleId, className: cn("text-lg font-semibold tracking-tight text-foreground", className), children: children }));
}
export function ModalDescription({ children, className, }) {
    const { descriptionId } = useModalContext();
    return (_jsx("p", { id: descriptionId, className: cn("text-sm text-muted-foreground", className), children: children }));
}
export function ModalBody({ children, className }) {
    return _jsx("div", { className: cn("p-6 py-2 overflow-y-auto flex-1", className), children: children });
}
export function ModalFooter({ children, className }) {
    return (_jsx("div", { className: cn("flex items-center justify-end gap-3 p-6 pt-3 border-t border-border bg-muted/20 rounded-b-chellaa-lg", className), children: children }));
}
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
