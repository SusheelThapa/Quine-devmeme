# <p align="center"><img src="https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/0ed81da3-a960-4665-a45c-513ac5f6eb6f" width=300 /></p>

<p align="center">
    <p align="center">
        <a href="https://github.com/SusheelThapa/Quine-devmeme/" target="blank">
            <img src="https://img.shields.io/github/watchers/SusheelThapa/Quine-devmeme?style=for-the-badge&logo=appveyor" alt="Watchers"/>
        </a>
        <a href="https://github.com/SusheelThapa/Quine-devmeme/fork" target="blank">
            <img src="https://img.shields.io/github/forks/SusheelThapa/Quine-devmeme?style=for-the-badge&logo=appveyor" alt="Forks"/>
        </a>
        <a href="https://github.com/SusheelThapa/Quine-devmeme/stargazers" target="blank">
            <img src="https://img.shields.io/github/stars/SusheelThapa/Quine-devmeme?style=for-the-badge&logo=appveyor" alt="Star"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/SusheelThapa/Quine-devmeme/issues" target="blank">
            <img src="https://img.shields.io/github/issues/SusheelThapa/Quine-devmeme.svg?style=for-the-badge&logo=appveyor" alt="Issue"/>
        </a>
        <a href="https://github.com/SusheelThapa/Quine-devmeme/pulls" target="blank">
            <img src="https://img.shields.io/github/issues-pr/SusheelThapa/Quine-devmeme.svg?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/SusheelThapa/Quine-devmeme/blob/master/LICENSE" target="blank">
            <img src="https://img.shields.io/github/license/SusheelThapa/Quine-devmeme?style=for-the-badge&logo=appveyor" alt="License" />
        </a>
    </p>
</p>

<p align="center">
   Reflecting the Nerds and Greeks <br/>
   Coding meets Humour 😄 <br>
   Laugh, share, and enjoy the lighter side of coding with fellow developers. 😂👩‍💻🤖
</p>

## Description

**DevMeme** is a platform designed to alleviate the stress and boredom often experienced by developers during long coding sessions. It offers a collection of entertaining features tailored to the coding community, including an Image Meme Generator, Text-Based Joke Generator, and Programming Reels.

## Problem

Developers often encounter the following challenges during coding sessions:

- **Frustration Over Bugs**: Debugging code can be time-consuming and frustrating, leading to decreased motivation and productivity.
- **Mind Boredom of Hours of Coding**: Spending long hours writing code can result in mental fatigue and boredom, affecting creativity and problem-solving abilities.

DevMeme aims to address these challenges by providing a platform for developers to take a break, unwind, and find inspiration through humor and entertainment.

## How It Solves

### Frustration Over Bugs:

- DevMeme provides a distraction in the form of hilarious memes and jokes, offering developers a much-needed break from the frustration of debugging. By injecting humor into their day, DevMeme helps developers maintain a positive outlook and stay motivated to tackle challenging problems.

### Mind Boredom of Hours of Coding:

- DevMeme's diverse range of entertaining content, including memes, jokes, and programming reels, prevents developers from succumbing to the monotony of long coding sessions. By providing a source of amusement and inspiration, DevMeme keeps developers engaged and energized, enhancing their overall coding experience.

## Table of Contents

- [Description](#description)
- [Problem](#problem)
- [How It Solves](#how-it-solves)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Dependencies](#dependencies)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## Features

- Programming Meme

  Reduce your stress levels while coding by watching some memes.

  <details>
    <summary> Sample UI of Programming Meme</summary>
    <img src="https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/6d5c8dff-1739-4a64-ac91-b4077dda9bc6" width=750/>
    <hr/>
    <img src="https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/0cc1ec73-5405-4e36-b207-860c4f8df649" width=750/>
  </details>

- AI Joke Generator

  People say laughter is the best medicine; we offer tons of it with our Gemini Powered AI Joke Generator Feature.

  <details>
    <summary> Sample UI of AI Joke Generator</summary>
    <img src="https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/950e448c-afe0-4969-8f1c-b2a9eff47991" width=750/>
  </details>

- Programming Reels

  Sometimes, it's worth watching programming reels.
  <details>
    <summary> Sample UI of Programming Reels</summary>
    <img src="https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/cfded23b-b2a1-40bd-ae18-04a07a76f684" width=750/>
  </details>

## Demo

https://github.com/SusheelThapa/from_taipy_census/assets/83917129/b44bf863-a691-45e7-8ea7-3ad962b13395

## Installation

### Prerequisites

Before running `Quine-devmeme`, you will need a **Gemini API** key. You can obtain an API key by registering on the Google Gemini platform.

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Quine-devmeme.git
   cd Quine-devmeme
   ```

2. Installation of node packages

   ```bash
    yarn
   ```

3. Create `.env` file

   ```env
   VITE_GEMINI_API_KEY=YOUR-GEMINI-API-KEY
   VITE_MEME_LINK=https://raw.githubusercontent.com/deep5050/programming-memes/main/memes/1/
   VITE_FLAGSMITH_ENVIRONMENT=Ec4MM4XxVbaRX4XjfruL2q
   ```

   _Note: Replace `YOUR-GEMINI-API-KEY` with your api key_

4. Running the project:

   ```bash
   yarn run dev
   ```

## Dependencies

- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): `^1.0.2`
- [@radix-ui/react-toast](https://www.npmjs.com/package/@radix-ui/react-toast): `^1.1.5`
- [axios](https://www.npmjs.com/package/axios): `^0.23.0`
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): `^0.7.0`
- [clsx](https://www.npmjs.com/package/clsx): `^1.1.1`
- [dotenv](https://www.npmjs.com/package/dotenv): `^10.0.0`
- [flagsmith](https://www.npmjs.com/package/flagsmith): `^5.0.0`
- [lucide-react](https://www.npmjs.com/package/lucide-react): `^0.2.8`
- [react](https://www.npmjs.com/package/react): `^18.0.0`
- [react-dom](https://www.npmjs.com/package/react-dom): `^18.0.0`
- [react-icons](https://www.npmjs.com/package/react-icons): `^4.3.1`
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): `^6.2.1`
- [react-spring-lightbox](https://www.npmjs.com/package/react-spring-lightbox): `^1.9.0`
- [styled-components](https://www.npmjs.com/package/styled-components): `^5.3.3`
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): `^1.0.4`

## Acknowledgement

DevMeme utilizes the repository [Programming Meme](https://github.com/deep5050/programming-memes)
to source a collection of memes for the **Programming Meme** feature.

## Contributing

We welcome contributions to enhance and improve [Quine-devmeme](CONTRIBUTING.md)! Feel free to submit issues, feature requests, or pull requests. Please adhere to our Code of Conduct.

## License

This project is licensed under the [MIT License](/LICENSE).
