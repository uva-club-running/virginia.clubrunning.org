# Club Running's Website
Club Running is an athletic CIO at the University of Virginia, and this is our website!

## Tracking to-dos
Bugfixes, updates, and features are registered using the codebase's issues page.

## Building
Currently, the only files that need to be built are the `.scss` files under `virginia.clubrunning.org/static/styles/`.

You can handle building these automatically by running: `sh ./scripts/sass.sh`

**NB**: Eventually, the build process will be automated in a much cleaner way than this.

## Contributing
The following steps outline the workflow I use for implementing a new feature or making changes to the website.

In general, I use the [Git feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) workflow to manage features and bugfixes.

1. Create a new branch to do your work off of the `dev` branch.
    - `git pull`
    - `git checkout dev`
    - `git checkout -B my_feature`
2. Make changes on the new feature branch.
3. If applicable, rebuild the website.
    - Currently, the only files that are built are SASS/SCSS files, which can be built using `scripts/sass.sh`.
    - This will eventually be changed.
    - See [the section on building](#Building) for more.
4. Push your changes using `git push -u origin my_feature`.
5. Make a pull request to merge your new changes into the `dev` branch.
6. Approve the pull request.
7. After the pull request is approved, GitHub Actions will deploy your changes to the live website. See [Deployment](#deployment).

Future webmaster note: This process can be really tedious for tiny, atomic edits (such as spelling corrections, date changes, etc.) In that case, it's acceptable to commit directly to `dev`.

## Deployment
This repository is configured using GitHub Actions to automatically redeploy the website whenever you push to the `dev` branch. Every time you make changes on `dev` or merge a pull request, the pipeline will be triggered. Watch the Actions page to make sure deployment succeeds.

## Technical lore
I (Joe Kerrigan) inherited this website in 2019, without a whole ton of information beyond a Word document containing the FTP server login. A major goal of mine is to improve the maintainability of this project for future webmasters.

I was lucky in that the previous webmaster Andrew had just finished a major rewrite of the website. It was prettier, cleaner, and much more maintainable. But all of the code was still contained on the FTP server with our website. And it cohabitated with old website code, which I can only assume was kept around for posterity. Navigating the FTP server was kind of a mess.

My first big initiative was moving the project to source control. This was easy enough: download the code from the FTP server, run `git init`, and create a remote on GitHub. Another big advantage of using source control is that I can refactor or remove code without erasing history: the website's history is tracked by git.

This has another big advantage. Tasks in the codebase can now be managed using GitHub. To-do lists become GitHub issues, and I can wrap my changes up in pull requests to leave a paper trail whenever I make major changes.

Using GitHub also allows for really seamless integration with popular CI/CD pipelines. I use GitHub Actions, including the wonderful [FTP Deploy](https://github.com/marketplace/actions/ftp-deploy) action to automate deployments to the website FTP server. This makes deployments a lot less painful (simply push to `prod` instead of manually dragging files).