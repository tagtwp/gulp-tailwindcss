gulp-tailwindcss <a href="https://github.com/tagtwp/gulp-tailwindcss/stargazers"><img src="https://img.shields.io/github/stars/tagtwp/gulp-tailwindcss" alt="Stars Badge"/></a>
=== 

Installation
---------------

### Requirements

`gulp-tailwindcss` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [Gulp.js](https://gulpjs.com/)

### Quick Start

To work with this build, clone the entire contents of the repository using:<br>

`git clone <this repo>`

After cloning, navigate to the main project folder and run the following command to install all necessary dependencies specified in the package.json file:<br>

```shell
npm install
```

Once the dependencies are installed, you can use any of the available build commands. The resulting files will be placed in the `dist` folder in the root directory:

 ```shell
  npm run dev
``` 
The base command that starts the build process for development.

 ```shell
  npm run build
``` 
Builds the project, optimizing and compressing all files for hosting.

 ```shell
  npm run clean
``` 
Run this command for clean folder dist and .temp .

 ```shell
  npm run deploy
``` 
Creates a temporary clone of the current repository, generates a gh-pages branch if it doesn't already exist, copies all files from the base path (or those matching patterns from the optional src configuration), commits all changes, and pushes to the origin remote.

### 📝 Folder and file structure
```
├── dist/                                     # This folder after build
├── src/                                      # Sources
│   ├── assets                                # Assets folder
│   │	├──css                                # Css folder
│   │	├──images                             # Images folder
│   │	├──js                                 # Scripts folder
│   │	├──fonts                              # Fonts folder
│   │	├──tcss                               # Tailwindcss folder
│   │	│   ├──custom                         # Custom style tailwindcss
│   │	│   ├──style.css                      # Main style file tailwindcss
│   ├── partials                              # Folder for storing html partials of the page
│   │	├── components                        # Folder for storing html components of the page
│   │	├── head.html                         # Head for include style, script, font and more
│   └── index.html                            # Main html file
└── gulpfile.babel.js                         # Gulp configuration file
└── package.json                              # file with build settings and installed packages
└── .editorconfig                             # file with code formatting settings
└── .ecrc                                     # editorconfig-checker package settings file (excludes unnecessary folders)
└── .prettierrc                               # Prettier settings file
└── README.md                                 # README build
```
