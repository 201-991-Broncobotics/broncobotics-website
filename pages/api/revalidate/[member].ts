import type { NextApiRequest, NextApiResponse } from "next";

let Handler = async function (req: NextApiRequest, res: NextApiResponse) {
   try {
      await res.revalidate(`/members/${req.query.member}`);
      await res.revalidate(`/members/`);
      return res.json({ revalidated: true });
   } catch {
      res.status(500).send("Error Revalidating ");
   }
};

export default Handler;
