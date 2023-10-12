"use client";
import Photo from "@/common/Photo";
import Week from "../components/Week";
import Details from "../components/Details";
import "../styles/taskmanager.css";
import { useEffect, useState } from "react";
import { Payload } from "@/types/user.types";
const TaskManager = () => {
  const [selectedDay, setSelectedDay] = useState(
    new Date().getDate().toString()
  );
  const [payload, setPayload] = useState<Payload>({
    name: "",
    id: "",
    email: "",
    is_admin: true,
    is_deleted: false,
    profile_img: "",
  });

  useEffect(() => {
    try {
      const tokenCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="));
      const token = tokenCookie ? tokenCookie.split("=")[1] : null;
      if (token) {
        const tokenParts = token.split(".");
        const payload = JSON.parse(atob(tokenParts[1]));
        setPayload(payload.user);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);
  return (
    <div>
      <div className="adminCont">
        <Photo scale="big" photo={payload.profile_img} />
        <div className="ml-3">
          <h2 className="h2TaskMan">¡Hola {payload.name}!</h2>
          <p>Estos son los pedidos del dia</p>
        </div>
      </div>
      <Week selectedDay={selectedDay} setSelectedDay={setSelectedDay} />{" "}
      <Details selectedDate={Number(selectedDay)} />
    </div>
  );
};
export default TaskManager;
