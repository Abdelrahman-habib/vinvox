import { createIconFromJsxSvg } from "./util";
const SVG = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C9.37665 2.75 7.25 4.87665 7.25 7.5C7.25 10.1234 9.37665 12.25 12 12.25C14.6234 12.25 16.75 10.1234 16.75 7.5C16.75 4.87665 14.6234 2.75 12 2.75ZM5.75 7.5C5.75 4.04822 8.54822 1.25 12 1.25C15.4518 1.25 18.25 4.04822 18.25 7.5C18.25 10.9518 15.4518 13.75 12 13.75C8.54822 13.75 5.75 10.9518 5.75 7.5Z"
      fill="currentColor"
    ></path>
    <path
      opacity="0.4"
      d="M3.25 22.75L3.68745 20.9773C4.51754 17.6136 7.53529 15.25 11 15.25C12.815 15.25 14.5074 15.8987 15.8269 17H14C12.8954 17 12 17.8954 12 19C12 20.1046 12.8954 21 14 21H18.3181L18.75 22.75H3.25Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.25 19C13.25 18.5858 13.5858 18.25 14 18.25H20C20.4142 18.25 20.75 18.5858 20.75 19C20.75 19.4142 20.4142 19.75 20 19.75H14C13.5858 19.75 13.25 19.4142 13.25 19Z"
      fill="currentColor"
    ></path>
  </>
);

export const UserMinusIcon = createIconFromJsxSvg(SVG, "user-minus");
