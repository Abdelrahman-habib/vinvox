import { createIconFromJsxSvg } from "./util";

const SVG = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3.25C3.41421 3.25 3.75 3.58579 3.75 4V20C3.75 20.4142 3.41421 20.75 3 20.75C2.58579 20.75 2.25 20.4142 2.25 20V4C2.25 3.58579 2.58579 3.25 3 3.25Z"
      fill="currentColor"
      transform="scale(-1, 1) translate(-22 0)"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.90901 8.46967C10.2019 8.76256 10.2019 9.23744 9.90901 9.53033L7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L9.90901 14.4697C10.2019 14.7626 10.2019 15.2374 9.90901 15.5303C9.61612 15.8232 9.14124 15.8232 8.84835 15.5303L6.90901 13.591C6.03033 12.7123 6.03033 11.2877 6.90901 10.409L8.84835 8.46967C9.14124 8.17678 9.61612 8.17678 9.90901 8.46967Z"
      fill="currentColor"
      transform="translate(-5 0)"
    ></path>
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 12C6.25 11.5858 6.58579 11.25 7 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12Z"
      fill="currentColor"
      transform="translate(-5 0)"
    ></path>
  </>
);

export const ArrowCollapseLeftIcon = createIconFromJsxSvg(
  SVG,
  "arrow-collapse-left"
);
