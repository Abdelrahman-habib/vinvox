import { createIconFromJsxSvg } from "./util";

const SVG = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 22.75C8.58579 22.75 8.25 22.4142 8.25 22V21.5C8.25 18.3244 5.67564 15.75 2.5 15.75H2C1.58579 15.75 1.25 15.4142 1.25 15C1.25 14.5858 1.58579 14.25 2 14.25H2.5C6.50406 14.25 9.75 17.4959 9.75 21.5V22C9.75 22.4142 9.41421 22.75 9 22.75Z"
      fill="currentColor"
    ></path>
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 8.25C5.67564 8.25 8.25 5.67564 8.25 2.5V2C8.25 1.58579 8.58579 1.25 9 1.25C9.41421 1.25 9.75 1.58579 9.75 2V2.5C9.75 6.50406 6.50406 9.75 2.5 9.75H2C1.58579 9.75 1.25 9.41421 1.25 9C1.25 8.58579 1.58579 8.25 2 8.25H2.5Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.75 9C22.75 9.41421 22.4142 9.75 22 9.75H21.5C17.4959 9.75 14.25 6.50406 14.25 2.5V2C14.25 1.58579 14.5858 1.25 15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V2.5C15.75 5.67564 18.3244 8.25 21.5 8.25H22C22.4142 8.25 22.75 8.58579 22.75 9Z"
      fill="currentColor"
    ></path>
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 22.75C14.5858 22.75 14.25 22.4142 14.25 22V21.5C14.25 17.4959 17.4959 14.25 21.5 14.25H22.0005C22.4147 14.25 22.7505 14.5858 22.7505 15C22.7505 15.4142 22.4147 15.75 22.0005 15.75H21.5C18.3244 15.75 15.75 18.3244 15.75 21.5V22C15.75 22.4142 15.4142 22.75 15 22.75Z"
      fill="currentColor"
    ></path>
  </>
);

export const ExitFullScreenIcon = createIconFromJsxSvg(SVG, "exit-full-screen");
