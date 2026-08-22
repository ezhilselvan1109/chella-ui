import React, { useState } from "react";
import { Form, FormField, Input, Button, useToast } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";

export const FormDoc: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please provide a valid email address");
      return;
    }
    setError("");
    toast.success("Form submitted", `Account created for ${email}`);
  };

  return (
    <ComponentDoc
      title="Form & FormField"
      description="Accessible form wrapper managing label association, helper descriptions, error alerts, and submission events."
      category="Forms & Inputs"
    >
      <ComponentPreview
        title="Form Validation Pattern"
        code={`<Form onSubmit={handleSubmit} className="space-y-4">
  <FormField label="Email" error={error} helpText="We'll never share your email.">
    <Input
      type="email"
      placeholder="alex@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </FormField>
  <Button type="submit" variant="primary">Create Account</Button>
</Form>`}
      >
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
          <FormField label="Work Email" error={error} helpText="We'll send your access token here.">
            <Input
              type="email"
              placeholder="alex@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
            />
          </FormField>
          <Button type="submit" variant="primary" fullWidth>
            Create Account
          </Button>
        </form>
      </ComponentPreview>
    </ComponentDoc>
  );
};
