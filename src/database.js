import { PrismaClient } from "@prisma/client";
import { logger } from "./logger.js";

export const prisma = new PrismaClient({
  log: [
    { level: "query", emit: "event" },
    { level: "info", emit: "event" },
    { level: "warn", emit: "event" },
    { level: "error", emit: "event" },
  ],
});

prisma.$on("query", (e) => {
  logger.info(e);
});

prisma.$on("info", (e) => {
  logger.info(e);
});

prisma.$on("warn", (e) => {
  logger.query(e);
});

prisma.$on("error", (e) => {
  logger.error(e);
});
