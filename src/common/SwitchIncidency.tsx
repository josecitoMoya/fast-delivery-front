"use client";
import "../styles/profileState.css";

interface SwitchIncidencyProps {
  state: boolean | undefined;
  onChange: (newValue: boolean) => void;
}

const SwitchIncidency: React.FC<SwitchIncidencyProps>  = ({ state, onChange }) => {

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === "si";
    onChange(newValue);
  };

  const siClass = state === true ? "selected-no" : "";
  const noClass = state === false ? "selected-si" : "";

  return (
    <div className="mydict mr-3">
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            value={"si"}
            checked={state === true}
            onChange={(e) => {
              handleOptionChange(e);
            }}
            
          />
          <span className={siClass}>Si</span>
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value={"no"}
            onChange={(e) => {
              handleOptionChange(e);
            }}
            checked={state === false}
          />
          <span className={noClass}>No</span>
        </label>
      </div>
    </div>
  );
};
export default SwitchIncidency;
