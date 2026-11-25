import DataField from "./DataField";

export type Guid = string;

export interface JobType {
  id: Guid;
  type: string;
  model: string;

  input_img_id: string | null;
  output_img_id: string | null;

  prompt_positive: string;
  prompt_negative: string;
  seed: number;
  steps: number;

  state: string;
  queued_at: Date;
  started_at: Date | null;
  completed_at: Date | null;
  duration_sec: number | null;
}

function JobCard({ job }: { job: JobType }) {
  return (
    <article className="rounded-2xl border border-aizen-border bg-aizen-panel p-2 transition-colors sm:p-5">
      <dl className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <DataField
          label="ID"
          value={<span className="break-all font-mono text-xs">{job.id}</span>}
        />
        <DataField label="Type" value={job.type} />
        <DataField label="Gen AI Model" value={job.model} />
        <DataField label="Status" value={job.state} />
        <DataField label="Queued At" value={job.queued_at.toDateString()} />
      </dl>
    </article>
  );
}

export default JobCard;
