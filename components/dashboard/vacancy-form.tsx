"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VacancyInput, Vacancy } from "@/lib/types";
import { createVacancy, updateVacancy } from "@/lib/api";

interface VacancyFormProps {
  token: string;
  vacancy?: Vacancy;
  locale: string;
  labels: {
    title: string;
    company: string;
    location: string;
    description: string;
    department: string;
    employmentType: string;
    salaryMin: string;
    salaryMax: string;
    salaryCurrency: string;
    url: string;
    save: string;
    saving: string;
    cancel: string;
    createTitle: string;
    editTitle: string;
    successCreate: string;
    successEdit: string;
    errorCreate: string;
    errorEdit: string;
  };
}

export function VacancyForm({ token, vacancy, locale, labels }: VacancyFormProps) {
  const router = useRouter();
  const isEdit = !!vacancy;

  const [form, setForm] = useState<VacancyInput>({
    title: vacancy?.title ?? "",
    company: vacancy?.company ?? "",
    location: vacancy?.location ?? "",
    description: vacancy?.description ?? "",
    department: vacancy?.department ?? "",
    employment_type: vacancy?.employment_type ?? "",
    salary_min: vacancy?.salary_min ?? null,
    salary_max: vacancy?.salary_max ?? null,
    salary_currency: vacancy?.salary_currency ?? "EUR",
    url: vacancy?.url ?? "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "salary_min" || name === "salary_max"
          ? value === ""
            ? null
            : parseFloat(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      if (isEdit && vacancy) {
        await updateVacancy(vacancy.id, form, token);
      } else {
        await createVacancy(form, token);
      }
      router.push(`/${locale}/dashboard`);
      router.refresh();
    } catch (err) {
      setError(isEdit ? labels.errorEdit : labels.errorCreate);
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEdit ? labels.editTitle : labels.createTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">{labels.title} *</label>
              <Input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder={labels.title}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">{labels.company} *</label>
              <Input
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                placeholder={labels.company}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">{labels.location}</label>
              <Input
                name="location"
                value={form.location ?? ""}
                onChange={handleChange}
                placeholder={labels.location}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">{labels.department}</label>
              <Input
                name="department"
                value={form.department ?? ""}
                onChange={handleChange}
                placeholder={labels.department}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">{labels.employmentType}</label>
              <Input
                name="employment_type"
                value={form.employment_type ?? ""}
                onChange={handleChange}
                placeholder="Full-time, Part-time, ..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">{labels.url}</label>
              <Input
                name="url"
                type="url"
                value={form.url ?? ""}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">{labels.salaryMin}</label>
              <Input
                name="salary_min"
                type="number"
                min={0}
                value={form.salary_min ?? ""}
                onChange={handleChange}
                placeholder="0"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">{labels.salaryMax}</label>
              <Input
                name="salary_max"
                type="number"
                min={0}
                value={form.salary_max ?? ""}
                onChange={handleChange}
                placeholder="0"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">{labels.salaryCurrency}</label>
              <Input
                name="salary_currency"
                value={form.salary_currency ?? "EUR"}
                onChange={handleChange}
                placeholder="EUR"
                maxLength={8}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">{labels.description}</label>
            <textarea
              name="description"
              value={form.description ?? ""}
              onChange={handleChange}
              placeholder={labels.description}
              rows={6}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" disabled={saving}>
              {saving ? labels.saving : labels.save}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push(`/${locale}/dashboard`)}
            >
              {labels.cancel}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
