import { useState } from "react";

const DropdownInput = ({
  filter,
  selected,
  setSelected,
  name,
  options,
}: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <input type="hidden" name={name} />
      <button
        className="inline-flex items-center gap-2 px-2 overflow-hidden rounded-md border shadow-lg bg-white hover:bg-gray-50 hover:text-gray-700"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Menu</span>
        {filter && (
          <img
            src={"/assets/images/short-by-price.svg"}
            alt="short-by-price down icon"
            className="size-4"
          />
        )}
        <p className="py-2 text-sm/none text-gray-600 font-bold w-max">
          {options[selected].name}
        </p>
        <img
          src={"/assets/images/chevon.svg"}
          alt="chevon down icon"
          className={`size-4 invert transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className="absolute z-10 mt-2 w-40 rounded-md border border-gray-100 bg-white shadow-lg overflow-hidden transition-[height_opacity] ease-in-out duration-500"
        role="menu"
        style={{ height: open ? "73px" : "0px", opacity: open ? "1" : "0" }}
      >
        {options.map((opt: any) => (
          <button
            key={opt.name}
            className="flex justify-center items-center gap-2 rounded-lg py-2 w-full text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 [&:not(:first-child)]:border-t"
            role="menuitem"
            onClick={() => {
              setSelected(options.indexOf(opt));
              setOpen(false);
            }}
          >
            {opt.name}

            <img src={opt.icon} alt={opt.name + " icon"} className="size-4" />
          </button>
        ))}
      </div>
    </div>
  );
};
export default DropdownInput;
