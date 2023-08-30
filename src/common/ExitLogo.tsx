"use client";
//dependencies
import Link from "next/link";
import Exit from "../assets/Ico/Exit";
import { NextPage } from "next";
//services
import User_Service from "@/services/user.services";
const userServices = new User_Service();

interface Props {
  position: string;
  href: string;
}

const Exitlogo: NextPage<Props> = ({ position, href }) => {
  const handleLogout = async () => {
    await userServices.logoutUser();
  };

  return (
    <div className={position + " shadow borderX"} onClick={handleLogout}>
      <Link href={href}>
        <Exit />
      </Link>
    </div>
  );
};

export default Exitlogo;
