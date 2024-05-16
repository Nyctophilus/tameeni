import Carousel from "../Carousel";

const Gallery = () => {
  const imgs = [
    "/assets/images/companies/company-1.png",
    "/assets/images/companies/company-2.webp",
    "/assets/images/companies/company-3.png",
    "/assets/images/companies/company-4.webp",
    "/assets/images/companies/company-5.webp",
    "/assets/images/companies/company-6.webp",
    "/assets/images/companies/company-7.webp",
    "/assets/images/companies/company-8.webp",
    "/assets/images/companies/company-9.webp",
    "/assets/images/companies/company-10.png",
    "/assets/images/companies/company-11.webp",
    "/assets/images/companies/company-12.png",
  ];

  return (
    <div className="border-y py-8">
      <div className="container mx-auto flex gap-4 flex-col lg:flex-row justify-center items-center max-md:flex-col max-md:mt-10">
        <h2 className="text-xl font-bold sm:text-2xl text-[#575757] text-center md:text-right">
          أكثر من 20 شركة تأمين في مكان واحد
        </h2>

        <Carousel imgs={imgs} styles={"lg:w-[85%]"} />
      </div>
    </div>
  );
};
export default Gallery;
