interface ChevronDownProps {
  className?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({ className }) => (
  <svg
    width="6"
    height="5"
    viewBox="0 0 6 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M2.13398 4.5C2.51888 5.16667 3.48113 5.16667 3.86603 4.5L5.59808 1.5C5.98298 0.833333 5.50185 0 4.73205 0H1.26795C0.498148 0 0.0170237 0.833333 0.401924 1.5L2.13398 4.5Z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronDown;
