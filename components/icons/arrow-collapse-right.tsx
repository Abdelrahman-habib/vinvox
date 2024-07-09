import { createIconFromJsxSvg } from "./util";

const SVG = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 3.25C21.4142 3.25 21.75 3.58579 21.75 4V20C21.75 20.4142 21.4142 20.75 21 20.75C20.5858 20.75 20.25 20.4142 20.25 20V4C20.25 3.58579 20.5858 3.25 21 3.25Z"
      fill="currentColor"
      transform="scale(-1, 1) translate(-23 0)"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.091 8.46967C14.3839 8.17678 14.8588 8.17678 15.1517 8.46967L17.091 10.409C17.9697 11.2877 17.9697 12.7123 17.091 13.591L15.1517 15.5303C14.8588 15.8232 14.3839 15.8232 14.091 15.5303C13.7981 15.2374 13.7981 14.7626 14.091 14.4697L16.0303 12.5303C16.3232 12.2374 16.3232 11.7626 16.0303 11.4697L14.091 9.53033C13.7981 9.23744 13.7981 8.76256 14.091 8.46967Z"
      fill="currentColor"
      transform="translate(2 0)"
    ></path>
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H17C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.4142 17.4142 12.75 17 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12Z"
      fill="currentColor"
      transform="translate(2 0)"
    ></path>
  </>
);

export const ArrowCollapseRightIcon = createIconFromJsxSvg(
  SVG,
  "arrow-collapse-right"
);
