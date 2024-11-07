import { RefObject, useEffect, useState } from 'react';

export default function useIsInView(
  refObject: RefObject<HTMLElement> | null,
  rootMargin: string = '0px',
  runOnce: boolean,
): boolean {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin },
    );

    if (refObject!.current) {
      observer.observe(refObject!.current);
    }

    if (isVisible && runOnce) {
      observer.unobserve(refObject!.current!);
    }

    return () => {
      if (refObject && refObject.current) observer.unobserve(refObject.current);
    };
  }, []);

  return isVisible;
}
