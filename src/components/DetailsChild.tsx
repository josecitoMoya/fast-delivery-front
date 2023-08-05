import Porcentaje from "@/assets/Ico/Porcentaje";
import Photo from "@/common/Photo";
import See from "@/common/See";

const DetailsChild = () => (
  <div className="mb-3">
    <div className="line"></div>
    <div className="flex row ml-3">
      <div className="porcentaje">
        <h2>20%</h2>
        <Porcentaje />
      </div>
      <div className="my-auto ml-3">
        <h2>Repartidores</h2>
        <p>2/10 activos</p>
      </div>
    </div>
    <div className="seeCont">
      <div className="flex ml-3">
        <Photo scale="mini" />
        <Photo scale="mini" />
      </div>
      <See />
    </div>
  </div>
);

export default DetailsChild;
