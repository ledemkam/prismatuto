"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllTaks = async () => {
  const allTask = await prisma.task.findMany({
    orderBy: {
      createAt: "desc",
    },
  });
  return allTask;
};

export const createTask = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const task = formData.get("task") as string;

  await prisma.task.create({
    data: {
      content: task,
    },
  });
  revalidatePath("/");
};

export const deleteTasks = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/");
};

export const getTask = async (id: string) => {
  const updateTask = await prisma.task.findUnique({
    where: {
      id: id,
    },
  });
  return updateTask;
};

export const updateTask = async (formData: FormData) => {
  try {
    const id = formData.get("id") as string;
    const task = formData.get("task") as string;
    const completed = formData.get("completed");

    if (task !== null) {
      await prisma.task.update({
        where: {
          id: id,
        },
        data: { content: task, completed: completed === "on" },
      });
    }
  } catch (error) {
    console.error("Error updating task:", error);
  } finally {
    redirect("/");
  }
};
