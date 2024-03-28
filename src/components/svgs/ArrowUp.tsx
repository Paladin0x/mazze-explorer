interface ArrowUpProps {
  className?: string;
}

const ArrowUp: React.FC<ArrowUpProps> = ({ className }) => (
  <svg
    width="8"
    height="15"
    viewBox="0 0 8 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M4.35355 0.646446C4.15829 0.451184 3.84171 0.451184 3.64645 0.646446L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 15V1H3.5V15H4.5Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowUp;
