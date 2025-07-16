const BarChartSimple = ({ data }) => {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex items-end gap-3 h-32 w-full">
      {data.map((d, idx) => (
        <div key={idx} className="flex flex-col items-center flex-1">
          <div
            className="w-full rounded-t-md bg-primary-200"
            style={{ height: `${(d.value / max) * 100}%` }}
          />
          <span className="mt-1 text-xs text-center truncate w-full">
            {d.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BarChartSimple;
