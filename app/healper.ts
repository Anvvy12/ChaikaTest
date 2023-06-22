export function getDayOfWeek(dateString: string): string {
  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date: Date = new Date(dateString);
  const dayOfWeekIndex: number = date.getUTCDay();
  return daysOfWeek[dayOfWeekIndex];
}

export const getMonth = (): string => {
  const currentDate: Date = new Date();
  const options: Intl.DateTimeFormatOptions = { month: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(currentDate);
};

export function generateBalance(): number {
  const min: number = 100;
  const max: number = 1500;
  const random: number = Math.random() * (max - min) + min;
  return parseFloat(random.toFixed(2));
}

export function calculateDailyPoints(): string {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();

  const seasonsStartDates: Date[] = [
    new Date(currentDate.getFullYear(), 2, 1), // Spring starts on March 1
    new Date(currentDate.getFullYear(), 5, 1), // Summer starts on June 1
    new Date(currentDate.getFullYear(), 8, 1), // Autumn starts on September 1
    new Date(currentDate.getFullYear(), 11, 1), // Winter starts on December 1
  ];

  const currentSeasonStartDate: Date | undefined = seasonsStartDates.find(
    (startDate) => currentDate >= startDate
  );
  if (!currentSeasonStartDate) return "0";

  const daysSinceSeasonStart: number = Math.floor(
    (currentDate.getTime() - currentSeasonStartDate.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  if (daysSinceSeasonStart === 0) {
    return "2";
  } else if (daysSinceSeasonStart === 1) {
    return "3";
  } else {
    let points = 0;
    let previousDayPoints = 2;
    let currentMultiplier = 1;

    for (let i = 2; i <= daysSinceSeasonStart; i++) {
      if (i === 3) {
        currentMultiplier = 1;
      } else {
        const previousDayMultiplier: number = currentMultiplier;
        currentMultiplier = i === daysSinceSeasonStart ? 1 : 0.6;
        const calculatedPoints: number = Math.round(
          previousDayPoints * previousDayMultiplier
        );
        points += calculatedPoints;
        previousDayPoints = calculatedPoints;
      }
    }

    if (points >= 1000) {
      return `${Math.floor(points / 1000)}K`;
    } else {
      return points.toString();
    }
  }
}
