import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
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

export default function TrackerPage() {
  const queryClient = useQueryClient();

  const [filterStatus, setFilterStatus] = useState<Status | "All">("All");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Application | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Application | null>(null);
  const [viewTarget, setViewTarget] = useState<Application | null>(null);

  const { data: applications = [], isLoading, isError } = useQuery({
    queryKey: ["applications"],
    queryFn: () => getApplications(),
  });

  const createMutation = useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      setModalOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<ApplicationSchema> }) =>
      updateApplication(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      setModalOpen(false);
      setEditTarget(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      setDeleteTarget(null);
    },
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
          onFilterChange={setFilterStatus}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TopBar */}
        <TopBar
          search={search}
          onSearchChange={setSearch}
          onAddNew={handleAddNew}
        />

        {/* Mobile filter bar */}
        <MobileFilterBar
          activeFilter={filterStatus}
          applications={applications}
          onFilterChange={setFilterStatus}
        />

        {/* Stats */}
        {!isLoading && !isError && (
          <StatsBar applications={applications} />
        )}

        {/* Application list */}
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
