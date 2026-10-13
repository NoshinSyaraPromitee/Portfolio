import { Suspense, useEffect, useRef, useState } from "react";

function LazySection({ importFn, minHeight = 650, fallback = null, ...props }) {
  const [Comp, setComp] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !Comp) {
      importFn().then((mod) => setComp(() => mod.default));
    }
  }, [isVisible, Comp, importFn]);

  if (!Comp) {
    return <div ref={ref} style={{ minHeight }} />;
  }

  return (
    <Suspense fallback={fallback ?? <div style={{ minHeight }} />}>
      <Comp {...props} />
    </Suspense>
  );
}

export default LazySection;
