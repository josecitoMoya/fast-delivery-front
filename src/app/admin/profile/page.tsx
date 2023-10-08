'use client';
//Components
import FoldingCont from '@/components/FoldingCont';
import GreenScreen from '@/components/GreenScreen';
import Nav from '@/components/Nav';
//Content
import ProfileState from '@/content/ProfileState';
import { useSelector } from 'react-redux';
const fakedata2 = [
  {
    id: '#f0245',
    dir: 'industria 2012, CABA',
    state: 'TERMINADA',
    bg: 'bg-green',
  },
  {
    id: '#f0145',
    dir: 'industria 2219, CABA',
    state: 'TERMINADA',
    bg: 'bg-green',
  },
  {
    id: '#f0745',
    dir: 'industria 2049, CABA',
    state: 'TERMINADA',
    bg: 'bg-green',
  },
];

const Profile = () => {
  const deliverymanInfo = useSelector((state: any) => state.deliverymanInfo);
  console.log('vengo de page profile : ', deliverymanInfo);
  return (
    <div>
      <Nav href="/admin/diary" lHref="/" />
      <GreenScreen
        href="/admin/dealers"
        h2="Perfil del repartidor"
        content={<ProfileState />}
      />
      <FoldingCont text="Repartos pendientes" tasks={[]} position="mt-2" />
      <FoldingCont
        tasks={fakedata2}
        position="mt-2"
        text="Repartos terminados"
      />
    </div>
  );
};
export default Profile;
