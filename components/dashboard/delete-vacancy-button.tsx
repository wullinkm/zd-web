"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { deleteVacancy } from "@/lib/api";
import { Trash2 } from "lucide-react";

interface DeleteVacancyButtonProps {
  id: number;
  token: string;
  locale: string;
  label: string;
  confirmMessage: string;
}

export function DeleteVacancyButton({
  id,
  token,
  locale,
  label,
  confirmMessage,
}: DeleteVacancyButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm(confirmMessage)) return;
    setLoading(true);
    try {
      await deleteVacancy(id, token);
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Failed to delete vacancy.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDelete}
      disabled={loading}
      className="text-destructive hover:bg-destructive/10 hover:text-destructive"
    >
      <Trash2 className="mr-1.5 h-3.5 w-3.5" />
      {label}
    </Button>
  );
}
