import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../../../packages/ui/src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@chellaa/ui/styles.css": path.resolve(__dirname, "../../../packages/ui/src/styles/index.css"),
          "@chellaa/ui": path.resolve(__dirname, "../../../packages/ui/src/index.ts"),
        },
      },
    };
  },
};

export default config;
