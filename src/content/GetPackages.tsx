'use client';
import '../styles/greenScreen.css';
import { useEffect } from 'react';
import Link from 'next/link';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setPackages } from '@/store/allPackages';
//Types
import { PackagesTypes } from '@/types/package.types';
//Services
import Packages_Services from '@/services/packages.services';
//Components
import Task from '../components/Task';
//Icons
import AddPack from '@/assets/Ico/AddPack';
import { useRouter } from 'next/navigation';

const GetPackages = () => {
  const dispatch = useDispatch();
  const packages = useSelector((state: any) => state.packages);
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

  return (
    <>
      <div>
        <h2 className=" mx-2 text-left text-sm mt-3 font-bold">
          {packages.length} paquetes
        </h2>
        <p className=" mx-2 text-left text-xs">
          con el criterio de filtrado seleccionado
        </p>
      </div>
      <div className='productScroll'>
      {packages.map((item: PackagesTypes, index: number) => {
        return (
          <div data-testid="task" key={index} className="mb-2 mx-3">
            <Task
              bg="none"
              id={item._id}
              dir={item.destination + ' '}
              state={''}
            />
          </div>
        );
      })}
      </div>
      <div className="addCont">
        <div
          onClick={() => navigate.push('/admin/add-product')}
          className="btnPack cursor-pointer"
        >
          <AddPack />
        </div>
      </div>
    </>
  );
};
export default GetPackages;
