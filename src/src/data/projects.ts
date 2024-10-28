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
    "status":       "In development",
    "description":  `
      FollowTracker is a tool that allows a user to document their GitHub followership.
      The scraped data, consisting only of public information, is written in a .xlsx 
      file. The program is capable of archiving data and comparing the two most recent
      entries.
    `
  }
] 
