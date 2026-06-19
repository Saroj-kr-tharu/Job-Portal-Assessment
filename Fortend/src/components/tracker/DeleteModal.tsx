import { FiAlertTriangle, FiX } from "react-icons/fi";

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
    <>
      <div className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" onClick={onCancel} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-[#1a1f2e] border border-[#2e3548] rounded-[16px] shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#2e3548]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[8px] bg-[#3a1a1a] border border-[#dc2626]/30 flex items-center justify-center">
                <FiAlertTriangle size={14} className="text-[#f87171]" />
              </div>
              <span className="text-[15px] font-bold text-[#e8ecf4]">Delete Application</span>
            </div>
            <button
              onClick={onCancel}
              className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-[#2e3548] text-[#555f72] hover:bg-[#252b3b] transition-colors"
            >
              <FiX size={14} />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-5">
            <p className="text-[14px] text-[#8892a4] leading-relaxed">
              Are you sure you want to delete the application for{" "}
              <span className="text-[#e8ecf4] font-semibold">{companyName}</span>?
              This cannot be undone.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 px-5 py-4 border-t border-[#2e3548]">
            <button
              onClick={onCancel}
              disabled={isLoading}
              className="px-4 py-2 rounded-[10px] border border-[#2e3548] text-[14px] font-medium text-[#8892a4] hover:text-[#e8ecf4] hover:bg-[#252b3b] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="flex items-center gap-2 px-5 py-2 rounded-[10px] bg-[#3a1a1a] border border-[#dc2626]/40 text-[#f87171] text-[14px] font-semibold hover:bg-[#4a2020] transition-colors disabled:opacity-50"
            >
              {isLoading && (
                <span className="w-3.5 h-3.5 border-2 border-[#f87171]/30 border-t-[#f87171] rounded-full animate-spin" />
              )}
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
