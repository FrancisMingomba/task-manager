
//import TaskForm from '../_components/TaskForm'
import dynamic from "next/dynamic";

const TaskForm = dynamic(
  () => import('@/app/tasks/_components/TaskForm'),
  {ssr: false}
);

const NewTaskPage = () => {
  return (
      <TaskForm />
  )
}

export default NewTaskPage
