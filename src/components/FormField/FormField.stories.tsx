import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Form } from "./Form";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { Select } from "../Select";
import { Button } from "../Button";

const meta: Meta<typeof FormField> = {
  title: "Components/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <FormField
        label="Cluster Domain"
        required
        helpText="Fully qualified domain for internal cluster ingress"
      >
        <Input placeholder="e.g. k8s.prod.internal" />
      </FormField>
    </div>
  ),
};

export const WithValidationErrors: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <FormField
        label="Work Email"
        required
        error="Please provide a valid company email address"
      >
        <Input defaultValue="kumar@invalid" />
      </FormField>

      <FormField
        label="Pod Description"
        error="Description exceeds maximum character count"
      >
        <Textarea defaultValue="A long description..." />
      </FormField>
    </div>
  ),
};

export const FormLayouts: Story = {
  render: () => (
    <Form layout="vertical" className="w-96 space-y-4">
      <FormField label="Service Name" required>
        <Input placeholder="auth-gateway" />
      </FormField>

      <FormField label="Deployment Region">
        <Select
          options={[
            { label: "US East (N. Virginia)", value: "us-east-1" },
            { label: "US West (Oregon)", value: "us-west-2" },
            { label: "EU Central (Frankfurt)", value: "eu-central-1" },
          ]}
        />
      </FormField>

      <div className="pt-2">
        <Button variant="primary" className="w-full">
          Deploy Service
        </Button>
      </div>
    </Form>
  ),
};
