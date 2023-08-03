import { NextPage } from "next";
interface Color {
  color: string;
}
const User: NextPage<Color> = ({ color }) => (
  <svg
    className="my-auto ml-2"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M10 3.5C10 5.15761 8.65761 6.5 7 6.5C5.34239 6.5 4 5.15761 4 3.5C4 1.84239 5.34239 0.5 7 0.5C8.65761 0.5 10 1.84239 10 3.5ZM0.5 12.25C0.5 11.8518 0.695521 11.4659 1.10433 11.0886C1.51653 10.7082 2.11137 10.3711 2.80984 10.0913C4.20758 9.53139 5.89438 9.25 7 9.25C8.10562 9.25 9.79242 9.53139 11.1902 10.0913C11.8886 10.3711 12.4835 10.7082 12.8957 11.0886C13.3045 11.4659 13.5 11.8518 13.5 12.25V13.5H0.5V12.25Z"
      stroke={color}
    />
  </svg>
);

export default User;
