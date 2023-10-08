import { useState } from 'react';
import '../styles/profileState.css';
import { useSelector } from 'react-redux';

const ProfileSwitch = () => {
  let deliverymanInfo = useSelector((state: any) => state.deliverymanInfo);
  const [on, setOn] = useState(deliverymanInfo?.active || false);

  const toggleActive = async () => {
    setOn(!on);
  };

  return (
    <div className="switchCont " onClick={toggleActive}>
      <div
        data-testid="switch"
        className={'on-off ' + (deliverymanInfo.active === true ? 'on' : 'off')}
      ></div>
    </div>
  );
};

export default ProfileSwitch;
