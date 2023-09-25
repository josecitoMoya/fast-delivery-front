import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import GetPackages from "@/content/GetPackages";
import { Providers } from "@/store/Provider";
import "@/styles/minput.css";

const Packages = () => {
  return (
    <Providers>
      <div>
        <Nav href="/admin/diary" lHref="/" />
        <GreenScreen
          href="/admin/diary"
          h2="Paquetes"
          content={<GetPackages />}
        />
      </div>
    </Providers>
  );
};

export default Packages;
