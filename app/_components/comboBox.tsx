"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxDemoProps {
  lists: { value: string; label: string; }[];
  title: string;
  onSelect: (value: string) => void;
}

export function ComboboxDemo({ lists, title, onSelect }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? lists.find((list) => list.value === value)?.label
            : `Välj ${title}`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Sök efter ${title}`} />
          <CommandList>
            <CommandEmpty>Ingen {title} hittades...</CommandEmpty>
            <CommandGroup>
              {lists.map((list) => (
                <CommandItem
                  key={list.value}
                  value={list.value}
                  onSelect={(currentValue) => {
                    if (currentValue === null || currentValue === "none") {
                      // Återställ till standardtext
                      setValue("");
                      onSelect("none"); // Skickar "none" till handleFilterChange
                    } else {
                      setValue(currentValue);
                      onSelect(currentValue);
                    }
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === list.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {list.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
