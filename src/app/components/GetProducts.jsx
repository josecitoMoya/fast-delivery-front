import Product from "../common/Product";
import "../styles/greenScreen.css";

const GetProducts = () => {
  const fakeData = [
    { dir: "CABA, Amenaba 100", cuantity: "3" },
    { dir: "CABA, Amenaba 100", cuantity: "6" },
    { dir: "CABA, Amenaba 100", cuantity: "4" },
    { dir: "CABA, Amenaba 100", cuantity: "8" },
    { dir: "CABA, Amenaba 100", cuantity: "2" },
    { dir: "CABA, Amenaba 100", cuantity: "7" },
  ];
  return (
    <>
      <h3 className="text-center mt-3">¿Cuántos paquetes repartirás hoy?</h3>
      {fakeData.map((elem, id) => (
        <Product dir={elem.dir + id} cuantity={elem.cuantity} />
      ))}
    </>
  );
};
export default GetProducts;
