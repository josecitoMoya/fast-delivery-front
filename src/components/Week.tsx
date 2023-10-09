'use client';
import React, { useState } from 'react';
import RightA from '@/assets/Ico/RightA';
import LeftA from '@/assets/Ico/LeftA';
import Day from '@/common/Day';
import '../styles/week.css';
import { getDaysOfWeek } from '@/utils/getDaysOfWeek';
import { NextPage } from 'next';

interface Props {
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
}

const Week: NextPage<Props> = ({ selectedDay, setSelectedDay }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = getDaysOfWeek(currentDate);

  const goToNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentDate(nextWeek);
  };

  const goToPreviousWeek = () => {
    const previousWeek = new Date(currentDate);
    previousWeek.setDate(previousWeek.getDate() - 7);
    setCurrentDate(previousWeek);
  };

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <>
      <div data-testid="Week" className="week">
        <div onClick={goToPreviousWeek}>
          <LeftA />
        </div>
        {daysOfWeek.map((day, index) => (
          <Day
            key={index}
            date={day.name}
            number={day.number.toString()}
            selected={selectedDay === day.number.toString()}
            onClick={() => handleDayClick(day.number.toString())}
          />
        ))}
        <div onClick={goToNextWeek}>
          <RightA />
        </div>
      </div>
    </>
  );
};

export default Week;
