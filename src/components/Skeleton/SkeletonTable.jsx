export const SkeletonTable = ({ headerCount }) => (
  <tr className="border-t border-neutral-300">
    {Array.from({ length: headerCount }).map((_, index) => (
      <td key={index}>
        <div className="skeleton h-6 w-3/5 rounded" />
      </td>
    ))}
  </tr>
);