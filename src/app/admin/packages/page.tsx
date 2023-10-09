import GreenScreen from '@/components/GreenScreen';
import Nav from '@/components/Nav';
import GetPackages from '@/content/GetPackages';
import '@/styles/minput.css';

const Packages = () => {
  return (
    <div>
      <Nav href="/admin/diary" lHref="/" />
      <GreenScreen
        href="/admin/diary"
        h2="Paquetes"
        content={<GetPackages />}
      />
    </div>
  );
};

export default Packages;
