import React from "react";
import { Avatar, AvatarGroup } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const avatarProps: PropDefinition[] = [
  {
    name: "src",
    type: "string",
    description: "Image source URL.",
  },
  {
    name: "name",
    type: "string",
    description: "User name used to auto-generate fallback initials.",
  },
  {
    name: "size",
    type: '"xs" | "small" | "medium" | "large" | "xl" | "2xl"',
    defaultValue: '"medium"',
    description: "Diameter scale of the avatar circle.",
  },
];

export const AvatarDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Avatar & AvatarGroup"
      description="Visual representation of user profile images with automatic fallback initials and stacked group displays."
      category="Data Display"
      propsData={avatarProps}
    >
      <ComponentPreview
        title="Avatar Sizes & Fallback Initials"
        code={`<Avatar size="small" name="Jane Doe" />
<Avatar size="medium" name="Ezhil Selvan" />
<Avatar size="large" name="Alex Brand" />`}
      >
        <div className="flex items-center gap-4">
          <Avatar size="small" name="Jane Doe" />
          <Avatar size="medium" name="Ezhil Selvan" />
          <Avatar size="large" name="Alex Brand" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="AvatarGroup"
        description="Overlapping stacked collection of avatars with overflow counts."
        code={`<AvatarGroup max={3}>
  <Avatar name="Alex Lee" />
  <Avatar name="Bob King" />
  <Avatar name="Charlie Ray" />
  <Avatar name="David Xu" />
  <Avatar name="Emma Stone" />
</AvatarGroup>`}
      >
        <AvatarGroup max={3}>
          <Avatar name="Alex Lee" />
          <Avatar name="Bob King" />
          <Avatar name="Charlie Ray" />
          <Avatar name="David Xu" />
          <Avatar name="Emma Stone" />
        </AvatarGroup>
      </ComponentPreview>
    </ComponentDoc>
  );
};
