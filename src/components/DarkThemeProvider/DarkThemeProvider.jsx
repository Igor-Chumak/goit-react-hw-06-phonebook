import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import { getModeTheme } from 'store/selectors';

const DarkThemeProvider = ({ children }) => {
  const modeTheme = useSelector(getModeTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...(modeTheme === 'dark' ? darkTheme : lightTheme),
      }}
    >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
