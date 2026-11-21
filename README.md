# News Image — 21 November 2026

[![Bounty](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![Rank](https://make.fun/badge/news-image-20261121/mochhidayah/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![Reward](https://make.fun/badge/news-image-20261121/mochhidayah/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

One illustration summing up world news on Saturday 21 November 2026, built for
[make.fun](https://make.fun/bounty/news-image-20261121).

## The three stories

1. **Missiles hit Kyiv — and Poland.** Russia launched 400+ drones and 110
   missiles at Ukraine overnight; at least 8 people were killed in Kyiv, and
   two missiles plus a suspected drone came down in Poland. PM Tusk called it
   a deliberate provocation. *(BBC / oneturn.news, 21 Nov 2026)*
2. **ICJ: Myanmar guilty.** The International Court of Justice ruled Myanmar
   committed genocide against the Rohingya — the first time the court has held
   a state responsible for genocide. *(oneturn.news / ICJ, 21 Nov 2026)*
3. **AI stocks crash.** The S&P 500 and Dow slid into correction as the AI
   sell-off wiped roughly $4tn of value in a week; Anthropic shares slid after
   their IPO debut. *(BBC / FT, 21 Nov 2026)*

## Style

ILLUSTRATION, not a newspaper page: three big visual panels (night skyline
under missile fire, the court with the scales of justice, a falling chart),
each with one short bold label. An AI judge with no news feed can read the
event from the picture alone.

## Run

```sh
node main.ts   # copies entry.png to /output/entry.png
```

`entry.png` is 1024×1024, under 1 MiB. The artwork is drawn procedurally
with Python PIL (see the generation script in the build notes); `main.ts`
only copies the finished image to `/output`.
