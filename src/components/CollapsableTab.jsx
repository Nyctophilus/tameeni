import { useEffect, useRef, useState } from "react";

const CollapsableTab = ({ name, icon, subs, foot, content }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ul = useRef(null);

  useEffect(() => {
    setHeight(open ? ul.current.scrollHeight : 0);
  }, [open]);

  return (
    <li
      className={
        content || foot
          ? `${content ? "bg-white border" : ""} list-none rounded-lg`
          : "border-b"
      }
      key={name}
    >
      <button
        type="button"
        className={`relative flex items-center rounded-lg text-sm font-medium ${
          foot
            ? "p-4 text-secondary"
            : content
            ? "p-6"
            : "p-4 bg-grad text-gray-700"
        } w-full`}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className="flex items-center gap-1">
          {icon && (
            <img
              className={`absolute top-1/2 -translate-y-1/2 ${
                content ? "h-16 w-16" : "h-8 w-8"
              }`}
              src={icon}
              alt={`${name} svg`}
            />
          )}
          <span
            className={`absolute top-1/2 -translate-y-1/2 ${
              foot || content
                ? "text-xl font-bold right-28"
                : "text-sm font-medium right-[55px]"
            } ${content ? "text-2xl" : ""}`}
          >
            {name}
          </span>
        </div>

        <span
          className={`shrink-0 transition duration-300 ms-auto ${
            open ? "-rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      <ul
        ref={ul}
        className="space-y-1 px-4 transition-[height] duration-1000 overflow-hidden"
        style={{ height }}
      >
        {subs &&
          subs.map((sub, i) => (
            <li
              key={sub.name}
              className={`${
                open ? "animate-sweep" : ""
              } opacity-0 transition-opacity duration-300`}
              style={{
                animationDelay: `${i * 0.1 + 0.3}s`,
              }}
            >
              <a
                href={sub.href}
                className={`pt-2 block rounded-lg px-4 py-2 ${
                  foot
                    ? "text-secondary"
                    : "text-sm font-medium text-gray-500 bg-grad hover:text-gray-700"
                }`}
              >
                {sub.name}
              </a>
            </li>
          ))}

        {content && (
          <span
            className={`block pb-4 transition-opacity duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {content}
          </span>
        )}
      </ul>
    </li>
  );
};
export default CollapsableTab;
