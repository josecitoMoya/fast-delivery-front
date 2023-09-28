import { NextPage } from "next";
import "../styles/photo.css";
interface Props {
  scale: string;
}
const Photo: NextPage<Props> = ({ scale }) => (
  <div data-testid="Photo" className={"photoCont " + "p" + scale}></div>
);
export default Photo;
