'use client';

import { AlertDialog, AlertDialogTrigger, Button, Flex } from '@radix-ui/themes'

const DeleteTaskButton = ({ taskId }: {taskId: number}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
      <Button color="red">Delete Task</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this task? This action cannot be undo.
        </AlertDialog.Description>
        <Flex mt="4" gap="3">
          <AlertDialog.Cancel>
            <Button variant='soft' color="gray">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
              <Button color="red">Delete Task</Button>
          </AlertDialog.Action>          
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
   
  )
}

export default DeleteTaskButton