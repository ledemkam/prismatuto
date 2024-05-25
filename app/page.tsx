import AddForm from "./components/AddForm";
import TasksTab from "./components/TasksTab";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center flex-col p-10">
      <AddForm />
      <TasksTab />
    </main>
  );
}
