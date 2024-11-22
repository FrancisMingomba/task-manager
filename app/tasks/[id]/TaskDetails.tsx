import TaskStatusBadge from '@/app/components/TaskStatusBadge';
import { Task } from '@prisma/client';
import { Heading, Flex, Card,Text } from '@radix-ui/themes';
import React from 'react';
import ReactMarkDown from 'react-markdown';


const TaskDetails = ({ task }: { task: Task}) => {
  return (

    <>
        <Heading>{task.title}</Heading>
        <Flex className='space-x-3' my="2">
            <TaskStatusBadge status={task.status} />
            <Text>{task.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose max-w-full" mt="4">
        <ReactMarkDown>{task.description}</ReactMarkDown>
        </Card>
    </>
  )
}

export default TaskDetails
