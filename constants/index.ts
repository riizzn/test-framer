import leaf from "@/assets/leaf.png";
import target from "@/assets/target.png";
import lock from "@/assets/lock.png";
import bell from "@/assets/bell.png";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";


const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "customers",
    title: "Customers",
  },
  {
    id: "updates",
    title: "Updates",
  },
  {
    id: "help",
    title: "Help",
  },
];

const features = [
  {
    icon: leaf,
    title: "Integration ecosystem",
    description: "Track your progress and motivate your efforts everyday.",
    link: "Learn more",
    href: "#",
  },
  {
    icon: target,
    title: "Goal setting and tracking",
    description: "Set and track goals with manageable task breakdowns.",
    link: "Learn more",
    href: "#",
  },
  {
    icon: lock,
    title: "Secure data encryption",
    description: "Ensure your data’s safety with top-tier encryption.",
    link: "Learn more",
    href: "#",
  },
  {
    icon: bell,
    title: "Customizable notifications",
    description: "Get alerts on tasks and deadlines that matter most.",
    link: "Learn more",
    href: "#",
  },
];

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
      "Advanced support",
      "Export support",
      "Priority support",
    ],
  },
];

const testimonials = [
  {
    text: "I used to waste hours on social media. Now, with the app's distraction blocker and time blocks, my days are 10x more productive.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "This app literally saved my finals week. I blocked every distraction and focused completely using the time blocking system.",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "It feels like I finally have control over my time. I schedule deep work hours and actually stick to them. Game changer!",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganlee",
  },
  {
    text: "I run a remote team and we've all adopted it. Everyone’s focus has improved thanks to the app-blocking and task planner features.",
    imageSrc: avatar4,
    name: "Ava Thompson",
    username: "@ava.codes",
  },
  {
    text: "The time-blocking interface is so clean and motivating. I actually look forward to planning my day now.",
    imageSrc: avatar5,
    name: "Leo Martinez",
    username: "@leomartdesign",
  },
  {
    text: "I finally stopped multitasking and started working with intent. My screen time dropped, and my output doubled.",
    imageSrc: avatar6,
    name: "Isabella Nguyen",
    username: "@isabellanguyen",
  },
  {
    text: "The app helped me break my doomscrolling habit. Blocking distractions during work hours has been a life upgrade.",
    imageSrc: avatar7,
    name: "Daniel Kim",
    username: "@danielux",
  },
  {
    text: "I love the focus mode. When I activate it, all distractions disappear and I'm just locked in.",
    imageSrc: avatar8,
    name: "Sofia Patel",
    username: "@sofiapx",
  },
  {
    text: "From procrastinator to productivity machine—that's what this app did for me. It’s now the first thing I open every morning.",
    imageSrc: avatar9,
    name: "Ethan Ross",
    username: "@ethanbuilds",
  },
];
 

export { navLinks, features, pricingTiers, testimonials };
