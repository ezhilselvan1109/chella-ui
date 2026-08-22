import { jsx as _jsx } from "react/jsx-runtime";
import { Timeline } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { GitCommit, PackageCheck, Rocket } from "lucide-react";
const timelineProps = [
    {
        name: "mode",
        type: '"left" | "right" | "alternate"',
        defaultValue: '"left"',
        description: "Orientation of timeline items.",
    },
    {
        name: "items",
        type: "TimelineItemData[]",
        description: "Array of timeline item objects { title, description, time, status, icon }.",
    },
];
export const TimelineDoc = () => {
    const deploymentItems = [
        {
            title: "Build Verified",
            time: "10:45 AM",
            description: "All 240 unit tests passed and bundle assets generated.",
            status: "success",
            icon: _jsx(GitCommit, { className: "w-3.5 h-3.5" }),
        },
        {
            title: "Docker Container Pushed",
            time: "10:48 AM",
            description: "Artifacts pushed to registry.",
            status: "success",
            icon: _jsx(PackageCheck, { className: "w-3.5 h-3.5" }),
        },
        {
            title: "Production Deployed",
            time: "Just now",
            description: "Traffic switched to blue cluster.",
            status: "primary",
            icon: _jsx(Rocket, { className: "w-3.5 h-3.5" }),
        },
    ];
    return (_jsx(ComponentDoc, { title: "Timeline", description: "Chronological event progression display suitable for activity logs, release histories, and audit trails.", category: "Data Display", propsData: timelineProps, children: _jsx(ComponentPreview, { title: "Deployment Sequence", code: `<Timeline
  items={[
    {
      title: "Build Verified",
      time: "10:45 AM",
      description: "All 240 unit tests passed.",
      status: "success",
      icon: <GitCommit className="w-3.5 h-3.5" />
    },
    {
      title: "Docker Container Pushed",
      time: "10:48 AM",
      description: "Artifacts pushed to registry.",
      status: "success",
      icon: <PackageCheck className="w-3.5 h-3.5" />
    },
    {
      title: "Production Deployed",
      time: "Just now",
      description: "Traffic switched to blue cluster.",
      status: "primary",
      icon: <Rocket className="w-3.5 h-3.5" />
    }
  ]}
/>`, children: _jsx("div", { className: "max-w-md w-full", children: _jsx(Timeline, { items: deploymentItems }) }) }) }));
};
