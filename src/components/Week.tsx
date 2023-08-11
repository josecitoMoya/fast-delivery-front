import RightA from "@/assets/Ico/RightA";
import LeftA from "@/assets/Ico/LeftA";
import Day from "@/common/Day";
import "../styles/week.css";

const Week = () => (
  <div className="week">
    <LeftA />
    <Day date="lun" number="01" selected="false" />
    <Day date="mar" number="02" selected="false" />
    <Day date="mie" number="03" selected="selected" />
    <Day date="jue" number="04" selected="false" />
    <Day date="vie" number="05" selected="false" />
    <RightA />
  </div>
);
export default Week;
