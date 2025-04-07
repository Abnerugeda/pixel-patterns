import * as themes from "@react-email/code-block";
import { create } from "zustand";
import * as React from "react";
import React__default from "react";
import Prism from "prismjs";

type ThemeType = Record<
  string | "base" | keyof Prism.Grammar,
  React__default.CSSProperties
>;

interface ThemeStore {
  theme: ThemeType;
  selectedThemeName: string;
  setTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: themes.shadesOfPurple as ThemeType,
  selectedThemeName: "shadesOfPurple",
  setTheme: (theme: ThemeType) => {
    set({ theme, selectedThemeName: theme.toString() });
  },
}));
