import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // Precise Small Gold Arrow (#D4AF37)
    const smallGoldArrow = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='%23D4AF37' stroke='white' stroke-width='0.5'><path d='M7 2l12 12.8l-4.4 1.1l4.4 6.1l-2.8 2l-4.4-6.1l-4.8 4.1z'/></svg>"), auto`;

    // Force the arrow on the body
    document.body.style.cursor = smallGoldArrow;

    // Force the arrow on ALL interactive elements, overriding the default 'pointer'
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: ${smallGoldArrow} !important;
      }
      
      /* Specific overrides for common interactive elements to ensure no hand appears */
      a, button, [role="button"], input, select, textarea, .interactive, .cursor-pointer {
        cursor: ${smallGoldArrow} !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = 'default';
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default CustomCursor;