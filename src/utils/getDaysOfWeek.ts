interface DayOfWeek {
  name: string;
  number: number;
  selected: 'true' | 'false';
}

export const getDaysOfWeek = (currentDate: Date): DayOfWeek[] => {
  const daysOfWeek = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];

  const todayIndex = currentDate.getDay();

  const todayDate = currentDate.getDate();

  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    //el 0 representa el primer dia del mes
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const days: DayOfWeek[] = [];

  for (let i = 0; i < 5; i++) {
    //si el dia que se intenta renderizas es mayor al ultimo dia del mes , se deja de renderizar dias
    if (todayDate + i > lastDayOfMonth) break;

    //dayIndex toma el valor del resto de la division
    const dayIndex = (todayIndex + i) % 7;

    const dayDate = todayDate + i;

    const day: DayOfWeek = {
      name: daysOfWeek[dayIndex],
      number: dayDate,
      selected: dayDate === todayDate ? 'true' : 'false',
    };
    days.push(day);
  }

  return days;
};
