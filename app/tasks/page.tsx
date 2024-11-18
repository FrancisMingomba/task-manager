//'use client';

import React from 'react'
import { Button, Table } from '@radix-ui/themes';
import Link from 'next/link';
//import prisma from '@prisma/client';

const TasksPage = async () => {

//const tasks = await prisma.Task.create;
 

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
        
            <Table.Row >
              <Table.Cell>Java</Table.Cell>
              <Table.Cell className='hidden md:table-cell'>OPEN</Table.Cell>
              <Table.Cell className='hidden md:table-cell'>11-8-2924</Table.Cell>
            </Table.Row>
            <Table.Row >
              <Table.Cell>C++</Table.Cell>
              <Table.Cell className='hidden md:table-cell'>IN-PROGRESS</Table.Cell>
              <Table.Cell className='hidden md:table-cell'>11-8-2924</Table.Cell>
            </Table.Row>
            <Table.Row >
              <Table.Cell>Python</Table.Cell>
              <Table.Cell className='hidden md:table-cell'> CLOSED</Table.Cell>
              <Table.Cell className='hidden md:table-cell'>11-8-2924</Table.Cell>
            </Table.Row>
          
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default TasksPage