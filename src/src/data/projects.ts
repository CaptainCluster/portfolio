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
    "name":         "FollowTracker",
    "images":       [],
    "technologies": ["Python"],
    "status":       "Being Fixed",
    "year":         2023,
    "description":  [
      `
        FollowTracker is a tool that allows a user to document their GitHub followership.
        The scraped data, consisting only of public information, is written in a .xlsx 
        file. The program is capable of archiving data and comparing the two most recent
        entries.
      `
    ],
    "links":        ["https://github.com/captaincluster/FollowTracker"]      
  },
  {
    "name":         "Haalarilanit Website",
    "images":       [
      {
        "src":  "project_haalarilanit.png",
        "alt":  "Haalarilanit website image"
      },
    ],
    "technologies": ["JavaScript, HTML, CSS"],
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
    "links":        []
  },
] 
