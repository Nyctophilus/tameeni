import { useEffect, useState } from "react";

const PaymentTimer = ({ h }: any) => {
  const [time, setTime] = useState({
    hours: h || 1,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.seconds > 0) {
        setTime({
          hours: time.hours,
          minutes: time.minutes,
          seconds: time.seconds - 1,
        });
      } else if (time.minutes > 0) {
        setTime({
          hours: time.hours,
          minutes: time.minutes - 1,
          seconds: 59,
        });
      } else if (time.hours > 0) {
        setTime({
          hours: time.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="text-center">
      <p className="font-bold">سينقضي وقت التسعيرة خلال</p>
      <p className="text-sm font-semibold text-main">
        {time?.hours} ساعات {time?.minutes} دقيقة {time?.seconds} ثانية
      </p>
    </div>
  );
};
export default PaymentTimer;
