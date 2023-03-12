import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GanttBarDateLabel } from "./GanttBarDateLabel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Features/Gantt/UI-Elements/GanttBarDateLabel",
  component: GanttBarDateLabel,
} as ComponentMeta<typeof GanttBarDateLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GanttBarDateLabel> = (args) => (
  <GanttBarDateLabel {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  dateString: "2023-01-02",
};

export const Formated = Template.bind({});
Formated.args = {
  dateString: "2023-01-02",
  inputFormat: "yyyy-MM-dd",
  outputFormat: "yyyy/MM/dd",
};
