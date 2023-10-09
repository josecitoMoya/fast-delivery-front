'use client';
import Photo from '@/common/Photo';
import Week from '../components/Week';
import Details from '../components/Details';
import '../styles/taskmanager.css';
import { useState } from 'react';
const TaskManager = () => {
  const [selectedDay, setSelectedDay] = useState(
    new Date().getDate().toString()
  );

  return (
    <div>
      <div className="adminCont">
        <Photo scale="big" />
        <div className="ml-3">
          <h2 className="h2TaskMan">¡Hola Admin!</h2>
          <p>Estos son los pedidos del dia</p>
        </div>
      </div>
      <Week selectedDay={selectedDay} setSelectedDay={setSelectedDay} />{' '}
      <Details selectedDate={Number(selectedDay)} />
    </div>
  );
};
export default TaskManager;
