import { useTheme } from "../context/ThemeContext";

export default function ThemeDropdown() {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
}
