// import { useEffect, useState } from "react";
// import Translation from "./Data.json";

// function EnglishToKhmer() {
//   const [language, setLanguage] = useState("khmer");
//   const [content, setContent] = useState({});

//   useEffect(() => {
//     if (language == "english") {
//       setContent(Translation.english);
//     } else if (language == "khmer") {
//       setContent(Translation.tamil);
//     }
//   });

//   return (
//     <div>
//       <select
//         value={language}
//         onChange={(e) => {
//           setLanguage(e.target.value);
//         }}
//       >
//         <option>english</option>
//         <option>tamil</option>
//         <option>hindi</option>
//       </select>

//       <h2>{content.Title}</h2>
//       <span>{content.Description}</span>
//     </div>
//   );
// }
// export default TranslationEngToTamil;
