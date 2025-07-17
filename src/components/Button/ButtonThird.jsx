// src/components/Button/ButtonSecondary.jsx

import { useEffect, useState } from "react";
import SkeletonButton from "../Skeleton/SkeletonButton";

const ButtonThird = ({
  label,
  icon: Icon,
  type = "button",
  rounded = false,
  onClick = () => {},
  isRed = false,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonButton />;

  return (
    <button
      type={type}
      className={`flex items-center gap-1 rounded-full border border-neutral-400 hover:border-primary-200 active:border-primary-300 text-sm py-2 px-4 ${
        rounded ? "rounded-full" : "rounded-lg"
      } ${isRed ? "text-danger-200" : ""} `}
      onClick={onClick}
    >
      {Icon && <Icon className="size-4" />}
      <span>{label}</span>
    </button>
  );
};

export default ButtonThird;
