import { apiHandler} from '../../../../helpers/api/api-handler';
import { blogRepo} from '../../../../helpers/api/blog-repo';

import { NextResponse } from 'next/server'






export async function POST(request) {
    const body=await request.json()
    console.log(body)

   const sended= await blogRepo.create(body);

    if(!sended) return NextResponse.json("ooook")

    return NextResponse.json("ok")

}