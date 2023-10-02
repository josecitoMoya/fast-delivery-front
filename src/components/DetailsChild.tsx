import Porcentaje from "@/common/Porcentaje";
import Photo from "@/common/Photo";
import See from "@/common/See";
import { NextPage } from "next";
import Link from "next/link";
interface props {
  href: string;
  title: string;
}
const DetailsChild: NextPage<props> = ({ href, title }) => (
  <div className="mb-3">
    <div className="line"></div>
    <div className="flex row ml-3">
      <Porcentaje percentage={20} />

      <div className="my-auto ml-3">
        <h2 className="h2TaskMan">{title}</h2>
        <p>2/10 {title == "repartidores" ? "activos" : "repartidos"}</p>
      </div>
    </div>
    <div className="seeCont">
      <div className="flex ml-3">
        <Photo scale="mini" />
        <Photo scale="mini" />
        <div className={title == "repartidores" ? "" : "hidePhoto"}></div>
      </div>
      <Link href={href}>
        <See />
      </Link>
    </div>
  </div>
);

export default DetailsChild;
