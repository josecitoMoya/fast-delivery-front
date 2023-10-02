import { NextPage } from 'next';
import '../styles/state.css';

interface Props {
  state: string;
  bg: string;
}

const State: NextPage<Props> = ({ state, bg }) => {
  return (
    <>
      <p
        className={
          bg !== 'bg-purple'
            ? `pending text-center ${bg}`
            : ' bg-purple pending text-center'
        }
      >
        {state}
      </p>
    </>
  );
};

export default State;
