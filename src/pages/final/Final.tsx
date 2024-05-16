import Main from "@/components/Main";
import { useSignals } from "@preact/signals-react/runtime";
import { useEffect } from "react";
import { currentPage, lastMessage } from "../../context/signals";

function Final() {
  useSignals();
  useEffect(() => {
    currentPage.value = "Final";
  }, []);
  return (
    <Main>
      <div className="bg-gray-100 min-h-[calc(100vh-400px)] py-20 grid place-items-center">
        <div className="text-center">
          <p className="text-main text-2xl font-bold mx-auto animate-pulse mb-4">
            شكرا لتواصلك!
          </p>
          <p className="text-main text-2xl font-bold mx-auto animate-pulse mb-4">
            سيتم التواصل مع فى أقرب وقت ممكن.
          </p>

          {lastMessage.value && (
            <p className="text-main text-2xl mx-auto">{lastMessage.value}</p>
          )}
        </div>
      </div>
    </Main>
  );
}

export default Final;
