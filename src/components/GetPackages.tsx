import "../styles/greenScreen.css";
import Task from "./Task";

const GetPackages = () => {
  const fakeData = [
    { id: "#0A235", adress: "Castillo 1356", city: "CABA" },
    { id: "#0H167", adress: "AV.Carabobo y Rivadavia", city: "CABA" },
    { id: "#0H166", adress: "Mendoza 1810", city: "CABA" },
    { id: "#0B540", adress: "Scalabrini Ortiz 5073", city: "CABA" },
  ];
  return (
    <>
      <div>
        <h1 className=" ml-4 text-left mt-3 font-bold">
          {fakeData.length} paquetes
        </h1>
        <h2 className=" ml-4 text-left">
          con el criterio de filtrado seleccionado
        </h2>
      </div>
      {fakeData.map((item, index) => (
        <div key={index} className="mb-2">
          <Task
            bg="none"
            id={item.id}
            dir={item.adress + " " + item.city}
            state={""}
          />
        </div>
      ))}
    </>
  );
};
export default GetPackages;
