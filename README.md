# showergument

An entry for the make.fun bounty [Invent a Word We Need](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0).

[![Invent a Word We Need](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![Rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/toirant/u-deranalabs-invent-a-word-we-need-17a020e0/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![Reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/toirant/u-deranalabs-invent-a-word-we-need-17a020e0/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)

## The word

> **showergument (n.): the perfect comeback you finally think of, hours too late, in the shower.**

Everyone has lived it: the argument ends, you lose, and then — under running
water, hours later — the flawless reply arrives, far too late to use. English
had no single word for that moment. Now it does.

## How it works

`main.ts` writes the single word-and-definition line (92 characters) to
`/output/entry.txt` and validates it in code before and after writing:
UTF-8 text, 1–140 characters, one line, not whitespace-only, a single
lowercase coined word up front, and a self-contained definition after it.

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
