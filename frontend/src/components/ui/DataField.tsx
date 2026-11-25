import type { ReactNode } from "react";

interface DataFieldProps {
  label: string;
  value: ReactNode;
}

function DataField({ label, value }: DataFieldProps) {
  return (
    <div className="flex w-full min-w-0 max-w-full flex-col gap-2 sm:w-auto sm:min-w-32 sm:flex-[1_1_auto]">
      <dt className="text-[10px] text-center font-semibold uppercase tracking-[0.16em] text-aizen-muted">
        {label}
      </dt>
      <dd className="flex min-h-10 min-w-0 items-center rounded-lg border border-aizen-purple/20 bg-aizen-purple/10 px-3 py-2 text-sm font-medium text-aizen-text">
        {value}
      </dd>
    </div>
  );
}

export default DataField;
