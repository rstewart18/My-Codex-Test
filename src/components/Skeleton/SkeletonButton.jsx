import Skeleton from "./Skeleton";

const SkeletonButton = ({ className = "" }) => (
  <Skeleton width="w-full" height="h-10" rounded="rounded-lg" className={className} />
);

export default SkeletonButton;
