import AddProduct from "@/components/Add-Product";
import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";

const Diary = () => (
  <>
    <Nav href="/admin/diary" lHref="/" />
    <GreenScreen
      href="/admin/packages"
      h2="Agregar Paquetes"
      content={<AddProduct />}
    />
  </>
);
export default Diary;
