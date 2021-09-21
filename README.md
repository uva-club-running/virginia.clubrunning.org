# Virginia Club Running's Website
Club Running is an athletic CIO at the University of Virginia. This repository contains the source code to our website, [virginia.clubrunning.org](http://virginia.clubrunning.org/).

## Project structure

```
.
├── dist - site build output directory
├── src - contains files which are compiled/preprocessed at build time.
│   └── styles
└── virginia.clubrunning.org - contains files which are copied to ./dist/ unaltered at build time.
    └── static
        ├── images - images used on the site
        └── scripts - JavaScript files used on the site
    └── index.html, meets.html, ... - the actual pages of the website.
```

The `src/` subdirectory contains files that are compiled or preprocessed during the build process. For the time being, this only includes SCSS files and their vanilla CSS dependencies. So, for instance, the file `./src/styles/base.scss` will be compiled and accessible at the path `/static/styles/base.css`.

The `virginia.clubrunning.org` contains static files which are copied to `./dist/` unaltered at build time. This means that an image file located at `./virginia.clubrunning.org/static/images/team.jpeg` will be accessible on the final site at the path`/static/images/team.jpeg`.

## Prerequisites
In order to build the site, you'll need:

- [NodeJS](https://nodejs.org/en/)
- The [Yarn](https://yarnpkg.com/) package manager

## Development quickstart

To quickly get up and running with development:

1. Clone this repository somewhere convenient.
2. Navigate to the project root and install project dependencies:
```bash
yarn install
```
3. Start the development server:
```
yarn run serve
```
4. Open `http://localhost:8080` in your web browser. As you make changes, the site rebuilds automatically.

## Tracking to-dos
Bugfixes, updates, and features are registered using the codebase's issues page.

## Building
You can build the website by running the following command:
```
yarn run build
```

The built files are placed underneath `./dist/`.

## Contributing
The following steps outline the workflow I use for implementing a new feature or making changes to the website.

In general, I use the [Git feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) workflow to manage features and bugfixes.

1. Create a new branch to do your work off of the `main` branch.
    - `git pull`
    - `git checkout main`
    - `git checkout -B my_feature`
2. Make changes on the new feature branch.
4. Push your changes using `git push -u origin my_feature`.
5. Make a pull request to merge your new changes into the `main` branch.
6. Approve the pull request.
7. After the pull request is approved, GitHub Actions will deploy your changes to the live website. See [Deployment](#deployment).

Future webmaster note: This process can be really tedious for tiny, atomic edits (such as spelling corrections, date changes, etc.) In that case, it's acceptable to commit directly to `main`.

## Deployment
This repository is configured using GitHub Actions to automatically rebuild and deploy the website whenever you push to the `main` branch. Every time you make changes on `main` or merge a pull request, the pipeline will be triggered. Watch the Actions page to make sure deployment succeeds.

## Technical lore
I (Joe Kerrigan) inherited this website in 2019, without a whole ton of information beyond a Word document containing the FTP server login. A major goal of mine is to improve the maintainability of this project for future webmasters.

I was lucky in that the previous webmaster Andrew had just finished a major rewrite of the website. It was prettier, cleaner, and much more maintainable. But all of the code was still contained on the FTP server with our website. And it cohabitated with old website code, which I can only assume was kept around for posterity. Navigating the FTP server was kind of a mess.

My first big initiative was moving the project to source control. This was easy enough: download the code from the FTP server, run `git init`, and create a remote on GitHub. Another big advantage of using source control is that I can refactor or remove code without erasing history: the website's history is tracked by git.

This has another big advantage. Tasks in the codebase can now be managed using GitHub. To-do lists become GitHub issues, and I can wrap my changes up in pull requests to leave a paper trail whenever I make major changes.

Using GitHub also allows for really seamless integration with popular CI/CD pipelines. I use GitHub Actions, including the wonderful [FTP Deploy](https://github.com/marketplace/actions/ftp-deploy) action to automate deployments to the website FTP server. This makes deployments a lot less painful (simply push to `prod` instead of manually dragging files).