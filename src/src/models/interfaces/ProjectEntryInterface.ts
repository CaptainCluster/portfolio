import ImageInterface from "./ImageInterface";

export default interface ProjectEntryInterface {
  name:         string;
  images:       ImageInterface[];
  technologies: string[];
  status:       string;
  description:  string[];
}
