import { useRef, useEffect } from "react";
/**
 * Set the name that appears on the window tab
 *
 * @param title name of the page
 * @param prevailOnUnmount check if title has changed. default to false
 */
function setDocTitle(title: string, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
}

export default setDocTitle;
