import { useRef } from "react";
import { shuffleArray } from "../utils";
export default function Options({
  options,
  onSelect,
  answerState,
  selectedOption,
}) {
  const shuffledOptions = useRef();
  if (!shuffledOptions.current) {
    shuffledOptions.current = shuffleArray(options);
  }

  return (
    <ul id="answers">
      {shuffledOptions.current.map((option) => {
        const isSelected = selectedOption === option;
        let optionsCssClass = "";
        if (isSelected && answerState === "answered") {
          optionsCssClass = "selected";
        } else if (
          isSelected &&
          (answerState === "correct" || answerState === "wrong")
        ) {
          optionsCssClass = answerState;
        }
        return (
          <li key={option} className="answer">
            <button
              onClick={() => onSelect(option)}
              className={optionsCssClass}
              disabled={answerState !== ""}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
