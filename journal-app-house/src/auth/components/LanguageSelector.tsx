import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export const LanguageSelector = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("es");
  
    const changeLanguage = (lang: any) => {
      setSelectedLanguage(lang);
      setIsOpen(false);
    };
  
    const languages = [
      { code: "es", name: "Español (Ecuador)", flag: "circle-flags:ec" },
      {
        code: "en",
        name: "English (United States)",
        flag: "circle-flags:lang-en-us",
      },
    ];

  return (
    <div className="absolute top-4 left-8 flex gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-transparent border-none cursor-pointer text-2xl"
          title="Select Language"
        >
          {
            <Icon
              icon={
                languages.find((lang: any) => lang.code === selectedLanguage)
                  ?.flag || "circle-flags:ec"
              }
              width="50"
              height="50"
            />
          }
        </button>

        {isOpen && (
          <ul className="absolute mt-2 w-48 left-9 top-10  border rounded-lg shadow-lg">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="flex items-center px-4 py-2 hover:bg-gray-600 cursor-pointer"
              >
                <span>{lang.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

  )
}
