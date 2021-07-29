import { useEffect, useState } from "react";

function useScrollYOffset() {
  const [offset, setOffset] = useState(0);
  const handleScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return offset;
}
export default useScrollYOffset;
