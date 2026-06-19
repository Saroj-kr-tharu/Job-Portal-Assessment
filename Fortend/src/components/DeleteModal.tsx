interface Props {
  isOpen: boolean;
  companyName: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function DeleteModal({ isOpen, companyName, onConfirm, onCancel, isLoading }: Props) {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-sm">
        <h3 className="font-bold text-lg">Delete Application</h3>
        <p className="py-4 text-base-content/70">
          Are you sure you want to delete the application for <strong>{companyName}</strong>? This cannot be undone.
        </p>
        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onCancel} disabled={isLoading}>
            Cancel
          </button>
          <button className="btn btn-error" onClick={onConfirm} disabled={isLoading}>
            {isLoading && <span className="loading loading-spinner loading-sm" />}
            Delete
          </button>
        </div>
      </div>
      <div className="modal-backdrop bg-black/30" onClick={onCancel} />
    </dialog>
  );
}
