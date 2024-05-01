import Carousel from "../Carousel";

const Gallery = () => {
  const imgs = [
    "/companies/company-1.png",
    "/companies/company-2.webp",
    "/companies/company-3.png",
    "/companies/company-4.webp",
    "/companies/company-5.webp",
    "/companies/company-6.webp",
    "/companies/company-7.webp",
    "/companies/company-8.webp",
    "/companies/company-9.webp",
    "/companies/company-10.png",
    "/companies/company-11.webp",
    "/companies/company-12.png",
  ];

  return (
    <div className="border-y py-8">
      <div className="container mx-auto flex gap-2 max-lg:flex-wrap justify-center items-center max-md:flex-col max-md:mt-10">
        <h2 className="text-3xl max-lg:mb-2 font-bold sm:text-2xl text-[#575757] text-center md:text-right">
          أكثر من 20 شركة تأمين في مكان واحد
        </h2>

        <Carousel imgs={imgs} styles={"lg:w-[85%]"} />
      </div>
    </div>
  );
};
export default Gallery;
