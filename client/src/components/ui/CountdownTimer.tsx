import * as React from 'react';
import { Card } from '@/components/ui/card';

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Card key={unit} className="bg-white/10 backdrop-blur-sm border-white/20 p-4 min-w-[80px]">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-sm text-white/80 capitalize">{unit}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};