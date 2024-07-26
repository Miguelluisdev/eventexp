import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MaxWidthWrapper>
        <div> dickes</div>
        <div>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </main>
  )
}
