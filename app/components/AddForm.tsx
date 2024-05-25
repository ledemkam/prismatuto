"use client";

import { createTask } from "@/utils/action";
import { useFormStatus } from "react-dom";

export default function AddForm() {
  //useFormstatus permet de verifier l etat du formulaire

  const BtnSubmit = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit" //type submit pour envoyer les donnees,car il sera dans un formulaire
        disabled={pending}
        className="text-white bg-green-500 hover:bg-green-600 p-3"
      >
        {pending ? "data in loading" : "hinzufügen"}
      </button>
    );
  };

  return (
    <form
      action={createTask}
      className="max-w-[700px] flex items-center mb-2 space-x-2"
    >
      <input
        name="task"
        required
        placeholder="task hinzufügen"
        type="text"
        className="h-[50px] border border-gray-300 p-2"
      />
      <BtnSubmit />
    </form>
  );
}
