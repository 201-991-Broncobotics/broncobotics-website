import type { NextApiRequest, NextApiResponse } from "next";

let Handler = async function (req: NextApiRequest, res: NextApiResponse) {
   try {
      await res.unstable_revalidate(`/members/${req.query.member}`);
      return res.json({ revalidated: true });
   } catch {
      res.status(500).send("Error Revalidating ");
   }
};

export default Handler;
