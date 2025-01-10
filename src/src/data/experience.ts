import ExperienceInterface from "../models/interfaces/ExperienceInterface";

export const experienceData: ExperienceInterface[] = [
  {
    title:        "Teaching Assistant",
    startDate:    new Date(2024, 8, 1),
    endDate:      new Date(2024, 9, 31),
    keySkills:    ["Python", "Knowledge in computer networking"],
    description:  [
    `
      I worked as a TA for the "Computer Networks and Internet" course. The course required me to have a good
      understanding of computer networking. I hosted on-campus practice sessions where I explained things like 
      how various layers work. I also helped prepare students for the exam by hosting an in-depth session 
      where I covered forwarding tables. I answered questions in course forums and made announcements to 
      remind students of how the flow of communication should be done.
    `,
    `
      I also wrote two Python scripts for a small client-server task. The server script is run in Raspberry Pi
      and the client script is run on a user's device. The scripts were tested and worked reliably, despite 
      being utilized in a course with over 200 students.
    `,
    `
      I also evaluated over a hundred submissions for the final assignment that had three exercises with 
      multiple tasks. All of the exercises required capturing traffic with Wireshark. One of them required 
      using the Python client script I wrote to communicate with the server I wrote. I handled all the
      submissions in a very short timeframe and kept a sharp eye for cases of plagiarism in order to maintain
      academic integrity.
    `,
    ],
    images:       []
  },
  {
    title:        "Teaching Assistant",
    startDate:    new Date(2024, 0, 1),
    endDate:      new Date(2024, 3, 30),
    keySkills:    ["Unity", "C#"],
    description:  [
      `
        I worked for four months as a teaching assistant at LUT University. The course I was responsible for
        assisting students in is Foundation of Game Programming with Unity (Peliohjelmoinnin Alkeet Unitylla). 
        I answered course forum questions and helped students pinpoint problems in their project. Proper 
        knowledge around the course material and the usage of C# were required.
      `,
    ],
    images:       []
  },
]
