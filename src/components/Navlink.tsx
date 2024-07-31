import { usePathname } from 'next/navigation'
import { Separator } from "@/components/ui/separator"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link"
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
      <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
        <Link href="/">
          <h1 className={`text-2xl font-bold ${isActive('/') ? 'text-[#E67E22]' : ''}`}>EventExperience</h1>
        </Link>
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link href="/events" className={`font-medium text-xl ${isActive('/events') ? 'text-[#E67E22]' : ''}`}>
            Eventos
          </Link>
          <div className="flex items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="text-md font-medium bg-[#E67E22] dark:bg-[#E67E22]">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton showName defaultOpen />
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
                <Image src="/menu-bar.png" width={30} height={30} alt='menu icon'  />
              </span>
            </SheetTrigger>
            <SheetContent className="border-none">
              <SheetHeader>
                <SheetDescription className="">
                  <div className="pb-3">
                    <Link href="/">
                      <h1 className={`text-2xl text-left font-bold ${isActive('/') ? 'text-[#E67E22]' : ''}`}>
                        EventExperience
                      </h1>
                    </Link>
                  </div>
                  <Separator className='bg-[#333333]'  />
                  <div className="ml-4 flex flex-col justify-start items-start m-3 lg:ml-6">
                    <Link
                      href="/events"
                      className={`buttonVariants({variant:"ghost"}) text-xl font-bold ${isActive('/events') ? 'text-[#E67E22]' : ''}`}
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
          <div className="flex items-center px-5">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="text-md font-medium bg-[#E67E22] dark:bg-[#E67E22]">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton showName />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  )
}
