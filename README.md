# next-wordle
A simple Next.js app that displays the daily word for the popular game, [Wordle](https://www.nytimes.com/games/wordle/index.html).

## Setup
As this was a quick mini project, you will want to ensure that the correct daily word is displaying after cloning the repository.

In the `data/store.json` file, set the `currentWordIndex` to the index of the daily word found in `data/words.json`.

Make sure to also update the `timestamp` value with that of the current date.

## words.json
You may notice that there are two files, `words.json` and `words.old.json`. The latter file is the original words list from prior to games takeover by The New York Times. It is left here if you would like to optionally use the original words list.

For consistency purposes, the new words list is used.
