# Portfolio Website with Next.js and Sass

This repository contains the source code for a portfolio website built using Next.js and Sass. This README.md file provides an overview of the project and instructions on how to set it up and customize it for your own use.

[![GitHub last commit](https://img.shields.io/github/last-commit/leeroyanesu/portfolio-nextjs?label=Last+Commit&style=flat)][repo]
[![GitHub issues](https://img.shields.io/github/issues/leeroyanesu/portfolio-nextjs?label=Issues&style=flat)][issues]
[![GitHub pull requests](https://img.shields.io/github/issues-pr/leeroyanesu/portfolio-nextjs?label=Pull+Requests&style=flat)][pulls]
[![GitHub Licence](https://img.shields.io/github/license/leeroyanesu/portfolio-nextjs?label=Licence&style=flat)][license]

## Table of Contents

- [Portfolio Website with Next.js and Sass](#portfolio-website-with-nextjs-and-sass)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Sceenshots](#sceenshots)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Customization](#customization)
    - [Changing Content](#changing-content)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)
  - [Connect With Me](#connect-with-me)

## Features

- Responsive design for various screen sizes.
- A customizable portfolio section to showcase your projects.
- An about section to introduce yourself.
- Easily customizable with Sass for styling.


## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

You need to have the following software installed on your computer:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Star the repository.

2. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/nixrajput/portfolio-nextjs.git
   ```

3. Navigate to the project directory:

   ```bash
   cd portfolio-nextjs
   ```

4. Install the project dependencies:

   If you're using npm:

   ```bash
   npm install
   ```

   If you're using pnpm:

   ```bash
   pnpm install
   ```

   If you're using Yarn:

   ```bash
   yarn install
   ```

## Usage

To start the development server and view the website locally, run the following command:

```bash
npm run dev
#or
pnpm run dev
# or
yarn dev
```

This will start the Next.js development server, and you can access the website in your web browser at `http://localhost:3000`.

## Customization

You can customize various aspects of the portfolio website to make it your own.

### Changing Content

1. Update the content in the `data` directory:

   - Edit the `projects.ts` file to add or modify project details.
   - Edit the `services.ts` file to add or modify services you provide.
   - Edit the `experiences.ts` file to add or modify experiences you have.
   - Edit the `skills.ts` file to add or modify skills you know.
   - Edit the `socialLinks.ts` file to add or modify socila media links.

2. Replace or add images in the `public/images` directory to match your projects and profile picture.

## Deployment

To deploy the portfolio website to a hosting service of your choice, follow the deployment instructions for Next.js applications. Some popular hosting options include Vercel, Netlify, and GitHub Pages.

Remember to configure environment variables for sensitive information like email credentials if needed.

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Connect With Me

[![GitHub: leeroyanesu](https://img.shields.io/badge/leeroyanesu-EFF7F6?logo=GitHub&logoColor=333&link=https://www.github.com/leeroyanesu)][github]
[![Linkedin: leeroyanesu](https://img.shields.io/badge/Leeroy_Chako-EFF7F6?logo=LinkedIn&logoColor=blue&link=https://www.linkedin.com/in/leeroy-chako-345626153)][linkedin]
[![Twitter: leeroyanesu](https://img.shields.io/badge/MrLeeC-EFF7F6?logo=X&logoColor=333&link=https://x.com/MrLeeC)][twitter]
[![Telegram: leeroyanesu](https://img.shields.io/badge/leeroyanesu-EFF7F6?logo=Telegram&link=https://telegram.me/MrLeeA_C)][telegram]
[![Gmail: leeroychako@gmail.com](https://img.shields.io/badge/leeroychako@gmail.com-EFF7F6?logo=Gmail&link=mailto:leeroychako@gmail.com)][gmail]

[github]: https://github.com/leeroyanesu
[twitter]: https://twitter.com/MrLee_C
[linkedin]: https://www.linkedin.com/in/leeroy-chako-345626153
[telegram]: https://telegram.me/MrLeeA_C
[gmail]: mailto:leeroychako@gmail.com

[repo]: https://github.com/leeroyanesu/portfolio-nextjs
[issues]: https://github.com/leeroyanesu/portfolio-nextjs/issues
[pulls]: https://github.com/leeroyanesu/portfolio-nextjs/pulls
[license]: https://github.com/leeroyanesu/portfolio-nextjs/blob/master/LICENSE.md
