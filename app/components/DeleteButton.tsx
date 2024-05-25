import { deleteTasks } from "@/utils/action";

type DeleteButtonProps = {
  id: string;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <form action={deleteTasks}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-white bg-red-500 hover:bg-red-600 p-3"
      >
        Löschen
      </button>
    </form>
  );
}
