import leaf from "@/assets/leaf.png";
import target from "@/assets/target.png";
import lock from "@/assets/lock.png";
import bell from "@/assets/bell.png";

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

export { navLinks, features ,pricingTiers};
