import { z } from "zod"

export const EventSchema = z.object({
  title: z.string().min(3, {
    message: "o titulo requer pelo menos 3 caracteres",
  }),

  description: z
    .string()
    .min(3, {
      message: "a descroção requer pelo menos 3 caracteres",
    })
    .max(300, "maximo de caracteres atingido "),

  location: z
    .string()
    .min(3, {
      message: "o titulo requer pelo menos 3 caracteres",
    })
    .max(300, "maximo se caracteres atingido "),
  imageUrl: z.string().min(3),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
})


export function onHandleSubmit(values: z.infer<typeof EventSchema>) {}