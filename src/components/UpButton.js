import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

function UpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowButton(scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={`up-button ${showButton ? 'up-button-show' : ''}`} onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </button>
  );
}

export default UpButton;
