import Photo from "@/common/Photo";
import State from "@/common/State";
import "../styles/profileState.css";
import Switch from "@/common/Switch";
const ProfileState = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div className="photo">
        <Photo scale="small" />
      </div>
      <div>
        <h2>Farid</h2>
        <State state="ACTIVO" bg="bg-lightgreen" />
      </div>
    </div>
    <Switch />
  </div>
);
export default ProfileState;
