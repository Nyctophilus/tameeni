export default function Modal({ info, setShowModal }) {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[150] outline-none focus:outline-none">
      <div className="relative z-20 w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-2xl shadow-lg relative flex flex-col max-w-[90dvw] lg:w-[800px] bg-white outline-none focus:outline-none -translate-y-5 lg:-translate-y-24">
          {/*header*/}
          <div className="flex items-start justify-between p-5 rounded-t">
            <h3 className="text-2xl font-bold">
              معلومات مالك الوثيقة و المركبة
            </h3>
            <button
              className="p-1 bg-transparent border-0 text-gray-600 text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            {info.map((inf) => (
              <div key={inf.name} className="flex py-2 border-t">
                <h4 className="flex-1 font-bold">{inf.name}</h4>
                <p className="flex-1">{inf.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="opacity-60 fixed inset-0 z-10 bg-black"
        onClick={() => setShowModal(false)}
      ></div>
    </div>
  );
}
