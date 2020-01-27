import { useEffect } from 'react';

export const useOnClickOutside = (ref: React.RefObject<HTMLElement>, handler: Function): void => {
  useEffect(() => {
    if (ref.current === null) return;
    const listener = (event: MouseEvent): void => {
      if (ref.current === null) return;
      if (ref.current.contains(event.target as Node)) {
        return;
      } else {
        handler();
      }
    };

    if (ref.current.ownerDocument === null) return;
    ref.current.ownerDocument.addEventListener('mousedown', listener);
    return (): void => {
      if (ref.current === null || ref.current.ownerDocument === null) return;
      ref.current.ownerDocument.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
