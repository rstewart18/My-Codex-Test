// src/components/Skeleton.jsx

const Skeleton = ({
  width = "w-full",
  height = "h-4",
  rounded = "rounded",
  className = "",
}) => {
  return (
    <div
      className={`skeleton ${width} ${height} ${rounded} ${className} mb-5`}
    ></div>
  );
};

export default Skeleton;
