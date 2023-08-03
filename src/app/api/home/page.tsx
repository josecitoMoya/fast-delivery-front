import Button from "@/common/Button";
import FoldingCont from "@/components/FoldingCont";
import Nav from "@/components/Nav";
const fakedata = [
  {
    id: "#f0345",
    dir: "industria 2019, CABA",
    state: "EN CURSO",
    bg: "bg-yellow",
  },
];
const fakedata2 = [
  {
    id: "#f0245",
    dir: "industria 2012, CABA",
    state: "TERMINADA",
    bg: "bg-green",
  },
  {
    id: "#f0145",
    dir: "industria 2219, CABA",
    state: "TERMINADA",
    bg: "bg-green",
  },
  {
    id: "#f0745",
    dir: "industria 2049, CABA",
    state: "TERMINADA",
    bg: "bg-green",
  },
];
const Home = () => (
  <div>
    <Nav />
    <FoldingCont
      tasks={fakedata}
      position="mt-5"
      text={"Repartos pendientes"}
    />
    <FoldingCont
      tasks={fakedata2}
      position="mt-5"
      text={"Repartos terminados"}
    />
    <Button
      href="/api/get-products"
      bgc="bg-green text-blue"
      position="mx-auto mt-4 mb-4"
      text="Obtener paquetes"
    />
  </div>
);
export default Home;
