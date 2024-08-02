import EventForm from "@/components/EventForm"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { auth } from "@clerk/nextjs/server"

export default function CreateEvent() {
  const { sessionClaims } = auth()

  const userId = sessionClaims?.userId as string

  return (
    <main className="flex min-h-screen mt-5 flex-col items-center p-6 sm:p-8 md:p-10 lg:p-20">
      <section>
        <h1 className="text-2xl tracking-tighter sm:text-3xl xl:text-4xl">
          Crie seu eventos
        </h1>
      </section>
      <MaxWidthWrapper>
        <section className="w-full sm:pt-8 container mt-5 ">
          <EventForm userId={userId} type="Criar" />
        </section>
      </MaxWidthWrapper>
    </main>
  )
}
