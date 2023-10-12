import { NextPage } from "next";
import Link from "next/link";
//Commons
import Porcentaje from "@/common/Porcentaje";
import Photo from "@/common/Photo";
import See from "@/common/See";
import { useSelector } from "react-redux";
import { useEffect } from "react";
//Service
import Admin_Service from "@/services/admin.services";
const adminService = Admin_Service.getInstance();
//Redux
import { useDispatch } from "react-redux";
import { setDeliverymans } from "@/store/allDeliverymans";
import { Deliveryman } from "@/types/deliveryman.types";

interface Props {
  href: string;
  title: string;
}
const DetailsDeliveryman: NextPage<Props> = ({ href, title }) => {
  const deliverymans = useSelector((state: any) => state.allDeliverymans);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDeliverymansData = async () => {
      const response = await adminService.getAllDeliverymans();
      dispatch(setDeliverymans(response?.data.message.deliverymans));
    };
    getDeliverymansData();
  }, []);
  let activeDeliverymans = 0;

  deliverymans.forEach((deliveryman: Deliveryman) => {
    if (deliveryman.status) {
      activeDeliverymans += 1;
    }
  });

  return (
    <div className="mb-3">
      <div className="line"></div>
      <div className="flex row ml-3">
        {activeDeliverymans === deliverymans.length ? (
          <Porcentaje percentage={100} />
        ) : (
          <Porcentaje
            percentage={Math.floor(
              (activeDeliverymans / deliverymans.length) * 100
            )}
          />
        )}
        <div className="my-auto ml-3">
          <h2 className="h2TaskMan">{title}</h2>
          <p>{`${activeDeliverymans}/${deliverymans.length} repartidores activos`}</p>
        </div>
      </div>
      <div className="seeCont">
        <div className="flex ml-3">
          <Photo scale="mini" />
          <Photo scale="mini" />
          <div className={"hidePhoto"}></div>
        </div>
        <Link href={href}>
          <See />
        </Link>
      </div>
    </div>
  );
};

export default DetailsDeliveryman;
