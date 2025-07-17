import Skeleton from "./Skeleton";

const SkeletonIcon = ({ size = "h-6 w-6", className = "" }) => (
  <Skeleton width={size} height={size} rounded="rounded-full" className={className} />
);

export default SkeletonIcon;
