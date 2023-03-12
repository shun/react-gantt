import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GanttRow } from "./GanttRow";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Features/Gantt/UI-Parts/GanttRow",
  component: GanttRow,
} as ComponentMeta<typeof GanttRow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GanttRow> = (args) => (
  <GanttRow />
);

export const Normal = Template.bind({});
