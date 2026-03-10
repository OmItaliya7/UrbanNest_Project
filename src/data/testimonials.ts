import profile_img_1 from "../assets/images/testimonials/profile_img_1.webp";
import profile_img_2 from "../assets/images/testimonials/profile_img_2.webp";
import profile_img_3 from "../assets/images/testimonials/profile_img_3.webp";

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  rating: number;
  text: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Donald Jackman",
    title: "Home Buyer",
    image: profile_img_1,
    rating: 5,
    text: "UrbanNest helped me find my dream apartment. The team was professional and guided me throughout the entire process.",
  },
  {
    id: 2,
    name: "Richard Nelson",
    title: "Property Investor",
    image: profile_img_2,
    rating: 4,
    text: "Great experience working with UrbanNest. Their property listings are well curated and the buying process was smooth.",
  },
  {
    id: 3,
    name: "James Washington",
    title: "Business Owner",
    image: profile_img_3,
    rating: 5,
    text: "I invested in a commercial property through UrbanNest and the experience was excellent.",
  },
];
