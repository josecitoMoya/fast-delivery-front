import { NextPage } from "next";

interface Props {
  bg: string;
  check: string;
}

const Check: NextPage<Props> = ({ bg, check }) => (
  <svg
    className="my-auto"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <rect
      x="0.5"
      y="0.5"
      width="13"
      height="13"
      rx="4.5"
      fill={bg}
      stroke="#3D1DF3"
    />
    <path
      d="M3 7.6L5.28571 10L11 4"
      stroke={check}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Check;
