import { useState } from "react";
import AphlaPetsSelects from "./AphlaPetsSelects";

const CarPanelSelection = ({ error }: any) => {
  const [num, setNum] = useState({
    en: ["-", "-", "-", "-"],
    ar: ["-", "-", "-", "-"],
  });
  const [word_1, setWord1] = useState("-");
  const [word_2, setWord2] = useState("-");
  const [word_3, setWord3] = useState("-");

  const handleNumChange = (e: any) => {
    setNum({
      ar: Number(e.target.value)
        .toLocaleString("ar-EG")
        .split("")
        .filter((n) => n !== "٬"),
      en: e.target.value.split(""),
    });
  };

  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      <AphlaPetsSelects
        setWord1={setWord1}
        word1={word_1}
        setWord2={setWord2}
        word2={word_2}
        setWord3={setWord3}
        word3={word_3}
      />
      <input
        className="w-40 rounded-md py-3 px-2 border border-gray-300 bg-transparent"
        onChange={handleNumChange}
        type={"tel"}
        placeholder="رقم المركبة"
        maxLength={4}
        style={{ direction: "rtl" }}
        name="plate_num"
      />

      <div className="lg:ms-auto" id="plate_display_wrapper" data-once="js_mod">
        <div data-drupal-selector="edit-plate-display"></div>
        <div className="plate-chars-wrapper">
          <div id="plate-chars">
            <table>
              <tbody>
                <tr>
                  <td id={`plate_1`}>
                    <span>{word_1.split("-")[1] || "-"}</span>
                  </td>
                  <td id={`plate_2`}>
                    <span>{word_2.split("-")[1] || "-"}</span>
                  </td>
                  <td id={`plate_3`}>
                    <span>{word_3.split("-")[1] || "-"}</span>
                  </td>

                  <td id="plate_4">
                    <span>{num.ar[0] ?? "-"}</span>
                    <span>{num.ar[1] ?? "-"}</span>
                    <span>{num.ar[2] ?? "-"}</span>
                    <span>{num.ar[3] ?? "-"}</span>
                  </td>
                </tr>
                <tr>
                  <td id={`en_plate_1`}>
                    <span>{word_1.split("-")[0] || "-"}</span>
                  </td>
                  <td id={`en_plate_2`}>
                    <span>{word_2.split("-")[0] || "-"}</span>
                  </td>
                  <td id={`en_plate_3`}>
                    <span>{word_3.split("-")[0] || "-"}</span>
                  </td>

                  <td id="en_plate_4">
                    <span>{num.en[3] ?? "-"}</span>
                    <span>{num.en[2] ?? "-"}</span>
                    <span>{num.en[1] ?? "-"}</span>
                    <span>{num.en[0] ?? "-"}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {error?.plate && (
        <p className=" basis-full text-center text-red-500 text-sm h-4">
          {error.plate}
        </p>
      )}
    </div>
  );
};
export default CarPanelSelection;
