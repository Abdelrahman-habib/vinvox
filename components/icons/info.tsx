import { createIconFromJsxSvg } from "./util";

const SVG = (
  <>
    <path
      opacity="0.4"
      d="M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5L12.75 15.5C12.75 15.9142 12.4142 16.25 12 16.25C11.5858 16.25 11.25 15.9142 11.25 15.5L11.25 12.5C11.25 12.0858 11.5858 11.75 12 11.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9995 8.49951C10.9995 7.94723 11.4472 7.49951 11.9995 7.49951H12.0005C12.5528 7.49951 13.0005 7.94723 13.0005 8.49951C13.0005 9.0518 12.5528 9.49951 12.0005 9.49951H11.9995C11.4472 9.49951 10.9995 9.0518 10.9995 8.49951Z"
      fill="currentColor"
    />
  </>
);

export const InfoIcon = createIconFromJsxSvg(SVG, "info");
