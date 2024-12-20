//'use client';

import React from 'react';
import { Button, Table } from '@radix-ui/themes';
import Link from '../components/Link';
import prisma from "@/prisma/client";
import TaskStatusBadge from '../components/TaskStatusBadge';

const TasksPage = async () => {
 const tasks = await prisma.task.findMany();
 

  return (
    <div>
      <div className='mb-5'>
      <Button>
        <Link href='/tasks/new'> New Task</Link>
      </Button>
      </div>
     
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks.map(task => (
            <Table.Row key={task.id}>
              <Table.Cell>
                <Link href={`/tasks/${task.id}`}>
                   {task.title}
                </Link>
                
                <div className='block md:hidden'>
                  {task.status} 
                  <TaskStatusBadge status={task.status} />
                </div>
                </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <TaskStatusBadge status={task.status} />
                </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{task.createdAt.toDateString()}</Table.Cell>
            </Table.Row>

          ))}
          
        </Table.Body>
        
      </Table.Root>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default TasksPage