/**
 * This file contains the descriptions for the defined skills. Each skill is 
 * written fully lowercase.
 */ 

import SkillPanelDataInterface from "../models/interfaces/SkillPanelDataInterface";

export const skillPanelData: SkillPanelDataInterface = {
  
  "javascript":   [
    `
      I started web programming by using JavaScript. Most of my early static web projects were written 
      in JavaScript. I still may use vanilla JS for creating simple websites that do not have a lot of 
      complexity. Now I prefer to use TypeScript whenever possible, especially for larger projects.
    `
  ],

  "typescript":   [
    `
      TypeScript is my go-to language in web development. This portfolio was written in TypeScript, 
      while using React. It being statically typed and helping ensure code is functional are some 
      of the reasons why I prefer it over JavaScript.
    `
  ],

  "react (ts & js)":        [
    `
      React is the most important library I use for front-end development. It has come very handy when
      I have built complex web applications like LangMaster. Building components effectively means I 
      can separate large things into blocks that I can then either combine or work on separately.
    `
  ],

  "html":         [
    `
      Obviously, I have a strong understanding of HTML. It works well when I want to create very basic
      web pages.
    `
  ],

  "css":          [
    `
      I use CSS for styling small websites. I have used it plenty, and thus I can get pages to look 
      mostly desirable with just what I have memorized. I still use vanilla CSS for small web projects,
      but, in practice, I prefer either SASS or Tailwind CSS.
    `
  ],

  "sass":         [
    `
      Since using SASS resembles using CSS a lot, using it is very simple for me. I prefer SASS for its 
      steps towards modularization.
    `
  ],

  "tailwind css":  [
    `
      I find Tailwind CSS beneficial for React workflow. Styling in classes provides quick results, 
      despite the feeling of bloat. I also use Tailwind due to it having enough flexibility for 
      custom classes. This is what I prefer for larger projects, especially when using React.
    `
  ],

  "java":         [
    `
      I used Java when learning about the OOP (Object-Oriented Programming) paradigm. These days I 
      primarily use it for back-end development. 
    `
  ],

  "express (ts & js)": [
    `
      I used Express to write back-end for my first web applications. While I appreciate it for 
      being quite easy to use and flexible, I have started to prefer the usage of either the 
      Spring Framework with Java or ASP .NET Core with C#.
    `
  ],

  "spring boot (java)": [
    `
      Spring Boot is what I am currently using for back-end development. I appreciate its 
      separation of concerns and how it is a strong ecosystem. I find Spring Boot better for 
      large projects than Express due to both the ease of configuring a database and how it 
      has been battle-tested for a much longer time.
    `
  ],

  "postgresql":   [
    `
      PostgreSQL is the main database management system I use. It goes well with back-end I
      have developed with Java Spring Boot. I also appreciate it for being free and open 
      source.
    `
  ],

  "python":       [
    `
      The very first programming language I have used. It was my main language for early projects.
      On top of that, I used it to finish my first project I have taken seriously: FollowTracker.
      I am confident with my skills with Python and have seen its value in things like web-scraping,
      basic application creation and general-purpose programming.
    `,
    `
      In terms of work, I have created both client and server scripts for a university course. The 
      students used the client script I had written in order to access the server in a Raspberry Pi.
      The intention was making Wireshark captures.
    `
  ]
}

