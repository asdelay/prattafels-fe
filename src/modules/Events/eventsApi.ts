import { baseApi } from "@/services/api";
import type { Lesson } from "@/types";

export const lessons = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLessons: builder.query<Lesson[], void>({
      query: () => "/lessons",
    }),
    updateLesson: builder.mutation<Lesson, { id: number; attendeeId: number }>({
      query: ({ id, attendeeId }) => ({
        url: `/lessons/${id}`,
        method: "PATCH",
        body: { attendeeId },
      }),
    }),
  }),
});

export const { useGetAllLessonsQuery, useUpdateLessonMutation } = lessons;
