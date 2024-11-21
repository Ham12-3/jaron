import { ExecutionPhaseStatus } from "@/types/workflow";
import { CircleDashedIcon, Loader2Icon } from "lucide-react";
import React from "react";

export default function PhaseStatusBadge({
  status,
}: {
  status: ExecutionPhaseStatus;
}) {
  switch (status) {
    case ExecutionPhaseStatus.PENDING:
      return <CircleDashedIcon size={20} className="stroke-muted-foreground" />;

    case ExecutionPhaseStatus.RUNNING:
      return (
        <Loader2Icon size={20} className="animates-spin stroke-yellow-500" />
      );
  }
}
