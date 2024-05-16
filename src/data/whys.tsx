import { Link } from "react-router-dom";

export const whys = [
  {
    name: "الأول في المملكة",
    icon: "/assets/images/whys/gicon-01.png",
    content: (
      <p className="text-gray-600 font-medium text-right">
        الأول في المملكة: بسبب خبرتنا كأول موقع في المملكة لمقارنة
        <Link to="/car"> تأمين السيارات </Link>و
        <Link to="/health" target="_blank" rel="noreferrer">
          {" "}
          التأمين الطبي{" "}
        </Link>{" "}
        قدرنا نوفر هالخدمة بشكل بسيط وسهل.
      </p>
    ),
  },
  {
    name: "مكان واحد للتأمين",
    icon: "/assets/images/whys/gicon-02.webp",
    content: (
      <p className="text-gray-600 font-medium text-right">
        تجديد التأمين مهمة صعبة وطويلة، لذلك احنا في تأميني جمعنا لك عروض شركات
        التأمين في مكان واحد وشلنا عنك هم إنك تدور على شركات التأمين عشان تحصل
        العرض المناسب لك.
      </p>
    ),
  },
  {
    name: "شفافية ووضوح",
    icon: "/assets/images/whys/gicon-03.webp",
    content: (
      <p className="text-gray-600 font-medium text-right">
        ما نحب مفردات التأمين المعقدة، ولا نحبها لعملائنا. لذلك دائماً نخلي
        تفاصيل وثيقة التأمين واضحة وسهل أي شخص يفهمها.
      </p>
    ),
  },
  {
    name: "فريق فني وقانوني",
    icon: "/assets/images/whys/gicon-04.webp",
    content: (
      <p className="text-gray-600 font-medium text-right">
        نظام إننا نبيع وننساك مو من قاموسنا. جهزنا لك فريق فني وقانوني متمرس
        ومتخصص لأي استفسار أو مشكلة صارت لك.
      </p>
    ),
  },
  {
    name: "اختيارات متنوعه",
    icon: "/assets/images/whys/gicon-05.webp",
    content: (
      <p className="text-gray-600 font-medium text-right">
        مع تأميني، صار شبه مستحيل ما تحصل اللي تبيه!
      </p>
    ),
  },
  {
    name: "أسعارنا موحدة",
    icon: "/assets/images/whys/gicon-06.webp",
    content: (
      <p className="text-gray-600 font-medium text-right">
        إذا أسعارنا ما كانت أقل من شركة التأمين، فهي راح تكون نفسها. بالضبط..
        هذا نظامنا.
      </p>
    ),
  },
];
