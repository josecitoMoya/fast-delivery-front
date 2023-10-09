import { NextPage } from 'next';

interface Props {
  selected?: boolean;
  date: string;
  number: string;
  onClick?: () => void;
}

const Day: NextPage<Props> = ({ selected, number, date, onClick }) => (
  <div className={`Day ${selected ? 'selected' : ''}`} onClick={onClick}>
    <h3>{date}</h3>
    <p>{number}</p>
  </div>
);

export default Day;
