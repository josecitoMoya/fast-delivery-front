import FoldingCont2 from "@/components/FoldingCont2";
import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
const fakedata2 = [
  {
    id: "#f0245",
    dir: "industria 2012, CABA",
    bg: "bg-green",
  },
  {
    id: "#f0145",
    dir: "industria 2219, CABA",
    bg: "bg-green",
  },
  {
    id: "#f0745",
    dir: "industria 2049, CABA",
    bg: "bg-green",
  },{
    id: "#f0745",
    dir: "industria 2049, CABA",
    bg: "bg-green",
  }
];
const Profile = () => (
  <div>
    <Nav />
    <GreenScreen h2="Paquetes" content={<FoldingCont2
      tasks={fakedata2}
      position="mt-2"
      text={"523 paquetes"}
      subText={"con el criterio de filtrado seleccionado"}
    />} />
    
    
  </div>
);
export default Profile;
