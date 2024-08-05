"use client"
import { eventDefaultValues } from "@/@types"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EventSchema, onHandleSubmit } from "@/lib/validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Dropdown from "./Dropdown"

type EventFormProps = {
  userId: string
  type: "Criar" | "atualuzar"
}

const EventForm = ({ userId, type }: EventFormProps) => {
  const EventDefaultValues = eventDefaultValues

  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: EventDefaultValues,
  })

  return (
    <section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onHandleSubmit)}
          className="flex flex-col gap-5"
        >
          <section className="flex flex-col md:flex-row gap-5">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[20px] font-normal leading-[30px] tracking-[2%];">
                    Titulo do evento
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o titulo"
                      {...field}
                      className="h-10 text-[20px] font-normal leading-[30px] tracking-[2%]; focus-visible:ring-offset-0 placeholder:text-black px-4 border focus-visible:ring-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[20px] font-normal leading-[30px] tracking-[2%];">
                    Categoria
                  </FormLabel>
                  <FormControl>
                    <Dropdown
                      onChangeHandler={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </section>
  )
}

export default EventForm
