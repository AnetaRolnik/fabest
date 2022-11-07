import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !email.includes("@") || !message || message.trim() === "") {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res.status(201).json({ message: newMessage });
  }
};

export default handler;