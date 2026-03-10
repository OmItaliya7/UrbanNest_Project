import project_img_1 from "../assets/images/projects/project_img_1.webp";
import project_img_2 from "../assets/images/projects/project_img_2.webp";
import project_img_3 from "../assets/images/projects/project_img_3.webp";
import project_img_4 from "../assets/images/projects/project_img_4.webp";
import project_img_5 from "../assets/images/projects/project_img_5.webp";
import project_img_6 from "../assets/images/projects/project_img_6.webp";

export interface Project {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    image: project_img_1,
  },
  {
    id: 2,
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_2,
  },
  {
    id: 3,
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_3,
  },
  {
    id: 4,
    title: "Central Square",
    price: "$2,50,000",
    location: "Los Angeles",
    image: project_img_4,
  },
  {
    id: 5,
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_5,
  },
  {
    id: 6,
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_6,
  },
];
