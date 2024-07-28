import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Partners } from "@/components/partners"
import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-8 md:p-10 lg:p-20">
      <MaxWidthWrapper>
        <section className="w-full sm:pt-8">
          <aside className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                    Bem-vindo ao EventExperience
                  </h1>
                  <p className="text-base md:text-lg">
                    Organizamos seus eventos e transformamos em experiências
                    inesquecíveis
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button
                    size="lg"
                    asChild
                    className="button bg-[#E67E22] dark:bg-[#E67E22] w-full sm:w-fit"
                  >
                    <Link href="/events">Crie Eventos</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/home.jpg"
                  width={800}
                  height={800}
                  priority={true}
                  alt="Home image"
                  className="object-contain"
                />
              </div>
            </div>
          </aside>
        </section>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <section>
          <Partners />
        </section>
      </MaxWidthWrapper>
    </main>
  )
}
