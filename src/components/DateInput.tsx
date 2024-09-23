import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { PopoverClose } from "@radix-ui/react-popover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "./ui/calendar";
import { arEG } from "date-fns/locale";

export default function DateInput({ id, placeholder, required }: any) {
  const initDate = new Date();
  const [date, setDate] = useState<DateRange | any>(initDate);

  const handleDateChange = (newDate: any) => {
    if (newDate) {
      setDate(newDate);
    }
  };

  return (
    <div className="relative">
      <img
        src="/assets/images/calender.svg"
        alt="calender icon"
        className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2"
      />

      <Popover>
        <PopoverTrigger className="w-full focus-within:outline-main/30">
          <Input
            label={placeholder}
            onChange={() => null}
            value={
              date
                ? format(date, "dd-MM-yyyy", {
                    locale: arEG,
                  })
                : ""
            }
            id={id}
            name={id}
            placeholder={placeholder}
            required={required}
            crossOrigin={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </PopoverTrigger>

        <PopoverContent
          align={window.innerWidth < 768 ? "center" : "start"}
          className="flex w-auto flex-col space-y-2 p-2"
        >
          <div className="rounded-md border">
            <Calendar
              mode="single"
              initialFocus
              defaultMonth={date}
              selected={date}
              onSelect={handleDateChange}
              numberOfMonths={1}
              dir="ltr"
              className="max-w-72 sm:max-w-none"
              locale={arEG}
            />
          </div>
          <PopoverClose>
            <p className="w-full border rounded-md py-1 bg-main text-white hover:text-white/85">
              تأكيد
            </p>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}
