"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface SelectContextValue {
  value?: string
  onValueChange?: (value: string) => void
}

const SelectContext = React.createContext<SelectContextValue>({})

interface SelectProps {
  children: React.ReactNode
  name?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

const Select = ({ children, name, defaultValue, onValueChange }: SelectProps) => {
  const [value, setValue] = React.useState(defaultValue)

  const handleValueChange = (newValue: string) => {
    setValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <SelectContext.Provider value={{ value, onValueChange: handleValueChange }}>
      {name && <input type="hidden" name={name} value={value} />}
      {children}
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { id?: string }
>(({ className, children, id, ...props }, ref) => {
  const [open, setOpen] = React.useState(false)

  return (
    <button
      type="button"
      ref={ref}
      id={id}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { value } = React.useContext(SelectContext)

  return <span>{value || placeholder}</span>
}

const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md">
      <div className="p-1">{children}</div>
    </div>
  )
}

const SelectItem = ({
  value,
  children,
}: {
  value: string
  children: React.ReactNode
}) => {
  const { onValueChange } = React.useContext(SelectContext)

  return (
    <div
      className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
      onClick={() => onValueChange?.(value)}
    >
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
