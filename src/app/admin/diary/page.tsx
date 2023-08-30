import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import TaskManager from "@/components/TaskManager";

const Diary = () => (
  <>
    <Nav href="/admin/diary" lHref="/" />
    <GreenScreen href="/" h2="Gestionar pedidos" content={<TaskManager />} />
  </>
);
export default Diary;
