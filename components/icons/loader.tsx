import { createIconFromJsxSvg } from "./util";

const SVG = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V6C12.75 6.41421 12.4142 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6V2C11.25 1.58579 11.5858 1.25 12 1.25Z"
      fill="currentColor"
    ></path>
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.359 4.46967C19.6519 4.76256 19.6519 5.23744 19.359 5.53033L16.5306 8.35876C16.2377 8.65165 15.7628 8.65165 15.4699 8.35876C15.177 8.06586 15.177 7.59099 15.4699 7.2981L18.2983 4.46967C18.5912 4.17678 19.0661 4.17678 19.359 4.46967Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12Z"
      fill="currentColor"
    ></path>
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.359 15.4697C8.65189 15.7626 8.65189 16.2374 8.359 16.5303L5.53057 19.3588C5.23768 19.6517 4.76281 19.6517 4.46991 19.3588C4.17702 19.0659 4.17702 18.591 4.46991 18.2981L7.29834 15.4697C7.59123 15.1768 8.06611 15.1768 8.359 15.4697Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 12C17.25 11.5858 17.5858 11.25 18 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H18C17.5858 12.75 17.25 12.4142 17.25 12Z"
      fill="currentColor"
    ></path>
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4697 15.4697C15.7626 15.1768 16.2374 15.1768 16.5303 15.4697L19.3588 18.2981C19.6517 18.591 19.6517 19.0659 19.3588 19.3588C19.0659 19.6517 18.591 19.6517 18.2981 19.3588L15.4697 16.5303C15.1768 16.2374 15.1768 15.7626 15.4697 15.4697Z"
      fill="currentColor"
    ></path>
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L8.35876 7.2981C8.65165 7.59099 8.65165 8.06586 8.35876 8.35876C8.06586 8.65165 7.59099 8.65165 7.2981 8.35876L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 17.25C12.4142 17.25 12.75 17.5858 12.75 18V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V18C11.25 17.5858 11.5858 17.25 12 17.25Z"
      fill="currentColor"
    ></path>
  </>
);

export const LoaderIcon = createIconFromJsxSvg(SVG, "loader");
