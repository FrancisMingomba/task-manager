import React from 'react'
import { Button, Table } from '@radix-ui/themes';
import Link from 'next/link';
//import prisma from '@/prisma/client';

const TasksPage = async () => {

 //const tasks = await prisma.issue.findMany();

  return (
    <div>
      <Button>
        <Link href='/tasks/new'> New Task</Link>
      </Button>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        
            <Table.Row >
              <Table.Cell>Java</Table.Cell>
              <Table.Cell>OPEN</Table.Cell>
              <Table.Cell>11-8-2924</Table.Cell>
            </Table.Row>
            <Table.Row >
              <Table.Cell>C++</Table.Cell>
              <Table.Cell>CLOSE</Table.Cell>
              <Table.Cell>11-8-2924</Table.Cell>
            </Table.Row>
          
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default TasksPage