import { useContext } from "react";
import { FlowValidationContext } from "../context/FlowValidationContext";

export default function useFlowValidation() {
    const context = useContext(FlowValidationContext)
    if(!context) {
        throw new Error("UseFlowValidation must be use within a FlowValiation")
    }

    return context
}