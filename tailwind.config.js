/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      based: "#EC7449",
      "based-1": "#FCD567",
      "based-2": "#63B3ED",
      "based-3": "#BEE3F8",
      "based-4": "#F7B311",
      "category-1": "#322659",
      "category-2": "#9F7AEA",
      "category-3": "#1A365D",
      "category-4": "#3182CE",
      "category-5": "#171923",
      slate: "#D9D9D9",
      "slate-2": "#969292",
      "dark-slate": "#8A8787",
      white: "#FFFFFF",
      black: "#000000",
      hero: "#fbfbfb",
      shadowBased: "#854934",
      card: "#D9E9F8",
      landing: "#111A28",
      quest: "#171923",
      "quest-1": "#F2A100",
      rightSelected: "#00B41D",
      wrongSelected: "#E92E27",
      error: "#FF8E8A",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
        magmawave: ["Magmawave Caps", "sans-serif"],
      },
      keyframes: {
        hero: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
      },
      animation: {
        hero: "hero 5s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
