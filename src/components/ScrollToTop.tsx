import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isHomePath } from '../constants/routes';
import { scrollToElementById } from '../utils/scrollToSection';

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const scrollTarget = (state as { scrollTo?: string } | null)?.scrollTo;

    if (isHomePath(pathname) && scrollTarget) {
      const timeoutId = window.setTimeout(() => {
        if (!scrollToElementById(scrollTarget)) {
          window.scrollTo(0, 0);
        }
      }, 100);
      return () => window.clearTimeout(timeoutId);
    }

    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
