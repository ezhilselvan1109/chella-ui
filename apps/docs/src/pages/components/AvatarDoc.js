import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarGroup } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const avatarProps = [
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
export const AvatarDoc = () => {
    return (_jsxs(ComponentDoc, { title: "Avatar & AvatarGroup", description: "Visual representation of user profile images with automatic fallback initials and stacked group displays.", category: "Data Display", propsData: avatarProps, children: [_jsx(ComponentPreview, { title: "Avatar Sizes & Fallback Initials", code: `<Avatar size="small" name="Jane Doe" />
<Avatar size="medium" name="Ezhil Selvan" />
<Avatar size="large" name="Alex Brand" />`, children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Avatar, { size: "small", name: "Jane Doe" }), _jsx(Avatar, { size: "medium", name: "Ezhil Selvan" }), _jsx(Avatar, { size: "large", name: "Alex Brand" })] }) }), _jsx(ComponentPreview, { title: "AvatarGroup", description: "Overlapping stacked collection of avatars with overflow counts.", code: `<AvatarGroup max={3}>
  <Avatar name="Alex Lee" />
  <Avatar name="Bob King" />
  <Avatar name="Charlie Ray" />
  <Avatar name="David Xu" />
  <Avatar name="Emma Stone" />
</AvatarGroup>`, children: _jsxs(AvatarGroup, { max: 3, children: [_jsx(Avatar, { name: "Alex Lee" }), _jsx(Avatar, { name: "Bob King" }), _jsx(Avatar, { name: "Charlie Ray" }), _jsx(Avatar, { name: "David Xu" }), _jsx(Avatar, { name: "Emma Stone" })] }) })] }));
};
