export default [
  {
    name: "تأمين السيارات",
    icon: "/car-icon.svg",
    collapse: true,
    subs: [
      { name: "تأمين ضد الغير", href: "/" },
      { name: "تأمين شامل", href: "/" },
      { name: "تأمين الأعطال الميكانيكية", href: "/" },
      { name: "معلومات المركبة من موجز", href: "/" },
      { name: "الباقة الذكية", href: "/" },
    ],
  },
  {
    name: "التأمين الطبي",
    href: "/health",
    icon: "/healthmenu-icon.svg",
    collapse: false,
  },
  {
    name: "خدماتي",
    icon: "/supportmenu-icon.svg",
    collapse: true,
    subs: [{ name: "استعلام عن حالة ربط الوثيقة بالمرور", href: "/" }],
  },

  {
    name: "برنامج قطاف (ادفع و اكسب)",
    href: "/",
    icon: "/qitafmenu-icon.svg",
    collapse: false,
  },

  {
    name: "الأسئلة الشائعة",
    href: "/",
    icon: "/faq-sidemenu.webp",
    collapse: false,
  },

  {
    name: "تواصل معنا",
    href: "/",
    icon: "/contactmenu-icon.svg",
    collapse: false,
  },
];
