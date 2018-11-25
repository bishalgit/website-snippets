# DSCS

DSCS is a transportation automation system which manages fleets, updates queues, automates official processes, and digitizes ticketing system. Its main objectives are to centralize queue management, ticketing system, and all the transactions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
1. Odoo 11.0 enterprise
2. PostgreSQL >= 9.5
3. Python >= 3.5
4. Python dependencies
```

### Installing

```
1. Include your custom modules' directory path
```

> eg. ./odoo-bin --addons-path=~/nerku/custom,~/nerku/enterprise,~/nerku/odoo/addons

```
2. Start your server
3. Activate the developer mode from settings
4. Update app list
5. Install your new module or upgrade the module
```

## Running the tests

1. Module test
2. Integration test

## Deployment

Make sure your module works on your local server and sync your code to the development branch in the repository. Report to the technical lead and he will merge new feature to the live development server.

## Built With

* [Odoo enterprise](https://odoo.com/) - Backend server
* [Git](https://git-scm.com/) - Source Code Management
* [Github](https://github.com/) - Collaboration

## Contributing

Please read [CONTRIBUTING.md](https://gitlab.com/bishalpun/inceptiondocs/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requiests to us.

> Read **[COMMIT.md](https://gitlab.com/bishalpun/inceptiondocs/blob/master/COMMIT.md)** to write a good and efficient commit message in git.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://gitlab.com/bishalpun/dscs/tags).

## Authors

* **Bishal Pun** - *Initial work* - [Inception](http://inception.ae/#casestudy/)
See also the list of [contributors](https://gitlab.com/bishalpun/dscs/graphs/master) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* [Odoo Community](https://github.com/odoo/odoo)
* [PurpleBooth](https://gist.github.com/PurpleBooth) - Readme reference taken [README-Template.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md)
* [Gitlab Docs](https://docs.gitlab.com/) - [Markdown](https://docs.gitlab.com/ee/user/markdown.html)