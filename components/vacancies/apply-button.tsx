"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

interface ApplyButtonProps {
  vacancyId: number;
  applyLabel: string;
  appliedLabel: string;
  coverLetterPlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  cancelLabel: string;
  successMessage: string;
  errorMessage: string;
  alreadyAppliedMessage: string;
}

export function ApplyButton({
  vacancyId,
  applyLabel,
  appliedLabel,
  coverLetterPlaceholder,
  submitLabel,
  submittingLabel,
  cancelLabel,
  successMessage,
  errorMessage,
  alreadyAppliedMessage,
}: ApplyButtonProps) {
  const [open, setOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [applied, setApplied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleApply = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vacancy_id: vacancyId,
          cover_letter: coverLetter || null,
        }),
      });

      if (res.status === 409) {
        // Already applied
        setApplied(true);
        setOpen(false);
      } else if (res.ok) {
        setApplied(true);
        setOpen(false);
      } else {
        throw new Error(`${res.status}`);
      }
    } catch {
      setError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  if (applied) {
    return (
      <div className="flex items-center gap-2 rounded-md bg-green-50 px-4 py-3 text-sm text-green-700">
        <CheckCircle className="h-4 w-4" />
        {appliedLabel}
      </div>
    );
  }

  return (
    <div>
      {!open ? (
        <Button className="w-full" onClick={() => setOpen(true)}>
          {applyLabel}
        </Button>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Cover Letter (optional)</span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder={coverLetterPlaceholder}
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
          />
          {error && (
            <p className="text-xs text-destructive">{error}</p>
          )}
          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={handleApply}
              disabled={submitting}
            >
              {submitting ? submittingLabel : submitLabel}
            </Button>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={submitting}
            >
              {cancelLabel}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
