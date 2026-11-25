import { useCallback, useState } from "react";
import JobAddModal from "../components/ui/JobAddModal";
import type { JobAddMode } from "../components/ui/JobAddModal";
import JobCard, { type JobType } from "../components/ui/JobCard";

const sampleJob: JobType = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  type: "t2i",
  model: "SD1.5",
  input_img_id: null,
  output_img_id: null,
  prompt_negative: "low quality, blurry, ugly, deformed",
  prompt_positive:
    "A beautiful anime character standing under a purple moon, detailed background, cinematic lighting",
  seed: 847291,
  steps: 30,
  state: "in_progress",
  queued_at: new Date("2026-11-25T19:00:00"),
  started_at: new Date("2026-11-25T19:00:05"),
  completed_at: null,
  duration_sec: null,
};

function QueuePage() {
  const [jobs, setJobs] = useState<JobType[]>([sampleJob]);
  const [modalMode, setModalMode] = useState<JobAddMode | null>(null);

  const addJobs = useCallback((newJobs: JobType[]) => {
    setJobs((currentJobs) => [...newJobs, ...currentJobs]);
  }, []);

  const closeModal = useCallback(() => {
    setModalMode(null);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-aizen-muted">
          {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setModalMode("single")}
            className="rounded-lg bg-aizen-purple px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-aizen-purple-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aizen-purple"
          >
            + Add
          </button>
          <button
            type="button"
            onClick={() => setModalMode("batch")}
            className="rounded-lg border border-aizen-purple/30 bg-aizen-purple/10 px-4 py-2 text-sm font-semibold text-aizen-purple transition-colors hover:bg-aizen-purple/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aizen-purple"
          >
            + Batch Add
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {modalMode && <JobAddModal mode={modalMode} onAdd={addJobs} onClose={closeModal} />}
    </div>
  );
}

export default QueuePage;
