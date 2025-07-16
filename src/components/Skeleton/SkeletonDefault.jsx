// src/components/Skeleton/SkeletonDefault.jsx

import Skeleton from "./Skeleton";

const SkeletonDefault = () => {
  return (
    <div className="space-y-3">
      <Skeleton width="w-1/3" height="h-8" />
      <Skeleton width="w-2/3" height="h-8" />
      <Skeleton height="h-8" />
    </div>
  );
};

export default SkeletonDefault;
