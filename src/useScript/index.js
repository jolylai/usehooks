import { useEffect, useState } from "react";

const cashedScript = [];

const index = src => {
  const [state, setState] = useState({
    loaded: false,
    error: false
  });

  useEffect(() => {
    if (cashedScript.includes(src)) {
      setState({ loaded: true, error: false });
    } else {
      cashedScript.push(src);
      const script = document.createElement("script");
      script.src = src;
      script.async = true;

      const onScripLoad = () => {
        setState({ loaded: true, error: false });
      };

      const onScripError = () => {
        const index = cashedScript.indexOf(src);
        if (index > -1) cashedScript.splice(index, 1);
        script.remove();

        setState({ loaded: true, error: true });
      };

      script.addEventListener("load", onScripLoad);
      script.addEventListener("error", onScripError);

      document.body.appendChild(script);
      return () => {
        script.removeEventListener("load", onScripLoad);
        script.removeEventListener("error", onScripError);
      };
    }
  }, [src]);

  return [state.loaded, state.error];
};

export default index;
