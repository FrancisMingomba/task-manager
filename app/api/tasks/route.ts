
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createTaskSchema } from "../../validationSchema";


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