import { projectsData } from "../data/projects";

export const sortYears = () => {
  const yearsSet = new Set<number>;
  projectsData.forEach(projectEntry => {
    if(!yearsSet.has(projectEntry.year)) {
      yearsSet.add(projectEntry.year);
    }
    const yearsArray: number[] = Array.from(yearsSet);
    yearsArray.sort((a, b) => b - a);
  })
}
