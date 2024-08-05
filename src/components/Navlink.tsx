import { Separator } from "@/components/ui/separator"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Logs } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet"

export default function NavLink() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-around">
        <Link href="/">
          <h1
            className={`text-2xl font-bold ${
              isActive("/") ? "text-[#F2CB05]" : ""
            }`}
          >
            EventExperience
          </h1>
        </Link>
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link
            href="/events/create"
            className={`font-medium text-xl ${
              isActive("/events/create") ? "text-[#F2CB05]" : ""
            }`}
          >
            Criar evento
          </Link>
          <div className="flex items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="text-md font-medium bg-[#F2CB05] dark:bg-[#F2CB05]">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton defaultOpen />
            </SignedIn>
          </div>
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
                  <div className="pb-3">
                    <Link href="/">
                      <h1
                        className={`text-2xl text-left font-bold ${
                          isActive("/") ? "text-[#F2CB05]" : ""
                        }`}
                      >
                        EventExperience
                      </h1>
                    </Link>
                  </div>
                  <Separator className="bg-[#333333]" />
                  <div className="ml-4 flex flex-col justify-start items-start m-3 lg:ml-6">
                    <Link
                      href="/events/create"
                      className={`buttonVariants({variant:"ghost"}) text-xl font-bold ${
                        isActive("/events/create") ? "text-[#F2CB05]" : ""
                      }`}
                    >
                      Criar evento
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="flex items-center px-5">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="text-md font-medium bg-[#F2CB05]] dark:bg-#F2CB05]]">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <span className="">
              <ModeToggle />
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
