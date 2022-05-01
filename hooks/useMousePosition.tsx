import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    const updatePosition = (e: any) => {
      const { clientX, clientY } = e;
      setPosition({ clientX, clientY });
    };

    document.addEventListener('mousemove', updatePosition, false);
    document.addEventListener('mouseenter', updatePosition, false);

    return () => {
      document.removeEventListener('mousemove', updatePosition, false);
      document.removeEventListener('mouseenter', updatePosition, false);
    };
  }, []);
  return position;
};

export default useMousePosition;
