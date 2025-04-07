import { create } from "zustand";

interface ThemeStore {
  theme: any;
  setTheme: (theme: any) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: (localStorage.getItem("codeTheme") || "shadesOfPurple") as any,
  setTheme: (theme) => {
    localStorage.setItem("codeTheme", theme);
    set({ theme });
  },
}));
