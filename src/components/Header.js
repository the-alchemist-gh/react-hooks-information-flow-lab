import React from "react";

function Header ({onDarkModeClick, newMode}){

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // function handleDarkModeClick() {
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // }
  // function handleClick(){
  //   return onDarkModeClick()
  // }


  return (
    <div>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {newMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  )
}

export default Header;