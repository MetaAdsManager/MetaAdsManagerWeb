import { useState } from 'react';
interface TypeTheme {
  theme: 'light' | 'dark' | 'auto';
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
}
const useThemeChange = () => {
  const [theme, setTheme] = useState<TypeTheme['theme']>('light');
  const changeTheme = (t: TypeTheme['theme']) => {
   setTheme(t);
  };
  return {
   theme: theme,
   changeTheme
  };
};
export default useThemeChange;