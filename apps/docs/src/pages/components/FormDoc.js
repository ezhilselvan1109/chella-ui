import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FormField, Input, Button, useToast } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
export const FormDoc = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const toast = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setError("Please provide a valid email address");
            return;
        }
        setError("");
        toast.success("Form submitted", `Account created for ${email}`);
    };
    return (_jsx(ComponentDoc, { title: "Form & FormField", description: "Accessible form wrapper managing label association, helper descriptions, error alerts, and submission events.", category: "Forms & Inputs", children: _jsx(ComponentPreview, { title: "Form Validation Pattern", code: `<Form onSubmit={handleSubmit} className="space-y-4">
  <FormField label="Email" error={error} helpText="We'll never share your email.">
    <Input
      type="email"
      placeholder="alex@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </FormField>
  <Button type="submit" variant="primary">Create Account</Button>
</Form>`, children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 w-full max-w-sm", children: [_jsx(FormField, { label: "Work Email", error: error, helpText: "We'll send your access token here.", children: _jsx(Input, { type: "email", placeholder: "alex@company.com", value: email, onChange: (e) => {
                                setEmail(e.target.value);
                                if (error)
                                    setError("");
                            } }) }), _jsx(Button, { type: "submit", variant: "primary", fullWidth: true, children: "Create Account" })] }) }) }));
};
