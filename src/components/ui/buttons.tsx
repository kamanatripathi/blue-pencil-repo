'use client';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'
interface Props extends ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary " | "tertial" ;
}

const Button = ({ children, variant = "primary", ...props }: Props) => {
    const baseStyles = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        lineHeight: '26px',
        borderRadius: '2px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        width: '189px',
        height: '30px',
      };
    
      const variantStyles = {
        primary: {
          ...baseStyles,
          bg: 'var(--btn-primary-color)',
          color: 'var(--btn-contrast-color)',
          border: 'none',
          _hover: {
            bg: "var(--btn-contrast-color)",
            color: "var(--btn-primary-color)",
            border: '2px solid var(--btn-secondary-color)',
          },
        },
        secondary: {
          ...baseStyles,
          bg: 'var(--btn-contrast-color)',
          color: 'var(--btn-secondary-color)',
          border: '2px solid var(--btn-secondary-color)',
          _hover: {
            bg: "var(--btn-secondary-color)",
            color:"var(--btn-contrast-color)"
          },
        },

        tertial : {
          ...baseStyles,
          bg: 'var(--btn-tertial-color)',
          color: 'var(--btn-secondary-color)',
          border: '2px solid var(--btn-secondary-color)',
          _hover: {
            bg: 'var(--btn-tertial-color)',
            color:"var(--btn-contrast-color)"
          },
        }
      };
  return (
    <ChakraButton {...props} variant={variant} {...variantStyles[variant]}  
    >
      {children}
    </ChakraButton>
  );
};

export default Button;