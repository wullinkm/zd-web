"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Building2, MapPin, Briefcase, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { FilterOptions } from "@/lib/api";

interface FiltersProps {
  filterOptions: FilterOptions;
}

export function Filters({ filterOptions }: FiltersProps) {
  const t = useTranslations("vacancies");
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCompany = searchParams.get("company") || "";
  const currentLocation = searchParams.get("location") || "";
  const currentDepartment = searchParams.get("department") || "";
  const currentSearch = searchParams.get("q") || "";

  const hasActiveFilters = currentCompany || currentLocation || currentDepartment;

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams();
      if (currentSearch) params.set("q", currentSearch);
      if (key === "company" && value) params.set("company", value);
      else if (currentCompany && key !== "company") params.set("company", currentCompany);
      if (key === "location" && value) params.set("location", value);
      else if (currentLocation && key !== "location") params.set("location", currentLocation);
      if (key === "department" && value) params.set("department", value);
      else if (currentDepartment && key !== "department") params.set("department", currentDepartment);

      const query = params.toString();
      router.push(`/vacancies${query ? `?${query}` : ""}` as "/vacancies");
    },
    [router, currentSearch, currentCompany, currentLocation, currentDepartment]
  );

  const clearFilters = useCallback(() => {
    const params = new URLSearchParams();
    if (currentSearch) params.set("q", currentSearch);
    router.push(`/vacancies${params.toString() ? `?${params}` : ""}` as "/vacancies");
  }, [router, currentSearch]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold flex items-center gap-1.5">
          <Briefcase className="h-4 w-4" />
          {t("filters")}
        </h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 text-xs">
            <X className="mr-1 h-3 w-3" />
            {t("clearFilters")}
          </Button>
        )}
      </div>

      {/* Company filter */}
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Building2 className="h-3.5 w-3.5" />
          {t("company")}
        </label>
        <select
          value={currentCompany}
          onChange={(e) => updateFilter("company", e.target.value)}
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <option value="">{t("allCompanies")}</option>
          {filterOptions.companies.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Location filter */}
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {t("location")}
        </label>
        <select
          value={currentLocation}
          onChange={(e) => updateFilter("location", e.target.value)}
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <option value="">{t("allLocations")}</option>
          {filterOptions.locations.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      {/* Department filter */}
      {filterOptions.departments.length > 0 && (
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5" />
            {t("department")}
          </label>
          <select
            value={currentDepartment}
            onChange={(e) => updateFilter("department", e.target.value)}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <option value="">{t("allDepartments")}</option>
            {filterOptions.departments.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
