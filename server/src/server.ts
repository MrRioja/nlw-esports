import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHoursString } from "./utils/convert-minutes-to-hours-string";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json(games);
});

app.get("/ads", async (req, res) => {
  const ads = await prisma.ad.findMany({});

  return res.json(ads);
});

app.get("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hourStart: convertMinutesToHoursString(ad.hourStart),
        hourEnd: convertMinutesToHoursString(ad.hourEnd),
      };
    })
  );
});

app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json(ad);
});

app.post("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const {
    name,
    discord,
    useVoiceChannel,
    hourStart,
    hourEnd,
    weekDays,
    yearsPlaying,
  } = req.body;

  const ad = await prisma.ad.create({
    data: {
      name,
      discord,
      useVoiceChannel,
      hourStart: convertHourStringToMinutes(hourStart),
      hourEnd: convertHourStringToMinutes(hourEnd),
      weekDays: weekDays.join(","),
      yearsPlaying,
      gameId,
    },
  });

  return res.status(201).json(ad);
});

app.listen(3333, () => {
  console.log(`Server is running 🚀`);
});
