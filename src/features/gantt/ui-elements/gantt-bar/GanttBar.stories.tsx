import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GanttBar } from "./GanttBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Features/Gantt/UI-Elements/GanttBar",
  component: GanttBar,
} as ComponentMeta<typeof GanttBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GanttBar> = (args) => (
  <GanttBar {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  width: 100,
  barHeight: 40,
  bgColor: "red",
};
