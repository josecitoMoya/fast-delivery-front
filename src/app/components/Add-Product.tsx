import "../styles/Empty-input.css";
import EmptyInput from "../common/Empty-input";
import Button from "../common/Button";

const AddProduct = () => {
  return (
    <div className="register">
      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Nombre De Quien Recibe"
      />
      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Dirección"
      />

      <EmptyInput
        color="blue"
        type="text"
        position="mt-20 mx-auto w-70"
        placeholder="Peso Del Paquete (KG)"
      />

      <Button
        href="/"
        bgc="bg-none text-blue"
        position="mx-auto mb-5 mt-2"
        text="Agregar"
      />
    </div>
  );
};

export default AddProduct;
