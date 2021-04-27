import { useState } from "react";

export default function useToggle() {
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(!active);
  }

  return [active, handleToggle];
}
