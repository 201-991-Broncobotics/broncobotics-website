// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { MemberType } from '../../members/index'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MemberType>
) {

    let limit = Number(req.query.limit) || 10

  //res.status(200).json()
}
