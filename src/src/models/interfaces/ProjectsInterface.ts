import ImageInterface from "./ImageInterface";
import UrlInterface from "./UrlInterface";

export default interface ProjectsInterface {
  name:         string;
  images:       ImageInterface[];
  technologies: string[];
  status:       string;
  year:         number;
  description:  string[];
  links:        UrlInterface[];
}
