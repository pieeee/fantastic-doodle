import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await prisma.news_feed.create({
      data: { ...req.body },
    });

    res.status(200).json({ message: "News is added to database" });
  } catch (error: any) {
    console.log("********* Start");
    console.log("Failure", error.message);
    console.log("******** Finish");
  }
}
