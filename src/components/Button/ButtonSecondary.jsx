// src/components/Button/ButtonSecondary.jsx

import { useState, useEffect } from "react";
import SkeletonButton from "../Skeleton/SkeletonButton";

const ButtonSecondary = ({
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
      className={`flex items-center gap-2 bg-white border border-neutral-400 hover:border-primary-200 active:border-primary-300  transition-all duration-300 text-sm font-semibold py-2.5 px-5 ${
        rounded ? "rounded-full" : "rounded-lg"
      } ${isRed ? "text-danger-200" : ""} `}
      onClick={onClick}
    >
      {Icon && <Icon className="size-4" />}
      <span>{label}</span>
    </button>
  );
};

export default ButtonSecondary;
