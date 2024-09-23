import CustomInput from "@/components/CustomInput";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { UserStatusContext } from "@/context/userStatus";
import { userLogin } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState<any>({});
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserStatusContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    const res = await userLogin(data);

    console.log(res);

    // if (res?.data?.message === "تم التسجيل الدخول بنجاح") {
    setIsLoggedIn(true);
    navigate("/");
    // } else setError({ ...error, login: true });
  };

  return (
    <Main>
      <Header />
      <section className="min-h-screen grid place-items-center mx-auto max-w-lg">
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
          <h1 className="col-span-6 mb-8 font-bold text-xl lg:text-3xl text-main">
            قم بتسجيل الدخول لحسابك الآن
          </h1>
          <div className="col-span-6">
            <CustomInput
              error={error}
              setError={setError}
              label="رقم الهوية أو الإقامة"
              placeholder="رقم الهوية أو الإقامة أو الشركة..."
              id="id"
              type="tel"
              maxLength={10}
              tip={
                "يرجى إدخال بطاقة الهوية الخاصة بك للمواطنين أو بطاقة الإقامة للجنسيات الأخرى."
              }
            />
          </div>

          <div className="col-span-6">
            <CustomInput
              error={error}
              setError={setError}
              label="كلمة المرور"
              placeholder="أكتب كلمة مرور معقدة غير سهلة التخمين..."
              id="password"
              type="password"
              maxLength={15}
              tip={
                "كلمة المرور يجب أن تحتوى على حرف ورقم واحد على الأقل و أن لا تقل عن 8 ولا تزيد عن 15."
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex sm:items-center sm:gap-4">
              <button className="inline-block shrink-0 rounded-md border border-main bg-main px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-main focus:outline-none focus:ring active:text-main">
                تسجيل الدخول
              </button>
            </div>
            <p
              className={cn(
                "text-red-500 text-sm w-max h-4 opacity-0",
                error?.login ? "opacity-100" : "opacity-0"
              )}
            >
              حدث خطأ ما فى تسجيل الدخول. تأكد من كلمة المرور و رقم الهوية الخاص
              بك.
            </p>
          </div>
        </form>
      </section>
      <Footer />
    </Main>
  );
};
export default Login;
