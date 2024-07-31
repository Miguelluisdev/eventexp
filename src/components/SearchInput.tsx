import { Search } from "lucide-react"
import { Input } from "./ui/input"

export default function SearchInput() {
  return (
    <section className="relative w-full max-w-sx">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Busque por nome..."
        className="w-full rounded-lg outline-none pl-8"
      />
    </section>
  )
}
