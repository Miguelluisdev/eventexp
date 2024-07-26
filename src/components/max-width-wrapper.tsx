"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { variant1 } from "./animation"

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <motion.div
      variants={variant1(0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div
        className={cn(
          "max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full",
          className,
        )}
      >
        {children}
      </div>
    </motion.div>
  )
}