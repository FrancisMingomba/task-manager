import { taskSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
//import { deflateRawSync } from "node:zlib";


export async function  PATCH(
    request: NextRequest, 
    { params }: { params: {id: string}}) {
        const body = await request.json();
        const valadation = taskSchema.safeParse(body);
        if (!valadation.success)
            return NextResponse.json(valadation.error.format(), { status: 400 });

        const task = await prisma.task.findUnique({
            where: { id: parseInt(params.id) }
        });

        if (!task)
            return NextResponse.json({error: 'Invalid task' }, { status: 404});

        const updateTask = await prisma.task.update({
            where: { id: task.id}, 
            data: {
                title: body.title,
                description: body.description
            }
        });
            
        return NextResponse.json(updateTask);

    }

    export async function  DELETE(
        request: NextRequest, 
        { params }: { params: {id: string}}) {
            
           const task = await prisma.task.findUnique({
                where: { id: parseInt(params.id)}
            });

            if (!task)
                return NextResponse.json({error: 'Invalid task' }, { status: 404});

            await prisma.task.delete({
                where: { id: task.id}
            });

            return NextResponse.json({});
        }
    