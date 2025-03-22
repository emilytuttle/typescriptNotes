# Overview

I wrote software to read and write notes from a file. It is written to a txt file, using JSON format. The program is started, then the user is given options. They can write an entry, view all entries, delete an entry, or quit. When deleting entries, they can still see a list in case view entries was not the most recent command given.

I wrote this software to learn how to read and write from files with typescript. I wanted to create a notes app so that it was a manageable amount of information and simple to see and use.

{Provide a link to your YouTube demonstration. It should be a 4-5 minute demo of the software running and a walkthrough of the code. Focus should be on sharing what you learned about the language syntax.}

[Software Demo Video](https://youtu.be/xMDfNU2QPQE)

# Development Environment

I used VS Code as my development environment. I did all of my coding and editing there. It runs in the terminal, so that part was in VSCode as well.

{Describe the programming language that you used and any libraries.}
I used TypeScript. I wrote everything in TypeScript, then had it compiled into a JavaScript file. I did not edit the Javascript file at all. The only way it was changed was by running npx tsc index.ts in my terminal to update it to match my TypeScript file.

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [Node.Js Docs](https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs)
- [Digital Ocean](https://www.digitalocean.com/community/tutorials/typescript-new-project)
- [Stack Overflow](https://stackoverflow.com/questions/33858763/console-input-in-typescript)
- [Medium](https://muizidn.medium.com/quick-tutorial-how-to-write-file-using-typescript-e7cee0472a32)
- [Upmostly](https://upmostly.com/typescript/reading-and-writing-files-with-typescript)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- I would add an interface, so it runs with buttons instead of using the terminal.
- In the future, I will connect to a database instead so a txt file and JSON parsing will not be necessary
- I will add a way to switch users, or files if I continued in the terminal format.