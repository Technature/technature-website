import { apiHandler} from '../../../../helpers/api/api-handler';
import { blogRepo} from '../../../../helpers/api/blog-repo';

import { NextResponse } from 'next/server'






export async function GET() {


   const sended= await blogRepo.getAll()


    if(!sended) return NextResponse.json("ooook")

    return NextResponse.json(sended)

}