import React from 'react';

function useClickOutside(ref: any, cb: { (): void; (): void }) {
  React.useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
export default useClickOutside;
