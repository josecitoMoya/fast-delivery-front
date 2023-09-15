import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import GetPackages from "@/content/GetPackages";
import "@/styles/minput.css";

export const Packages = () => {
  return (
    <div>
      <Nav href="/admin/diary" lHref="/" />
      <GreenScreen
        href="/admin/diary"
        h2="Paquetes"
        content={
          <GetPackages
            tasks={[
              { id: "#0A235", adress: "Castillo 1356", city: "CABA" },
              { id: "#0H167", adress: "AV.Carabobo y Rivadavia", city: "CABA" },
              { id: "#0H166", adress: "Mendoza 1810", city: "CABA" },
              { id: "#0B540", adress: "Scalabrini Ortiz 5073", city: "CABA" },
            ]}
          />
        }
      />
    </div>
  );
};

export default Packages;
