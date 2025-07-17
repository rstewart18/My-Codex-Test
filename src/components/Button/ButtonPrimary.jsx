// src/components/Button/ButtonPrimary.js

import { useEffect, useState } from "react";
import SkeletonButton from "../Skeleton/SkeletonButton";

const ButtonPrimary = ({ label, icon: Icon, type = "button", onClick }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonButton />;

  return (
    <button
      type={type}
      className="flex items-center gap-2 bg-primary-200 hover:bg-primary-300 border border-primary-200 hover:border-primary-300 active:bg-secondary-300 active:border-secondary-300 transition-all duration-300 rounded-lg text-sm font-semibold text-white py-2 px-5"
      onClick={onClick}
    >
      {Icon && <Icon className="size-4" />}
      <span>{label}</span>
    </button>
  );
};

export default ButtonPrimary;
