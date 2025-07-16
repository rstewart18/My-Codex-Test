import clsx from "clsx";

const StatsWidget = ({ label, value, className }) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-lg border border-neutral-400 bg-white", className
      )}
    >
      <p className="text-xs text-secondary">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export default StatsWidget;
