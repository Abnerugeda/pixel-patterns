import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/useThemeStore";
import { THEMES } from "@/utils/themes";
import { Check, PaintBucketIcon } from "lucide-react";
import Prism from "prismjs";
import React__default, { useState } from "react";
import { Button } from "./ui";
import * as themes from "@react-email/code-block";

type ThemeType = Record<
  string | "base" | keyof Prism.Grammar,
  React__default.CSSProperties
>;

export const ThemeModal = () => {
  const { setTheme, selectedThemeName } = useThemeStore();
  const [value, setValue] = useState(selectedThemeName || "");
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="ml-auto bg-gradient-to-r from-blue-900 to-blue-700 text-white border-0 hover:opacity-80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-900/50 flex items-center gap-2 px-4 py-2 capitalize"
        >
          {value}
          <PaintBucketIcon size={18} className="animate-bounce" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-[#0A1929] border border-blue-900/50 shadow-lg shadow-blue-900/20">
        <Command className="bg-transparent">
          <CommandInput
            placeholder="Search theme..."
            className="text-white placeholder:text-blue-400/50 [&_svg]:text-white"
          />
          <CommandList className="bg-[#0A1929] text-white custom-scrollbar max-h-[300px] overflow-y-auto">
            <CommandEmpty className="text-white p-2 text-sm">
              No theme found.
            </CommandEmpty>
            <CommandGroup>
              {THEMES.map((t) => (
                <CommandItem
                  key={t}
                  value={t}
                  onSelect={(currentValue) => {
                    const selectedTheme =
                      themes[currentValue as keyof typeof themes];
                    setValue(currentValue === value ? "" : currentValue);
                    setTheme(selectedTheme as ThemeType);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-[#051018] hover:text-blue-200 transition-colors truncate text-blue-100 custom-scrollbar ${
                    value === t ? "bg-blue-800/40" : ""
                  }`}
                >
                  {t}
                  <Check
                    className={cn(
                      "ml-auto text-blue-400",
                      value === t ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
