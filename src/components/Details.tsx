import Arrow from "@/assets/Ico/Arrow";
import DetailsChild from "./DetailsChild";
import "../styles/details.css";
const Details = () => (
  <div className="detailsCont">
    <div className="details">
      <h2>Detalles</h2>
      <div className="flex">
        <p>03/01/23</p>
        <div className="arrow">
          <Arrow />
        </div>
      </div>
    </div>
    <div>
      <DetailsChild />
      <DetailsChild />
    </div>
  </div>
);

export default Details;
