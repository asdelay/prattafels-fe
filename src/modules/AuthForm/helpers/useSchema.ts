import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export const useSchema = (type: "login" | "register") => {
  if (type === "login") {
    const loginSchema = z.object({
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(4, "Password must be at least 4 characters")
        .max(32, "Password must contain less than 32 symbols"),
    });

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
    });

    return { register, handleSubmit, errors };
  }

  const accountSchema = z.object({
    fullName: z.string().min(1, "Full name must be at least 1 character"),
    email: z.string().email("Invalid email address"),
  });

  const passwordSchema = z
    .object({
      password: z
        .string()
        .min(4, "Password must be at least 4 characters")
        .max(32, "Password must contain less than 32 symbols"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });

  const accountForm = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
  });

  return { accountForm, passwordForm };
};
