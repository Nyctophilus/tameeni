import { Loader2Icon } from "lucide-react";

function Loader() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Loader2Icon className="w-10 h-10 animate-spin" />
      <p className="animate-pulse text-lg">جاري التحميل...</p>
    </div>
  );
}

export default Loader;
