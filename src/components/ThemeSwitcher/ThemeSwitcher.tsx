import "./ThemeSwitcher.scss";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {}

function ThemeSwitcher({}: Props) {
  const storeTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
  };

  const getTheme = () => {
    const activeTheme = localStorage.getItem("theme");
    if (greenInput?.current?.id === activeTheme) {
      greenInput.current.checked = true;
    } else if (pinkInput?.current?.id === activeTheme) {
      pinkInput.current.checked = true;
    }
  };

  const orangeInput = useRef<HTMLInputElement>(null);
  const greenInput = useRef<HTMLInputElement>(null);
  const pinkInput = useRef<HTMLInputElement>(null);

  // "!" lets ts know that it will NOT be null
  const handleOrangeColourClick = () => {
    console.log(orangeInput?.current?.id);
    storeTheme(orangeInput?.current?.id!);
  };
  const handleGreenColourClick = () => {
    console.log(greenInput?.current?.id);
    storeTheme(greenInput?.current?.id!);
  };
  const handlePinkColourClick = () => {
    console.log(pinkInput?.current?.id);
    storeTheme(pinkInput?.current?.id!);
  };

  // runs getTheme() when page loads similar to "componentDidMount()"
  useEffect(() => {
    getTheme();
  }, []);

  const themeSwitcherVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.form
        variants={themeSwitcherVariants}
        initial="hidden"
        animate="visible"
        className="theme-picker"
        action=""
      >
        <fieldset>
          <legend className="visually-hidden">Pick theme</legend>
          <label className="visually-hidden" htmlFor="orange">
            Orange
          </label>
          <input
            type="radio"
            name="theme"
            id="orange"
            defaultChecked
            ref={orangeInput}
            onClick={handleOrangeColourClick}
          />
          <label className="visually-hidden" htmlFor="green">
            Green
          </label>
          <input
            type="radio"
            name="theme"
            id="green"
            ref={greenInput}
            onClick={handleGreenColourClick}
          />
          <label className="visually-hidden" htmlFor="pink">
            Pink
          </label>
          <input
            type="radio"
            name="theme"
            id="pink"
            ref={pinkInput}
            onClick={handlePinkColourClick}
          />
        </fieldset>
      </motion.form>
    </>
  );
}

export default ThemeSwitcher;
