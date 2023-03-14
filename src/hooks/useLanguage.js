import React from "react";
export default function useLanguage(defaultLanguage = "en") {
  const [language, setLanguage] = React.useState(
    window.localStorage.getItem("language") || defaultLanguage
  );

  React.useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  function changeLanguage(event) {
    setLanguage(event.target.value);
  }

  return [language, changeLanguage];
}
