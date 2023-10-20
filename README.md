# Nerdflix Test App
Author: Ron Buchanan

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## Introduction

Nerdflix is a test project app created for the interviewing process at Nerds & Company. This project was created with Next.js v13, Tailwind CSS, and Flowbite React (a Tailwind CSS component library).

## Getting Started

1. Clone this project or download the ZIP file.

`git clone https://github.com/ronb1982/nerds-frontend-test.git`

2. Open the project in Visual Studio Code or another IDE.

3. Open a terminal or command line and run:

`cd frontend`

4. In the "frontend/" folder, run:

`npm i`

This will install all packages and dependencies.

5. Now run to start the dev server:

`npm run dev`

6. Navigate to https://localhost:3000 to view the site.

## Project Structure

Here's a list of all custom components and folders created specifically for this project:

### Folders
- app/
-- components/*: Contains all of the Next.js custom components used in the view
- utils/
-- constants.js: contains constants we may use globally
-- movies.js: my own custom movies JSON (I created my own JSON because I didn't see the JSON file in the email)
-- routes.js: incomplete file that would contain a list to all page routes in a real-world application
-- selectOptions.js: a list of select options (dropdown menu items)
- public/
-- img/*: contains all images