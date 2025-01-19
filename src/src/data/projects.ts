/**
 * Data for the Projects page of the portfolio
 * Contains the following:
 *  1) Project name
 *  2) Project description
 *  3) Images (rendered via array of img paths)
 *  4) Technologies used (Java, React, SQLite, for instance)
 *
 *  The ProjectStatus enum will be used to detect if a project 
 *  has an invalid status.
 */

import ProjectsInterface from "../models/interfaces/ProjectsInterface";

export const projectsData: ProjectsInterface[] = [
  {
    "name":           "LangMaster",
    "images":         [],
    "technologies":   ["TypeScript", "React", "Java", "Spring", "PostgreSQL", "TailwindCSS", "pnpm"],
    "status":         "Under development",
    "year":           2025,
    "description":    [
      `
        LangMaster is a full-stack language learning application. It can be used to create 
        exercises in order to study any language of choice. It utilizes a React TS front-end,
        with styling work done using TailwindCSS, to provide a way for the user to interact
        with the application. The back-end uses Java, the Spring framework and Postgres to 
        manage core application logic, store data and provide necessities for the client-side.
      `,
      `
        The project is in development. In the future, it will give users the ability to 
        download their exercises in a specific file format that the application supports.
        This would allow the distribution of exercises, and thus sharing would become 
        a significant part of learning.
      `,
      `
        LangMaster is free software and licensed under GNU General Public License V3.
      `
    ],
    "links":          [
      {
        "url":      "https://github.com/CaptainCluster/LangMaster",
        "shortUrl": "LangMaster repo",
        "alt":      "Link to LangMaster repo"
      }
    ]     
  },
  {
    "name":           "Bachelor's Thesis Technical Work",
    "images":         [],
    "technologies":   ["Rust"],
    "status":         "Finished",
    "year":           2024,
    "description":    [
      `
        As part of my bachelor's thesis work, I made Rust programming exercises that 
        provide at least five weeks of education for students. The topics covered are
        the following: basics of programming with Rust, Rust ownership, how Rust 
        handled OOP, systems programming and back-end development with the Rocket 
        framework.
      `,
      `
        For every single exercise I made, I also implemented automated evalutions with
        CodeGrade. The basic exercises were checked by comparing submission output to 
        the desired one. On the other hand, more complex evaluations required test 
        files written in Rust. On top of that, I had to use shell scripts to set up 
        the test environment, and to optimize it.
      `,
      `
        Note! Due to the intended usage of the work, the source code is proprietary.
      `
    ],
    "links":          [
      {
        "url":      "https://lutpub.lut.fi/handle/10024/168689",
        "shortUrl": "Link to thesis",
        "alt":      "Link to thesis"
      }
    ]
  },
  {
    "name":         "Haalarilanit Website",
    "images":       [
      {
        "src":  "project_haalarilanit.png",
        "alt":  "Haalarilanit website image"
      },
    ],
    "technologies": ["JavaScript", "HTML", "CSS"],
    "status":       "Finished",
    "year":         2024,
    "description":  [
      `
        Haalarilanit website provides information for people who want to participate 
        in the Haalarilanit event. The event is one of the largest, if not the largest, 
        LAN party event hosted by Ruut Ry. Building it into something the association,
        and other Haalarilanit organizers, are happy with required both good
        communication and meeting deadlines. I also provided constant updates to the 
        site, even after the event was revealed, based on the wishes of the organizers.
      `
    ],
    "links":          [
      {
        "url":      "https://haalarilanit.ruut.me",
        "shortUrl": "Haalarilanit website",
        "alt":      "Link to Haalarilanit website"
      }
    ]
  },
  {
    "name":         "FollowTracker",
    "images":       [],
    "technologies": ["Python"],
    "status":       "Finished",
    "year":         2023,
    "description":  [
      `
        FollowTracker is a tool that allows a user to document their GitHub followership.
        The scraped data, consisting only of public information, is written in a .xlsx 
        file. The program is capable of archiving data and comparing the two most recent
        entries.
      `,
      `
        While the project was heavily worked on during 2023, it got some necessary fixes 
        in 2024. Critical errors that made it unusable for some were fixed and the way 
        the data is acquired was perfected.
      `
    ],
    "links":          [
      {
        "url":      "https://github.com/captaincluster/FollowTracker",
        "shortUrl": "FollowTracker repo",
        "alt":      "Link to FollowTracker repo"
      }
    ]
  },
] 
