import { NextPage } from "next";

interface Props {
  selected: string;
  date: string;
  number: string;
}

const Day: NextPage<Props> = ({ selected, number, date }) => (
  <div className={"Day " + selected}>
    <h3>{date}</h3>
    <p>{number}</p>
  </div>
);
export default Day;
