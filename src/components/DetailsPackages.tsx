import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
import { useEffect } from 'react';
//Commons
import Porcentaje from '@/common/Porcentaje';
import Photo from '@/common/Photo';
import See from '@/common/See';
//Redux
import { setPackages } from '@/store/allPackages';
import Packages_Services from '@/services/packages.services';
import { useDispatch, useSelector } from 'react-redux';
//Types
import { IndividualPackage } from '@/types/package.types';

interface Props {
  href: string;
  title: string;
}

const DetailsPackages: NextPage<Props> = ({ href, title }) => {
  const packages = useSelector((state: any) => state.packages);
  const dispatch = useDispatch();
  const navigate = useRouter();

  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await Packages_Services.getAllPackages();
        dispatch(setPackages(data));
      } catch (error) {
        console.error('Error geting packages : ', error);
      }
    };
    getPackages();
  }, [packages]);

  let deliveredCount = 0;

  packages.forEach((packages: IndividualPackage) => {
    if (packages.is_delivered) {
      deliveredCount += 1;
    }
  });

  return (
    <div className="mb-3">
      <div className="line"></div>
      <div className="flex row ml-3">
        {deliveredCount === packages.length ? (
          <Porcentaje percentage={100} />
        ) : (
          <Porcentaje percentage={Math.floor((deliveredCount / packages.length) * 100)} />
        )}

        <div className="my-auto ml-3">
          <h2 className="h2TaskMan">{title}</h2>
          <p>
            {deliveredCount}/{packages.length}{' '}
            {title == 'repartidores' ? 'activos' : 'repartidos'}
          </p>
        </div>
      </div>
      <div className="seeCont">
        <div className="flex ml-3">
          <Photo scale="mini" />
          <Photo scale="mini" />
          <div className={title == 'repartidores' ? '' : 'hidePhoto'}></div>
        </div>
        <div onClick={() => navigate.push(href)}>
          <See />
        </div>
      </div>
    </div>
  );
};

export default DetailsPackages;
