import { RemoveUrlQueryParams, UrlQueryParams } from "@/@types/index"
import { clsx, type ClassValue } from "clsx"
import qs from "query-string"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    year: "numeric",
    day: "numeric",
  }

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "pt-BR",
    dateTimeOptions,
  )

  const formattedDate: string = new Date(dateString).toLocaleString(
    "pt-BR",
    dateOptions,
  )

  const formattedTime: string = new Date(dateString).toLocaleString(
    "pt-BR",
    timeOptions,
  )

  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  }
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file)

export const formatPrice = (price: string) => {
  const amount = parseFloat(price)
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    // verificar o amount / 10 após criação dos products
  }).format(amount / 10)

  return formattedPrice
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params)

  currentUrl[key] = value

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true },
  )
}

export function removeKeysFromQuery({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params)

  keysToRemove.forEach((key) => {
    delete currentUrl[key]
  })

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true },
  )
}

export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === "string" ? error : JSON.stringify(error))
}
