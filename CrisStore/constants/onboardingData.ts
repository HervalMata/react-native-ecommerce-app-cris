export interface OnboardingItem {
  id: number;
  title: string;
  description: string;
  image: any;
}

export const onboardingData: OnboardingItem[] = [
  {
    id: 1,
    title: "Start Journey\nWith Nike",
    description: "Smart, Gorgeous & Fashionable Collection",
    image: require("../assets/images/onboarding/shoe1.png"),
  },

  {
    id: 2,
    title: "Follow Latest\nStyle Shoes",
    description: "There Are Many Beautiful And Attractive Shoes",
    image: require("../assets/images/onboarding/shoe2.png"),
  },

  {
    id: 3,
    title: "Summer Shoes\nNike 2022",
    description: "Amet Minim Lit Nodeseru Saku Nandu Sit Alique Dolor",
    image: require("../assets/images/onboarding/shoe3.png"),
  },
];