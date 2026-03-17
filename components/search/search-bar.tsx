"use client";

import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";

interface SearchBarProps {
  large?: boolean;
}

export function SearchBar({ large = false }: SearchBarProps) {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      router.push(`/vacancies${params.toString() ? `?${params}` : ""}` as "/vacancies");
    },
    [query, router]
  );

  return (
    <form onSubmit={handleSearch} className="flex w-full gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("hero.searchPlaceholder")}
          className={`pl-10 ${large ? "h-12 text-base" : "h-10"}`}
        />
      </div>
      <Button type="submit" size={large ? "lg" : "default"}>
        {t("vacancies.search")}
      </Button>
    </form>
  );
}
