import { Logs } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet"

export default function NavLink() {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-around">
        <Link href="/">
          <h1 className="text-2xl font-bold">EventExperience</h1>
        </Link>
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link href="/event" className={`font-medium text-xl `}>
            Eventos
          </Link>
          <div className="flex items-center "></div>
          <span>
            <ModeToggle />
          </span>
        </div>
        <div className="flex lg:hidden lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
          <Sheet>
            <SheetTrigger>
              <span className="cursor-pointer">
                <Logs />
              </span>
            </SheetTrigger>
            <SheetContent className="border-none">
              <SheetHeader>
                <SheetDescription className="">
                  <div className="pb-10">
                      <Link href="/">
                        <h1 className="text-2xl font-bold">EventExperience</h1>
                      </Link>
                  </div>
                  <div className="ml-4 flex flex-col justify-start items-start m-3 lg:ml-6">
                    <Link
                      href="/event"
                      className={`buttonVariants({variant:"ghost"}) text-xl font-bold  `}
                    >
                      Eventos
                    </Link>
                    <span className="m-3">
                      <ModeToggle />
                    </span>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <span className="cursor-pointer px-5 "></span>
        </div>
      </div>
    </nav>
  )
}
