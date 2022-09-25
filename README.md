# Virginia Club Running's Website
[Club Running](https://virginia.clubrunning.org) is an athletic CIO at the University of Virginia. 

This repository contains the source code for our website, [virginia.clubrunning.org](http://virginia.clubrunning.org/).
## Project structure

```
.
├── dist - build output
├── src - source files that are preprocessed/compiled at build time
│   └── styles
└── virginia.clubrunning.org - contains files which are copied to ./dist/ unaltered at build time.
    └── static
        ├── images - images used on the site
        ├── results - mirrored results for some races
        └── scripts - JavaScript files used on the site
    └── index.html, meets.html, ... - markup for site pages
```

`./dist/` contains the site build output. It is deliberately excluded in `.gitignore`, so it won't be present when you clone the repository.
`./dist/` will be created and filled with built content when you [build](#building) the site.

`./src/` contains files that are somehow compiled or preprocessed during building.
At the time of writing, this only includes SCSS files and their vanilla CSS dependencies.
So, for instance, when the site is built, the file `./src/styles/base.scss` will be compiled and then copied to `./dist/static/styles/base.css`.

`./virginia.clubrunning.org/` contains static files. At build time they are copied unaltered into `./dist/`. So, for instance, `./virginia.clubrunning.org/static/images/team.jpeg` is copied to `./dist/static/images/team.jpeg`.

## Prerequisites
- [NodeJS](https://nodejs.org/en/) installed on your machine.
- [Git](https://docs.github.com/en/get-started/quickstart/set-up-git) installed on your machine and authenticated with GitHub.

## Quickstart

To get up and running:

1. [Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) somewhere convenient.
2. Navigate to the project root and install project dependencies:
```
npm install
```
3. Start the development server:
```
npm run serve
```
4. Open `http://localhost:8080` in your web browser. As you make changes, the site rebuilds automatically.

## Building
To build the site and exit:
```
npm run build
```

This executes the `build` task defined in the [gulpfile](./gulpfile.js).
The build output is placed in `./dist/`.

## Publishing changes
1. Add and commit your changes ([guide](https://github.com/git-guides#make-change-and-make-a-commit)):
```bash
# assuming you are on the `main` branch
git add virginia.clubrunning.org/index.html
git commit -m "Update homepage"
```
2. Push your changes
```bash
# push changes to `origin/main`
git push
```

Changes are automatically [deployed](#deplyoing) on push.

## Deploying
### Hosting background
We use NIRCA's [free web hosting service](https://clubrunning.org/web.php) for member organizations.

We do not have direct control over the web host. Insetad, NIRCA gives us a username/password to login to an FTP server. (Webmasters: reach out to your predecessor if you don't have the login.)

Any files you place underneath `/virginia.clubrunning.org/` on the FTP server will be immediately go live on the website.

### GitHub Actions

This repository is configured using GitHub Actions to automatically rebuild and deploy (via FTP) the website whenever you push to the `main` branch.

Every time new commits are pushed to `main`, the pipeline will be triggered. In principle, this means you should never have to access the FTP server directly. Make your changes locally, push them to Git, and let GitHub actions handle the rest.

*(For more information, see the wiki page [Deployment Deep Dive](https://github.com/uva-club-running/virginia.clubrunning.org/wiki/Deployment-Deep-Dive).*

## Contributing
Club Running's [Webmaster](https://virginia.clubrunning.org/contact) is ultimately responsible for maintaining the site, but contributions from others are certainly welcome.

Contributors should follow [this guide](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) to make their changes.

## Wiki
Find more documentation on the [wiki](https://github.com/uva-club-running/virginia.clubrunning.org/wiki).