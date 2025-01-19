import ImageInterface from "./ImageInterface";
import UrlInterface from "./UrlInterface";

export default interface ProjectEntryInterface {
  name:         string;
  images:       ImageInterface[];
  technologies: string[];
  status:       string;
  description:  string[];
  links:        UrlInterface[];
}
