import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ICategory } from "@/lib/database/models/category.model"
import { startTransition, useState } from "react"
import { Input } from "./ui/input"

type DropdownProps = {
  value?: string
  onChangeHandler?: () => void
}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [newCategory, setNewCategory] = useState("")

    const handleAddCategory = () => {
        
    }

  
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="h-10 text-[20px] font-normal leading-[30px] tracking-[2%] focus-visible:ring-offset-0 placeholder:text-black px-4 border focus-visible:ring-transparent">
        <SelectValue placeholder="Categoria" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="font-normal py-3 cursor-pointer"
            >
              {category.name}
            </SelectItem>
          ))}

        <AlertDialog>
          <AlertDialogTrigger className="flex w-full rounded-sm text-[14px] text-[#5EBAF2] font-medium leading-[20px] py-3 pl-8 ">
            Nova Categoria
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Adicione uma nova categoria</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  placeholder="Digite a categoria "
                  className="h-10 text-[20px] font-normal leading-[30px] tracking-[2%]; focus-visible:ring-offset-0 placeholder:text-black px-4 border focus-visible:ring-transparent"
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={() => startTransition(handleAddCategory) }>Adicionar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  )
}

export default Dropdown
