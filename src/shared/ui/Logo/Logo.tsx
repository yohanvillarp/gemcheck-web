

interface PropsLogo {
  size?: number;
  className?: string;
}

export const Logo = ({ size = 24, className = '' }: PropsLogo) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <polygon
        points="30,20 70,20 90,45 50,90 10,45"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinejoin="miter"
      />
      <polyline
        points="30,55 45,70 75,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};
