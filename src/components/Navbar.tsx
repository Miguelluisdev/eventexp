"use client"
import { useEffect, useState } from "react"
import NavLink from "./Navlink"
export const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader)

      return () => {
        window.removeEventListener("scroll", controlHeader)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 left-0 w-full] h-16 z-50 transition-transform  duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
     <NavLink/>
    </header>
  )
}