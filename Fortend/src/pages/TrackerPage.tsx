import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import {
  createApplication,
  deleteApplication,
  getApplications,
  updateApplication,
} from "../config/applications";
import type { ApplicationSchema } from "../schemas/application";
import type { Application, Status } from "../types";

import AppFormModal from "../components/tracker/AppFormModal";
import ApplicationList from "../components/tracker/ApplicationList";
import DeleteModal from "../components/tracker/DeleteModal";
import FilterSidebar from "../components/tracker/FilterSidebar";
import MobileFilterBar from "../components/tracker/MobileFilterBar";
import StatsBar from "../components/tracker/StatsBar";
import TopBar from "../components/tracker/TopBar";
import ViewDrawer from "../components/tracker/ViewDrawer";

const LIMIT_OPTIONS = [5, 10, 20, 50];

export default function TrackerPage() {
  const queryClient = useQueryClient();

  const [filterStatus, setFilterStatus] = useState<Status | "All">("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Application | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Application | null>(null);
  const [viewTarget, setViewTarget] = useState<Application | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["applications", page, limit],
    queryFn: () => {
      const toastId = toast.loading("Loading applications…");
      return getApplications({ page, limit })
        .then((res) => {
          toast.success("Applications loaded", { id: toastId });
          return res;
        })
        .catch((err) => {
          toast.error("Failed to load applications", { id: toastId });
          throw err;
        });
    },
  });

  const applications = data?.applications ?? [];
  const pagination = data?.pagination;

  const createMutation = useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      setModalOpen(false);
      toast.success("Application added!");
    },
    onError: () => toast.error("Failed to add application."),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<ApplicationSchema> }) =>
      updateApplication(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      setModalOpen(false);
      setEditTarget(null);
      toast.success("Application updated!");
    },
    onError: () => toast.error("Failed to update application."),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      setDeleteTarget(null);
      toast.success("Application deleted.");
    },
    onError: () => toast.error("Failed to delete application."),
  });

  const filtered = useMemo(() => {
    return applications.filter((app) => {
      const matchStatus = filterStatus === "All" || app.status === filterStatus;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        app.company_name.toLowerCase().includes(q) ||
        app.job_title.toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }, [applications, filterStatus, search]);

  const handleFilterChange = (status: Status | "All") => {
    setFilterStatus(status);
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const handleSubmit = (data: ApplicationSchema) => {
    if (editTarget) {
      updateMutation.mutate({ id: editTarget.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (app: Application) => {
    setEditTarget(app);
    setModalOpen(true);
  };

  const handleAddNew = () => {
    setEditTarget(null);
    setModalOpen(true);
  };

  const hasFilters = filterStatus !== "All" || search.trim() !== "";

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Left sidebar — desktop only */}
      <div className="hidden lg:flex flex-col border-r border-[#2e3548] bg-[#1e2330] overflow-y-auto scrollbar-thin shrink-0">
        <FilterSidebar
          activeFilter={filterStatus}
          applications={applications}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar
          search={search}
          onSearchChange={handleSearchChange}
          onAddNew={handleAddNew}
        />

        <MobileFilterBar
          activeFilter={filterStatus}
          applications={applications}
          onFilterChange={handleFilterChange}
        />

        {!isLoading && !isError && (
          <StatsBar applications={applications} />
        )}

        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <ApplicationList
            applications={filtered}
            isLoading={isLoading}
            isError={isError}
            onView={setViewTarget}
            onEdit={handleEdit}
            onDelete={setDeleteTarget}
            hasFilters={hasFilters}
          />
        </div>

        {/* Pagination bar */}
        {!isLoading && !isError && pagination && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#2e3548] bg-[#1e2330] shrink-0">
            {/* Left: total + limit picker */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">
                {pagination.total} application{pagination.total !== 1 ? "s" : ""}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-sm text-gray-500">Show</span>
                <select
                  value={limit}
                  onChange={(e) => handleLimitChange(Number(e.target.value))}
                  className="text-sm bg-[#2e3548] text-gray-300 border border-[#3a4259] rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
                >
                  {LIMIT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className="text-sm text-gray-500">per page</span>
              </div>
            </div>

            {/* Right: prev / page / next */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => p - 1)}
                disabled={!pagination.hasPrev}
                className="px-3 py-1.5 text-sm rounded-md bg-[#2e3548] text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#3a4259]  hover:cursor-pointer transition-colors"
              >
                ← Prev
              </button>
              <span className="text-sm text-gray-400 px-1">Page {page}</span>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={!pagination.hasNext}
                className="px-3 py-1.5 text-sm rounded-md bg-[#2e3548] text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#3a4259] transition-colors hover:cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <AppFormModal
        isOpen={modalOpen}
        editTarget={editTarget}
        onSubmit={handleSubmit}
        onClose={() => { setModalOpen(false); setEditTarget(null); }}
        isLoading={createMutation.isPending || updateMutation.isPending}
      />

      <DeleteModal
        isOpen={!!deleteTarget}
        companyName={deleteTarget?.company_name ?? ""}
        onConfirm={() => deleteTarget && deleteMutation.mutate(deleteTarget.id)}
        onCancel={() => setDeleteTarget(null)}
        isLoading={deleteMutation.isPending}
      />

      <ViewDrawer
        app={viewTarget}
        onClose={() => setViewTarget(null)}
        onEdit={(app) => { setViewTarget(null); handleEdit(app); }}
      />
    </div>
  );
}