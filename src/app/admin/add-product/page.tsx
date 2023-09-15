import AddProductContent from "@/content/Add-ProductContent";
import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";

const AddProduct = () => (
  <>
    <Nav href="/admin/diary" lHref="/" />
    <GreenScreen
      href="/admin/packages"
      h2="Agregar Paquetes"
      content={<AddProductContent />}
    />
  </>
);
export default AddProduct;
