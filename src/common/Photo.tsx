import { NextPage } from 'next';
import '../styles/photo.css';
interface Props {
  scale: string;
  photo: string;
}
const Photo: NextPage<Props> = ({ photo, scale }) => (
  <div
    data-testid="Photo"
    className={'photoCont ' + 'p' + scale}
    style={{ backgroundImage: `url(${photo})` , backgroundSize: 'cover', backgroundPosition: 'center'}}
  ></div>
);
export default Photo;
