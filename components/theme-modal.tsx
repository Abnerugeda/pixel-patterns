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
import { useThemeStore } from "@/store/useThemeStore";
import { Check, ChevronsUpDown, PaintBucketIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui";
import { cn } from "@/lib/utils";
import { THEMES } from "@/utils/themes";

export const ThemeModal = () => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { theme, setTheme } = useThemeStore();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="ml-auto bg-gradient-to-r from-blue-900 to-blue-700 text-white border-0 hover:opacity-80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-900/50 flex items-center gap-2 px-4 py-2"
        >
          Theme
          <PaintBucketIcon size={18} className="animate-bounce" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-[#0A1929] border border-blue-900/50 shadow-lg shadow-blue-900/20">
        <Command className="bg-transparent">
          <CommandInput
            placeholder="Search theme..."
            className="text-white placeholder:text-blue-400/50 [&_svg]:text-white"
          />
          <CommandList className="bg-[#0A1929] text-white">
            <CommandEmpty className="text-blue-400">
              No theme found.
            </CommandEmpty>
            <CommandGroup>
              {THEMES.map((t) => (
                <CommandItem
                  key={t}
                  value={t}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setTheme(currentValue);
                    setOpen(false);
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
  // <div className="flex flex-col items-center justify-center relative z-50">
  //   <Button
  //     onClick={() => setIsThemeOpen(!isThemeOpen)}
  //     variant="outline"
  //     className="ml-auto bg-gradient-to-r from-blue-900 to-blue-700 text-white border-0 hover:opacity-80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-900/50 flex items-center gap-2 px-4 py-2 relative"
  //   >
  //     Theme
  //     <PaintBucketIcon size={18} className="animate-bounce" />
  //   </Button>
  //   {isThemeOpen && (
  //     <div className="absolute top-full mt-2 w-48 bg-[#1F1F1F] rounded-lg shadow-lg overflow-hidden z-[50] max-h-[300px] overflow-y-auto">
  //       {THEMES.map((t) => (
  //         <button
  //           key={t}
  //           onClick={() => setTheme(t)}
  //           className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
  //             theme === t ? "bg-base-200" : "hover:bg-base-200/50"
  //           }`}
  //         >
  //           {t}
  //         </button>
  //       ))}
  //     </div>
  //   )}
  // </div>
};
