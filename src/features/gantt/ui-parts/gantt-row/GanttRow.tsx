import styled from "styled-components";
import { GanttBarResizeHandle } from "features/gantt/ui-elements/gantt-bar-resize-handle/GanttBarResizeHandle";
import { GanttBar } from "features/gantt/ui-elements/gantt-bar/GanttBar";
import { GanttBarDateLabel } from "features/gantt/ui-elements/gantt-bar-date-label/GanttBarDateLabel";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
top: 50%;
`;

export const GanttRow = () => {
  return (
    <Wrapper>
      <GanttBarDateLabel dateString="2023-02-01" />
      <GanttBarResizeHandle />
      <GanttBar width={80} barHeight={8} bgColor="salmon" />
      <GanttBarResizeHandle />
      <GanttBarDateLabel dateString="2023-02-05" />
    </Wrapper>
  )
};
