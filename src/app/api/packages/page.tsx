import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import GetPackages from "@/components/GetPackages";
import "@/styles/minput.css";

export const Packages = () => {
  return (
    <div>
      <Nav />
      <GreenScreen h2="Package Managment" content={<GetPackages />} />
    </div>
  );
};

export default Packages;
