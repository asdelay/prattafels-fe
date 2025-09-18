import React, { useRef } from "react";

const Typer = ({
  text,
  delay,
  beforeRender,
}: {
  text: string;
  delay: number;
  beforeRender?: number;
}) => {
  const [renderedText, setRenderedText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const hasRendered = useRef(false);
  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setRenderedText((prev) => prev + text[index]);
        setIndex(index + 1);
        hasRendered.current = true;
      }, (!hasRendered.current && beforeRender) || delay);

      return () => clearTimeout(timeout);
    }
  }, [index, text, delay]);
  return <p>{renderedText}</p>;
};

export default Typer;
