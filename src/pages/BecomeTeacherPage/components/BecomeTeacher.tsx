import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export const BecomeTeacher = () => {
  const teacherSchema = z.object({
    motivation: z
      .string()
      .min(1, "Motivation field must contain at least 1 character"),
    languageLevel: z
      .string()
      .min(1, "Language level must contain at least 1 character"),
  });

  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof teacherSchema>
  >({
    resolver: zodResolver(teacherSchema),
  });
  return (
    <div className="min-h-screen">
      <h3 className="text-4xl md:text-6xl font-semibold text-center">
        Become Teacher
      </h3>
      <div className="mt-12 flex justify-center">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="mb-4">
            <label htmlFor="motivation" className="mt-4 block mb-2">
              Motivation
            </label>
            <Textarea
              id="motivation"
              className="h-30 w-[300px]"
              {...register("motivation")}
              placeholder="I want to be a teacher at Praattafels because..."
            />
            {formState.errors.motivation && (
              <p className="text-red-500 text-sm">
                {formState.errors.motivation.message}
              </p>
            )}
            <label htmlFor="language" className="mt-4 block mb-2">
              Language Level
            </label>
            <Input
              id="language"
              {...register("languageLevel")}
              placeholder="B2"
            />
            {formState.errors.languageLevel && (
              <p className="text-red-500 text-sm">
                {formState.errors.languageLevel.message}
              </p>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
