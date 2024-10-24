import React, { useContext } from 'react';

// Create a ThemeContext with a default value of 'light'
const ThemeContext = React.createContext('light');

function Context() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // Use the ThemeContext to get the current theme
  const theme = useContext(ThemeContext);
  return <button className={theme}>Theme Button</button>;
}

export default Context;
