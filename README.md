---
authors:
- "shereefb"
team_size: 1
goal_id: 83
title: 'Browser Games: Simon & Tic-Tac-Toe'
created_at: '2016-10-05T21:34:11Z'
labels:
- foundational
published: true
level: '1'
redirect_from: "/goals/83"
---

# Browser Games [Basic]

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can build basic web sites with HTML & CSS
- Can add behavior to a web site with JavaScript
- Are familiar with DOM manipulation
- Are familiar with games like tic-tac-toe and Simon
- Are interested in making more complex interactive web pages

## Description

Build simple graphical games for the browser.

Fork the the [browser-games repository][browser-games] and use the fork as your project artifact.

Implement the games **Tic-Tac-Toe** and **Simon** from the list in the [games.md][games-list] file.

You will be using FreeCodeCamp challenges as guides and tutorials for building these games.

## Context

This goal will challenge your ability to take a _formal, defined system_ from the real world and replicate it in code. You will start with all of the logic of the system (the rules of the game) and most of the UI already designed.

Your work will be mainly in deciding how to replicate that formal logic and user interface using JavaScript, HTML, and CSS.

## Specifications

- [x] Artifact produced is a fork of the [browser-games][browser-games] repo.
- [ ] For **both** of the games Tic-Tac-Toe and Simon, there exists:
  - [ ] A playable, complete version of the game at `public/GAME_NAME.html` (e.g. `public/ticTacToe.html`)
  - [x] A link to the game page from `public/index.html`
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] HTML, CSS, and JS files are well formatted with proper spacing and indentation.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] Every pull request has been reviewed by at least one other person.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

[browser-games]: https://github.com/GuildCrafts/browser-games
[games-list]: https://github.com/GuildCrafts/browser-games/blob/master/games.md
[basic-games]: https://github.com/GuildCrafts/browser-games/blob/master/games.md#basic-graphical-games
[mit-license]: https://opensource.org/licenses/MIT

## Notes:
I mostly finished the Simon game. I challenged myself by using jQuery. I noted enough for my own understanding.
In Tic Tac Toe, I was unable to finish. I left off trying to sync the computer and the two player functions so they wouldnt interfere. I have a tertiary win check function that is not functional it is just there to hold a place for it.