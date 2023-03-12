import { parse, format } from "date-fns";

type Props = {
  dateString: string;
  inputFormat?: string;
  outputFormat?: string;
};

export const GanttBarDateLabel = (props: Props) => {
  const { dateString, inputFormat, outputFormat } = props;
  const inFormat = inputFormat ? inputFormat : "yyyy-MM-dd";
  const outFormat = outputFormat ? outputFormat : "yyyy-MM-dd";
  const output = (() => {
    try {
      return format(parse(dateString, inFormat, new Date()), outFormat);
    } catch (err) {
      return dateString;
    }
  })();

  return <div>{output}</div>;
};
