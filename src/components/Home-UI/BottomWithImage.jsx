const BottomWithImage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative hidden lg:block overflow-hidden rounded-lg sm:h-96 lg:order-last lg:h-full">
            <img
              alt="application screenshot"
              src="/application-screenshot.png"
              className="absolute inset-0 h-full w-full object-contain object-center"
            />
          </div>

          <div className="lg:py-24 font-medium">
            <h2 className="text-3xl font-bold sm:text-4xl text-[#575757]">
              التأمين أسهل مع تطبيق تأميني
            </h2>

            <div className="flex gap-5 items-center">
              <img src="/mob-app/mobile-app-icon1.svg" alt="svg" />
              <p className="mt-4 text-gray-600">
                مقارنة وشراء فوري لتأمين السيارات
              </p>
            </div>

            <div className="flex gap-5 items-center">
              <img src="/mob-app/mobile-app-icon2.svg" alt="svg" />
              <p className="mt-4 text-gray-600">
                مكان واحد تجمع فيه كل سياراتك وتتابع التأمين الخاص فيها
              </p>
            </div>

            <div className="flex gap-5 items-center">
              <img src="/mob-app/mobile-app-icon3.svg" alt="svg" />
              <p className="mt-4 text-gray-600">
                ما نخليك تفوت الإشعارات المهمة واللي نرسلها لك على جوالك كوقت
                تجديد التأمين
              </p>
            </div>

            <div className="flex gap-5 items-center">
              <img src="/mob-app/mobile-app-icon4.svg" alt="svg" />
              <p className="mt-4 text-gray-600">
                متابعة لحظية لرفع وثيقة التأمين لنظام نجم/المرور
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <img src="/mob-app/mobile-app-icon5.svg" alt="svg" />
              <p className="mt-4 text-gray-600">
                استعراض وتحميل بطاقة التأمين في أي وقت
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BottomWithImage;
