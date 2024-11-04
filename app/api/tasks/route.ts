
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';


const createTaskSchema = z.object({
    title: z.string().min(1, 'Tilte is required.').max(255),
    description: z.string().min(1, 'Description is required.')
});


export async function POST(request: NextRequest) {
   const body = await  request.json();
   const validation = createTaskSchema.safeParse(body);
   if (!validation.success)
    return NextResponse.json(validation.error.format(), {status: 400});

  

  const newTask = await prisma.issue.create({    // This line need attention
    data: { title: body.title, descrition: body.description}
   });

   return NextResponse.json(newTask, { status: 201});

}