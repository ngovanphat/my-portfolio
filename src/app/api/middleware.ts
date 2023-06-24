import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { json } from "body-parser";

const middleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler
) => {
  json()(req, res, (error?: any) => {
    if (error) {
      console.error("Error parsing JSON:", error);
      res.status(400).json({ error: "Invalid JSON" });
      return;
    }
    next(req, res);
  });
};

export default middleware;
