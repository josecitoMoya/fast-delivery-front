import Photo from "@/common/Photo";
import State from "@/common/State";
import "../styles/profileState.css";
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
    <div className="switchCont">
      <div className="on-of"></div>
    </div>
  </div>
);
export default ProfileState;
