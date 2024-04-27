import CarouselFull from "../CarouselFull";

const FeatureSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border-2 rounded-md flex flex-col items-center gap-4">
            <img
              src={"/feat/feature-offers.png"}
              alt={"offers"}
              className="w-14 h-14 max-w-full"
            />
            <span className="text-center">
              <p className="text-gray-600 font-bold">خصومات و عروض خاصة</p>
              <p className="text-gray-600">جهات حكومية و خاصة</p>
            </span>
          </div>
          <div className="p-4 border-2 rounded-md flex flex-col items-center gap-4">
            <img
              src={"/feat/feature-services.webp"}
              alt={"services"}
              className="w-14 h-14 max-w-full"
            />
            <span className="text-center">
              <p className="text-gray-600 font-bold">خدماتي</p>
              <p className="text-gray-600">
                طباعة وثيقة التأمين - الاستعلام عن حالة الربط بالمرور
              </p>
            </span>
          </div>

          <div className="p-4 border-2 rounded-md flex flex-col items-center gap-4">
            <div className="flex max-md:flex-col gap-2 w-full">
              <div className="flex flex-col justify-center text-xs bg-red-50 rounded-xl w-full py-2 md:py-6">
                <div className="flex gap-2 justify-center md:flex-col items-center">
                  <img
                    src="/google.webp"
                    className="w-5 h-5"
                    alt="google logo"
                  />
                  <p className="text-center">أعلى من 4.8/5</p>
                </div>
                <img
                  className="w-14 mx-auto max-w-full"
                  src="/star-group.webp"
                  alt="stars logo"
                />
              </div>
              <div className="flex flex-col justify-center text-xs bg-sky-50 rounded-xl w-full py-2 md:py-6">
                <div className="flex gap-2 justify-center md:flex-col items-center">
                  <img
                    src="/twitter-colored.webp"
                    className="w-5 h-5"
                    alt="google logo"
                  />
                  <p className="text-center">+177,000</p>
                </div>
                <p className="text-center">متابع</p>
              </div>
            </div>
            <p className="text-center text-sm px-2">
              الموقع الأعلى تقييماً بالمملكة لتأمين السيارات
            </p>
          </div>

          <div className="p-4 border-2 rounded-md flex flex-col items-center gap-4">
            <p className="text-center text-gray-600 font-bold">
              ادفع و اكسب نقاط
            </p>
            <img
              src={"/feat/feature-qitafPionts.webp"}
              alt={"qitafPionts"}
              className="h-16 max-w-full"
            />
            <p className="text-gray-600">تطبق الشروط و الأحكام </p>
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto flex mt-10 mb-4">
        <img
          src="/insurance-authority.svg"
          alt="insurance authority image"
          className="max-w-52"
        />
        <div className="p-1.5">
          <p className="text-xs">مصرح من قبل</p>
          <p className="font-semibold text-lg">هيئة التأمين</p>
        </div>
      </div>

      <CarouselFull />
    </section>
  );
};
export default FeatureSection;
