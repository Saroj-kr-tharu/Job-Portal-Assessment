import ApplicationForm from "./ApplicationForm";
import type { Application } from "../types";
import type { ApplicationSchema } from "../schemas/application";

interface Props {
  isOpen: boolean;
  editTarget: Application | null;
  onSubmit: (data: ApplicationSchema) => void;
  onClose: () => void;
  isLoading?: boolean;
}

export default function ApplicationModal({ isOpen, editTarget, onSubmit, onClose, isLoading }: Props) {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box w-11/12 max-w-2xl">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">
          {editTarget ? "Edit Application" : "Add Application"}
        </h3>
        <ApplicationForm
          defaultValues={editTarget ?? undefined}
          onSubmit={onSubmit}
          onCancel={onClose}
          isLoading={isLoading}
        />
      </div>
      <div className="modal-backdrop bg-black/30" onClick={onClose} />
    </dialog>
  );
}
