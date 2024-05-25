import { getTask, updateTask } from "@/utils/action";
import Link from "next/link";

interface Params {
  id: string;
  content: string;
  completed: boolean;
}

interface UpdatePageProps {
  params: Params;
}

export default async function UpdatePage({ params }: UpdatePageProps) {
  const task = await getTask(params.id);

  if (!task) {
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col pt-10">
        <Link href="/">Züruck</Link>
        <p>Task not found</p>
      </div>
    );
  }

  const { id, content, completed } = task;

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col pt-10">
      <Link href="/">Züruck</Link>
      <form
        action={updateTask}
        className="max-w-[700px] flex items-center flex-col justify-center my-2"
      >
        <input type="hidden" name="id" value={id} />
        <input
          name="task"
          required
          placeholder="hinzuufügen Task"
          defaultValue={content}
          type="text"
          className="h-[50px] border border-gray-300 p-2"
        />

        <div className="flex items-center gap-2">
          <label htmlFor="completed" id="completed">
            Completed
          </label>
          <input
            name="completed"
            defaultChecked={completed}
            type="checkbox"
            className="h-[50px] border border-gray-300 p-2"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-700 p-3"
        >
          Modifier
        </button>
      </form>
    </div>
  );
}
