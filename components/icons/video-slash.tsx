import { createIconFromJsxSvg } from "./util";

const SVG = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10.25C18.4142 10.25 18.75 10.5858 18.75 11V13C18.75 13.019 18.75 13.0382 18.75 13.0576C18.7502 14.2782 18.7506 16.1828 17.9149 17.7844C17.4786 18.6208 16.8157 19.3766 15.8283 19.916C14.8481 20.4515 13.592 20.75 12 20.75H9C8.58579 20.75 8.25 20.4142 8.25 20C8.25 19.5858 8.58579 19.25 9 19.25H12C13.408 19.25 14.4019 18.986 15.1092 18.5996C15.8093 18.2172 16.2714 17.6917 16.5851 17.0906C17.2362 15.8426 17.25 14.2824 17.25 13V11C17.25 10.5858 17.5858 10.25 18 10.25Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5303 2.46967C21.8232 2.76256 21.8232 3.23744 21.5303 3.53033L3.53033 21.5303C3.23744 21.8232 2.76256 21.8232 2.46967 21.5303C2.17678 21.2374 2.17678 20.7626 2.46967 20.4697L20.4697 2.46967C20.7626 2.17678 21.2374 2.17678 21.5303 2.46967Z"
      fill="currentColor"
    ></path>
    <path
      opacity="0.4"
      d="M1.83176 17.7119C1.25 16.5497 1.25 15.0331 1.25 12C1.25 8.96688 1.25 7.45032 1.83176 6.28811C2.36368 5.22546 3.22546 4.36368 4.28811 3.83176C5.45032 3.25 6.96688 3.25 10 3.25C13.0331 3.25 14.5497 3.25 15.7119 3.83176C16.6768 4.31474 17.476 5.06968 18.0131 6L4 20.0131C3.06968 19.476 2.31474 18.6768 1.83176 17.7119Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8.75C7.30964 8.75 6.75 9.30964 6.75 10C6.75 10.6904 7.30964 11.25 8 11.25C8.69036 11.25 9.25 10.6904 9.25 10C9.25 9.30964 8.69036 8.75 8 8.75ZM5.25 10C5.25 8.48122 6.48122 7.25 8 7.25C9.51878 7.25 10.75 8.48122 10.75 10C10.75 11.5188 9.51878 12.75 8 12.75C6.48122 12.75 5.25 11.5188 5.25 10Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 10.25C22.4142 10.25 22.75 10.5858 22.75 11V14C22.75 15.2813 22.0851 16.2032 21.1449 16.5658C20.2521 16.9102 19.1873 16.7108 18.4717 15.9615L17.4897 15.0496C17.1861 14.7678 17.1685 14.2933 17.4504 13.9897C17.7322 13.6862 18.2068 13.6686 18.5103 13.9504L19.5103 14.8789C19.5234 14.8911 19.5361 14.9037 19.5483 14.9168C19.8327 15.2215 20.2563 15.3009 20.6051 15.1663C20.9149 15.0468 21.25 14.7187 21.25 14V11C21.25 10.5858 21.5858 10.25 22 10.25Z"
      fill="currentColor"
    ></path>
  </>
);

export const VideoSlashIcon = createIconFromJsxSvg(SVG, "video-slash");
