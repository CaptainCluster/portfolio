import ImageInterface from "./ImageInterface";

export default interface ProjectsInterface {
  name:         string;
  images:       ImageInterface[];
  technologies: string[];
  status:       string;
  year:         number;
  description:  string[];
  links:        string[];
}
