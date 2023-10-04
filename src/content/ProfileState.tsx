import Photo from '@/common/Photo';
import State from '@/common/State';
import '../styles/profileState.css';
import Switch from '@/common/Switch';

interface Props {
  userName?: string;
  isActive?: boolean;
}

const ProfileState = ({ userName, isActive }: Props) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div className="photo">
        <Photo scale="small" />
      </div>
      <div>
        <h2>{userName}</h2>
        {isActive ? (
          <State state="ACTIVO" bg="bg-lightgreen" />
        ) : (
          <State state="INACTIVO" bg="bg-purple" />
        )}
      </div>
    </div>
    <Switch />
  </div>
);
export default ProfileState;
