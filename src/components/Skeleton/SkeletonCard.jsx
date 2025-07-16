// src/components/Skeleton/SkeletonCard.jsx

import Skeleton from "./Skeleton";

const SkeletonCard = () => {
  return (
    <div className="space-y-4">
      <Skeleton width="w-1/3" height="h-8" />
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="space-y-2">
            <Skeleton height="h-40" rounded="rounded-lg" />
            <Skeleton width="w-3/4" />
            <Skeleton width="w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
