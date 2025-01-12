import { useEffect, useState } from "react";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPen } from "react-icons/fa6";
import "./pxtorem.css";
const PxToRemConvertor = () => {
  const [inputPx, setInputPx] = useState("");
  const [inputRem, setInputRem] = useState("");
  const [baseFontSize, setBaseFontSize] = useState(16);
  const [togglerTitleText, setTogglerTitleText] =
    useState("PIXELS"); /*Current input-title*/
  const [toggler, setToggler] = useState("px");

  const handlePxChange = (value) => {
    setInputPx(value);

    if (!isNaN(value) && value !== "") {
      const remValue = (parseFloat(value) / baseFontSize).toFixed(2);
      setInputRem(remValue);
    } else {
      setInputRem("");
    }
  };

  const handleRemChange = (value) => {
    setInputRem(value);
    if (!isNaN(value) && value !== "") {
      const pxValue = parseFloat(value) * baseFontSize.toFixed(2);
      setInputPx(pxValue);
    } else {
      setInputPx("");
    }
  };

  const handleClick = () => {
    console.log(toggler);
    if (toggler === "px") {
      const remValue = inputPx
        ? (parseFloat(inputPx) / baseFontSize).toFixed(2)
        : "";
      setInputRem(remValue);
    } else if (toggler === "rem") {
      const pxValue = inputRem
        ? (parseFloat(inputRem) * baseFontSize).toFixed(2)
        : "";
      setInputPx(pxValue);
    }

    setToggler((prev) => (prev === "px" ? "rem" : "px"));
    setTogglerTitleText((prev) => (prev === "PIXELS" ? "REM" : "PIXELS"));
  };

  useEffect(() => {
    if (toggler === "px" && inputPx) {
      const remValue = (parseFloat(inputPx) / baseFontSize).toFixed(2);
      setInputRem(remValue);
    } else if (toggler === "rem" && inputRem) {
      const pxValue = (parseFloat(inputRem) * baseFontSize).toFixed(2);
      setInputPx(pxValue);
    }
  }, [baseFontSize, toggler]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <h1 className="heading">PX to REM converter</h1>
        <div className="input-container">
          <div className="input-wrapper pixel">
            <div className="input-title">
              {togglerTitleText === "PIXELS" ? "PIXELS" : "REM"}
            </div>
            <label htmlFor="pixel">
              {togglerTitleText === "PIXELS" ? "px" : "rem"}
            </label>
            <input
              type="text"
              id="pixel"
              value={toggler === "px" ? inputPx : inputRem}
              onChange={(e) =>
                toggler === "px"
                  ? handlePxChange(e.target.value)
                  : handleRemChange(e.target.value)
              }
            />
            <div className="input-icon">
              <MdKeyboardDoubleArrowLeft />
              <MdKeyboardDoubleArrowRight />
            </div>
          </div>
          <button className=" toggler" onClick={handleClick}>
            <TbArrowsDoubleSwNe />
          </button>
          <div className="input-wrapper rem">
            <div className="input-title">
              {togglerTitleText === "REM" ? "PIXELS" : "REM"}
            </div>
            <label htmlFor="rem">
              {togglerTitleText === "REM" ? "px" : "rem"}
            </label>
            <input
              type="text"
              id="rem"
              value={toggler === "rem" ? inputPx : inputRem}
              onChange={(e) =>
                toggler === "rem"
                  ? handlePxChange(e.target.value)
                  : handleRemChange(e.target.value)
              }
            />
            <div className="input-icon">
              <MdKeyboardDoubleArrowLeft />
              <MdKeyboardDoubleArrowRight />
            </div>
          </div>
        </div>
        <div className="change-unit">
          <p className="message">
            Calculation based on a root font-size of {baseFontSize}
            <FaPen
              className="edit-unit"
              onClick={() => {
                const newBaseFont = prompt(
                  "Enter new base font size in px:",
                  baseFontSize
                );
                if (newBaseFont && !isNaN(newBaseFont)) {
                  setBaseFontSize(parseFloat(newBaseFont));
                }
              }}
            />{" "}
            pixel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PxToRemConvertor;
