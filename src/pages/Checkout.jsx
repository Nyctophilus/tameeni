import Footer from "../components/Footer";
import Header from "../components/Header";
import MultiStepForm from "../components/MultiStepsForm";

const Checkout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70dvh] grid place-items-center">
        <div className="w-[90dvw] max-w-[1600px] mx-auto my-10 py-6 bg-white rounded-lg shadow-[0_10px_25px_10px_#8080806b]">
          <MultiStepForm />
        </div>
      </main>

      <Footer />
    </>
  );
};
export default Checkout;
