import { createIconFromJsxSvg } from "./util";

const SVG = (
  <>
    <path
      opacity="0.4"
      d="M1.25 11.5C1.25 17.1609 5.83908 21.75 11.5 21.75C17.1609 21.75 21.75 17.1609 21.75 11.5C21.75 5.83908 17.1609 1.25 11.5 1.25C5.83908 1.25 1.25 5.83908 1.25 11.5Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.9697 17.9697C17.2626 17.6768 17.7374 17.6768 18.0303 17.9697L21.5303 21.4697C21.8232 21.7626 21.8232 22.2374 21.5303 22.5303C21.2374 22.8232 20.7626 22.8232 20.4697 22.5303L16.9697 19.0303C16.6768 18.7374 16.6768 18.2626 16.9697 17.9697Z"
      fill="currentColor"
    ></path>
  </>
);

export const SearchIcon = createIconFromJsxSvg(SVG, "search");
