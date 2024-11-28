import ProjectYearInterface from "../models/interfaces/ProjectYearInterface";
import { projectsData } from "../data/projects";

export const findProjectsForYears = (years: number[]) => {
  const projectYearPreliminary: ProjectYearInterface[] = [];
  years.forEach(year => {
    const projectYearEntry: ProjectYearInterface = {
      "year":     year,
      "projects": []
    }
    projectsData.forEach(projectEntry => {
      if (projectEntry.year === year) {
        projectYearEntry.projects.push(projectEntry);
      }
    });
    projectYearPreliminary.push(projectYearEntry);
  });
  return projectYearPreliminary;
}
