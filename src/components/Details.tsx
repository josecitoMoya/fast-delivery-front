'use client';
import Arrow from '@/assets/Ico/Arrow';
import '../styles/details.css';
import { useState } from 'react';
import { NextPage } from 'next';
import DetailsDeliveryman from './DetailsDeliveryman';
import DetailsPackages from './DetailsPackages';

interface Props {
  selectedDate: number;
}

const Details: NextPage<Props> = ({ selectedDate }) => {
  const formattedDate = new Date(
    `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
      selectedDate + 1
    }`
  ).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  const [display, setDisplay] = useState('');

  return (
    <div data-testid="Details" className="detailsCont">
      <div className="details">
        <h2 className="h2TaskMan">Detalles</h2>
        <div className="flex">
          <p>{formattedDate}</p>
          <div
            className="arrow"
            onClick={() => {
              display === '' ? setDisplay('d-none') : setDisplay('');
            }}
          >
            <Arrow />
          </div>
        </div>
      </div>
      <div data-testid="testCont" className={display}>
        <DetailsDeliveryman title="repartidores" href="/admin/dealers" />
        <DetailsPackages title="paquetes" href="/admin/packages" />
      </div>
    </div>
  );
};

export default Details;
