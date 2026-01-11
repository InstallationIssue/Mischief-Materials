import { NextApiRequest, NextApiResponse } from "next";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Health Check",
};

export default async function Healthz() {
// req: NextApiRequest,
// res: NextApiResponse
  return 0;
  // return res.status(200).json({ message: "Server is healthy" });
}
