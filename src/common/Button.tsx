import { NextPage } from 'next';
import Link from 'next/link';
import '../styles/button.css';

type ButtonType = 'button' | 'submit' | 'reset';

interface Props {
  bgc: string;
  text: string;
  position: string;
  href?: string;
  type: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: NextPage<Props> = ({
  position,
  bgc,
  text,
  href,
  type,
  onClick,
  disabled,
}) => {
  const handleClick = async () => {
    if (onClick && !disabled) {
      await onClick();
    }
  };

  return (
    <div className={position + ' btnCont flex ' + bgc}>
      {onClick ? (
        <button
          className="btn mx-auto "
          type={type}
          onClick={handleClick}
          disabled={disabled}
        >
          {href ? <Link href={href}>{text}</Link> : text}
        </button>
      ) : (
        <button className="btn mx-auto " type={type} disabled={disabled}>
          {href ? <Link href={href}>{text}</Link> : text}
        </button>
      )}
    </div>
  );
};

export default Button;
