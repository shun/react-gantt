import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GanttBarResizeHandle } from "./GanttBarResizeHandle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Features/Gantt/UI-Elements/GanttBarResizeHandle",
  component: GanttBarResizeHandle,
} as ComponentMeta<typeof GanttBarResizeHandle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GanttBarResizeHandle> = (args) => (
  <GanttBarResizeHandle />
);

export const Normal = Template.bind({});

