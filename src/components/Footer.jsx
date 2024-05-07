import footerLinks, { socials } from "../data/footer-links";
import CollapsableTab from "./CollapsableTab";

const Footer = () => {
  return (
    <footer className="bg-[#575757] text-white relative max-md:pb-10">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-0 w-full flex flex-col md:flex-row gap-8 justify-between">
            <div className="md:hidden space-y-4">
              {footerLinks.map((link) => (
                <CollapsableTab
                  key={link.name}
                  name={link.name}
                  subs={link.subs}
                  foot
                />
              ))}
            </div>

            {footerLinks.map((link) => (
              <div key={link.name} className="hidden md:flex flex-col">
                <p className="font-medium">{link.name}</p>

                <ul className="mt-6 space-y-4 text-sm">
                  {link.subs.map((sub) => (
                    <li key={sub.name}>
                      <a
                        href={sub.href}
                        className="transition hover:opacity-75"
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <img
                className="mx-auto"
                src="/assets/images/footer-vision-logo.svg"
                alt="footer vision logo"
              />
            </div>

            <div>
              <ul className="flex gap-6 justify-center lg:justify-normal">
                {socials.map((social) => (
                  <li key={social.name}>
                    <button
                      // href={social.href}
                      rel="noreferrer"
                      target="_blank"
                      className="transition hover:opacity-75"
                      aria-disabled
                    >
                      <span className="sr-only">{social.name}</span>
                      <img
                        className="w-8 h-8"
                        src={social.icon}
                        alt={`${social.name} icon`}
                      />
                    </button>
                  </li>
                ))}
              </ul>

              {/* <div className="flex gap-2 justify-center mt-6">
                <img
                  className="w-32 max-w-[33%]"
                  src="/assets/images/Google-play.webp"
                  alt="google play logo"
                />
                <img
                  className="w-32 max-w-[33%]"
                  src="/assets/images/app-store.webp"
                  alt="app store logo"
                />
                <img
                  className="w-32 max-w-[33%]"
                  src="/assets/images/App-Gallery.webp"
                  alt="App Gallery logo"
                />
              </div> */}

              <div className="flex flex-col gap-4 mt-6 relative z-10 text-center lg:text-right">
                <p>© تأميني 2024. جميع الحقوق محفوظة</p>
                <p>شركة تأميني لوساطة التأمين الالكتروني شركة شخص واحد</p>
                <div className="flex gap-2 items-center justify-center lg:justify-normal">
                  <p>تطوير وتشغيل </p>
                  <img
                    src="/assets/images/RasanLogo.webp"
                    alt="Rasan logo"
                    className="h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute left-0 bottom-0 max-md:opacity-30"
        src="/assets/images/footer-rightside.webp"
        alt="footer illustration"
      />
    </footer>
  );
};
export default Footer;
