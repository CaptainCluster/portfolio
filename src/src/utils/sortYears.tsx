import { projectsData } from "../data/projects";

export const sortYears = () => {
  let yearsArray: number[] = [];
  const yearsSet = new Set<number>;
  projectsData.forEach(projectEntry => {
    if(!yearsSet.has(projectEntry.year)) {
      yearsSet.add(projectEntry.year);
    }
    yearsArray = Array.from(yearsSet);
    yearsArray.sort((a, b) => b - a);
  });
  return yearsArray;
}
