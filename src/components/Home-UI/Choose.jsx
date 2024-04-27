import { Link } from "react-router-dom";
import CollapsableTab from "../CollapsableTab";

const Choose = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold sm:text-4xl mb-10 text-[#575757]">
          إيش هي التغطية التأمينية اللي اختارها للسيارة؟
        </h2>

        <p className="mt-4 text-gray-600 font-medium text-center">
          فيه تغطيتين رئيسيتين يقدمها موقع تأميني تقدر تختار واحدة منهم لتأمين
          سيارتك.
        </p>

        <div className="hidden lg:flex gap-6 flex-col md:flex-row items-center">
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-6">
              <img
                src="/crash-tpl-coverage-icon.svg"
                alt="svg"
                className="w-44"
              />
              <h3 className="text-3xl font-bold sm:text-2xl mb-10 text-[#575757]">
                تأمين ضد الغير (التأمين الإلزامي)
              </h3>
            </div>

            <p className="text-gray-600 font-medium">
              التأمين ضد الغير للسيارات هو الحد الأدنى من مستوى التغطية
              التأمينية اللي تحتاجه للقيادة بشكل قانوني على طرق المملكة. يغطي
              تأمين ضد الغير فقط تكلفة تعويض الآخرين عن الإصابات أو الأضرار التي
              تسببتها في الحادث لا سمح الله ويحميك بإذن الله من المطالبات
              القانونية والتعويضات المالية المستحقة للطرف الثالث. هذي التغطية لا
              توفر لك أي مساعدة أو تعويض مالي في حال إصابتك في الحادث أو إصلاح
              سيارتك. للمزيد من التفاصيل عن{" "}
              <Link to="/third-party" className="text-altGreen">
                التأمين ضد الغير
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-6">
              <img src="/crash-icon.svg" alt="svg" className="w-44" />
              <h3 className="text-3xl font-bold sm:text-2xl mb-10 text-[#575757]">
                تأمين شامل
              </h3>
            </div>

            <p className="text-gray-600 font-medium">
              التأمين الشامل للسيارة يوفر حماية وتغطية كاملة ضد الأضرار التي
              لحقت بسيارتك بسبب حادث. كما أن أي تأمين شامل يشمل بشكل افتراضي
              التأمين ضد الغير. بالإضافة إلى ذلك توفر وثيقة التأمين الشامل تغطية
              لسيارتك ضد الأضرار الناجمة عن الحريق، السرقة (بدون إهمال)، الكوارث
              الطبيعية (الفيضانات، البرد، العواصف، وما إلى ذلك). للمزيد من
              التفاصيل عن{" "}
              <Link to="/third-party" className="text-altGreen">
                تأمين شامل
              </Link>
            </p>
            <p className="text-gray-600 font-medium">
              وبرضه فيه تغطيات تأمينية أخرى للسيارات نقدمها لك في تأميني وهي
              تغطيات تم تفصيلها وإضافة مزايا خاصة فيها لتتناسب مع احتياجاتك
              وميزانيتك.
            </p>
          </div>
        </div>

        <div className="lg:hidden space-y-5 mt-10">
          <CollapsableTab
            name="تأمين ضد الغير (التأمين الإلزامي)"
            icon={"/crash-tpl-coverage-icon.svg"}
            content={
              <p className="text-gray-600 font-medium">
                التأمين ضد الغير للسيارات هو الحد الأدنى من مستوى التغطية
                التأمينية اللي تحتاجه للقيادة بشكل قانوني على طرق المملكة. يغطي
                تأمين ضد الغير فقط تكلفة تعويض الآخرين عن الإصابات أو الأضرار
                التي تسببتها في الحادث لا سمح الله ويحميك بإذن الله من المطالبات
                القانونية والتعويضات المالية المستحقة للطرف الثالث. هذي التغطية
                لا توفر لك أي مساعدة أو تعويض مالي في حال إصابتك في الحادث أو
                إصلاح سيارتك. للمزيد من التفاصيل عن{" "}
                <Link to="/third-party" className="text-altGreen">
                  التأمين ضد الغير
                </Link>
              </p>
            }
          />
          <CollapsableTab
            name="تأمين شامل"
            icon={"/crash-icon.svg"}
            content={
              <>
                <p className="text-gray-600 font-medium">
                  التأمين الشامل للسيارة يوفر حماية وتغطية كاملة ضد الأضرار التي
                  لحقت بسيارتك بسبب حادث. كما أن أي تأمين شامل يشمل بشكل افتراضي
                  التأمين ضد الغير. بالإضافة إلى ذلك توفر وثيقة التأمين الشامل
                  تغطية لسيارتك ضد الأضرار الناجمة عن الحريق، السرقة (بدون
                  إهمال)، الكوارث الطبيعية (الفيضانات، البرد، العواصف، وما إلى
                  ذلك). للمزيد من التفاصيل عن{" "}
                  <Link to="/third-party" className="text-altGreen">
                    تأمين شامل
                  </Link>
                </p>
                <p className="text-gray-600 font-medium">
                  وبرضه فيه تغطيات تأمينية أخرى للسيارات نقدمها لك في تأميني وهي
                  تغطيات تم تفصيلها وإضافة مزايا خاصة فيها لتتناسب مع احتياجاتك
                  وميزانيتك.
                </p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Choose;
