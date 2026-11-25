import type { JobDto } from "./Dtos/JobDto";
import JobItem from "./Components/JobItem";

function JobPage() {
  const testJobs: JobDto[] = [{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },{id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },{id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  },
{
    id: "550e8400-e29b-41d4-a716-446655440000",
    priority: "High",
    started_at: "2026-11-22T10:00:00Z",
    ended_at: null,

    prompt_positive: "A beautiful sunset over the mountains",
    prompt_negative: "Blurry, low quality",
    steps: 30,
    seed: 123456,
    status: "Running",
    created_at: "2026-11-22T09:55:00Z",

    file_id: "650e8400-e29b-41d4-a716-446655440000"
  }]
  return (
    <main className="bg-zinc-950">

      <div className="flex felx-row justify-center w-screen h-screen">
        
    <div className="flex flex-col p-4 overflow-y-scroll">
      {testJobs.map((job) => (<JobItem key={job.id} job={job}/>))}
      
    </div>
      </div>
    </main>
  )
}

export default JobPage
