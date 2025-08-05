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

export { navLinks, features };
