import { useEffect, useState } from "react";

export default function useObserver(ref) {
  const [isIntersecting, setIntersection] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const Io = new IntersectionObserver(([entry]) =>
      setIntersection(entry.isIntersecting)
    );

    Io.observe(ref.current);
    return () => {
      Io.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
