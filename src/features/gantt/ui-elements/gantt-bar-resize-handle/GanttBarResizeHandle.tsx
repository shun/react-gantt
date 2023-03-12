import styled from "styled-components";
import DragHandleIcon from "@mui/icons-material/DragHandle"

const HorisontalDragHandle = styled(DragHandleIcon)`
  transform:rotate(90deg);
  &:hover {
    cursor: col-resize;
  }
`;
export const GanttBarResizeHandle = () => {
  return <div><HorisontalDragHandle /></div>;
};
