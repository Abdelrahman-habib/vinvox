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
      d="M4.68745 20.9773L4.25 22.75H19.75L19.3124 20.977C18.4821 17.6134 15.4645 15.25 12 15.25C8.53529 15.25 5.51754 17.6136 4.68745 20.9773Z"
      fill="currentColor"
    ></path>
  </>
);

export const UserIcon = createIconFromJsxSvg(SVG, "user");
