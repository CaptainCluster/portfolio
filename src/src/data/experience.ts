import ExperienceInterface from "../models/interfaces/ExperienceInterface";

export const experienceData: ExperienceInterface[] = [
  {
    title:        "Teaching Assistant",
    startDate:    new Date(2024, 0, 1),
    endDate:      new Date(2024, 3, 30),
    keySkills:    ["Unity", "C#"],
    description:  `
      I worked for four months as a teaching assistant at LUT University. The course I was responsible for
      assisting students in is Foundation of Game Programming with Unity (Peliohjelmoinnin Alkeet Unitylla). 
      I answered course forum questions and helped students pinpoint problems in their project. Proper 
      knowledge around the course material and the usage of C# were required.
    `
  },
  {
    title:        "Teaching Assistant",
    startDate:    new Date(2024, 8, 1),
    endDate:      new Date(2024, 9, 31),
    keySkills:    ["Python", "Knowledge in computer networking"],
    description:  ``
  }
]
