import { createIconFromJsxSvg } from "./util";

const SVG = (
  <>
    <path
      opacity="0.4"
      d="M1.59262 13.7874C5.5812 22.4592 17.9235 22.4868 22.2335 13.9702C22.8544 12.7433 22.8544 11.2569 22.2335 10.03C17.9235 1.51342 5.5812 1.54105 1.59262 10.2128C1.07085 11.3472 1.07085 12.653 1.59262 13.7874Z"
      fill="currentColor"
    ></path>
    <path
      d="M7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75C9.65279 7.75 7.75 9.65279 7.75 12Z"
      fill="currentColor"
    ></path>
  </>
);

export const EyeIcon = createIconFromJsxSvg(SVG, "eye");
