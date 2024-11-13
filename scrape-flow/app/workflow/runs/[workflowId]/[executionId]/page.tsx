export default function ExecutionViewerPage({
  params,
}: {
  params: {
    executionId: string;
    workflowId: string;
  };
}) {
  return <div className="flex flex-col h-screen w-full overflow-hidden">Run viewer</div>;
}
