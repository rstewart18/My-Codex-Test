import Skeleton from "./Skeleton";
import SkeletonIcon from "./SkeletonIcon";
import SkeletonButton from "./SkeletonButton";

const SkeletonSidebar = ({ collapsed = false }) => {
  return (
    <aside
      className={`h-screen fixed top-0 left-0 bg-neutral-200 border-r-2 border-neutral-300 p-5 flex flex-col justify-between ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      <div>
        <div className={`flex items-center ${collapsed ? "justify-center" : "justify-start"} gap-2`}>
          <SkeletonIcon size="h-10 w-10" />
          {!collapsed && <Skeleton width="w-1/3" height="h-6" />}
        </div>
        <div className="mt-12 space-y-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className={`flex items-center ${collapsed ? "justify-center" : "justify-start"} gap-2`}>
              <SkeletonIcon />
              {!collapsed && <Skeleton width="w-1/2" />}
            </div>
          ))}
        </div>
      </div>
      <SkeletonButton />
    </aside>
  );
};

export default SkeletonSidebar;
