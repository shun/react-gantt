import styled from "styled-components";

const DraggableBar = styled.div`
  cursor: grab;
`;

type Props = {
  width: number;
  barHeight: number;
  bgColor: string;
};

export const GanttBar = (props: Props) => {
  const { width, barHeight, bgColor } = props;
  const x = 0;
  const y = 0;
  const rx = 4;

  return (
    <DraggableBar>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width + 1}
        height={barHeight + 1}
        viewBox={`0 0 ${width + 1} ${barHeight + 1}`}
      >
        <rect
          x={x}
          y={y}
          rx={rx}
          width={width}
          height={barHeight}
          fill={bgColor}
        />
      </svg>
    </DraggableBar>
  );
};
