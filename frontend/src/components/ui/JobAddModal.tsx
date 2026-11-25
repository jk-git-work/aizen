import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import type { JobType } from "./JobCard";

export type JobAddMode = "single" | "batch";

interface JobAddModalProps {
  mode: JobAddMode;
  onAdd: (jobs: JobType[]) => void;
  onClose: () => void;
}

const inputClassName =
  "w-full rounded-lg border border-aizen-border bg-aizen-bg px-3 py-2 text-sm text-aizen-text placeholder:text-aizen-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aizen-purple";

function JobAddModal({ mode, onAdd, onClose }: JobAddModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [prompt, setPrompt] = useState("");
  const [batchPrompts, setBatchPrompts] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [model, setModel] = useState("SD1.5");
  const [steps, setSteps] = useState(30);
  const [seed, setSeed] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const prompts =
      mode === "single"
        ? [prompt.trim()].filter(Boolean)
        : batchPrompts
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter(Boolean);

    if (prompts.length === 0) {
      setError(mode === "single" ? "Enter a prompt." : "Enter at least one prompt.");
      return;
    }

    const now = new Date();
    const newJobs: JobType[] = prompts.map((positivePrompt, index) => ({
      id: crypto.randomUUID(),
      type: "t2i",
      model: model.trim() || "SD1.5",
      input_img_id: null,
      output_img_id: null,
      prompt_positive: positivePrompt,
      prompt_negative: negativePrompt.trim(),
      seed: seed + index,
      steps,
      state: "queued",
      queued_at: now,
      started_at: null,
      completed_at: null,
      duration_sec: null,
    }));

    onAdd(newJobs);
    onClose();
  }

  const title = mode === "single" ? "Add a job" : "Batch add jobs";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="job-add-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-xl rounded-2xl border border-aizen-border bg-aizen-panel p-0 text-aizen-text shadow-xl backdrop:bg-black/60"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aizen-purple">
              Queue
            </p>
            <h2 id="job-add-modal-title" className="mt-1 text-xl font-semibold">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg text-aizen-muted hover:bg-aizen-surface hover:text-aizen-text"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="job-prompt" className="text-sm font-medium text-aizen-text">
              {mode === "single" ? "Positive prompt" : "Prompts"}
            </label>
            <textarea
              id="job-prompt"
              required
              rows={mode === "single" ? 3 : 6}
              value={mode === "single" ? prompt : batchPrompts}
              onChange={(event) => {
                if (mode === "single") setPrompt(event.target.value);
                else setBatchPrompts(event.target.value);
                setError("");
              }}
              placeholder={
                mode === "single"
                  ? "Describe the image you want to generate..."
                  : "Enter one prompt per line..."
              }
              className={`${inputClassName} resize-y`}
            />
            {mode === "batch" && (
              <p className="text-xs text-aizen-muted">Each non-empty line creates one job.</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="job-negative-prompt" className="text-sm font-medium text-aizen-text">
              Negative prompt <span className="font-normal text-aizen-muted">(optional)</span>
            </label>
            <textarea
              id="job-negative-prompt"
              rows={2}
              value={negativePrompt}
              onChange={(event) => setNegativePrompt(event.target.value)}
              placeholder="Things to avoid..."
              className={`${inputClassName} resize-y`}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <label htmlFor="job-model" className="text-sm font-medium text-aizen-text">
                Model
              </label>
              <input
                id="job-model"
                value={model}
                onChange={(event) => setModel(event.target.value)}
                className={inputClassName}
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <label htmlFor="job-steps" className="text-sm font-medium text-aizen-text">
                Steps
              </label>
              <input
                id="job-steps"
                type="number"
                min={1}
                value={steps}
                onChange={(event) => setSteps(Number(event.target.value))}
                className={inputClassName}
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <label htmlFor="job-seed" className="text-sm font-medium text-aizen-text">
                Starting seed
              </label>
              <input
                id="job-seed"
                type="number"
                min={0}
                value={seed}
                onChange={(event) => setSeed(Number(event.target.value))}
                className={inputClassName}
              />
            </div>
          </div>
        </div>

        {error && (
          <p role="alert" className="text-sm text-fuchsia-600">
            {error}
          </p>
        )}

        <div className="flex flex-col-reverse gap-2 border-t border-aizen-border pt-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-aizen-border px-4 py-2 text-sm font-medium text-aizen-text hover:bg-aizen-surface"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-aizen-purple px-4 py-2 text-sm font-semibold text-white hover:bg-aizen-purple-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aizen-purple"
          >
            {mode === "single" ? "Add job" : "Add jobs"}
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default JobAddModal;
