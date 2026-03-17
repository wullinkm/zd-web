import { Vacancy, VacancyInput } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app";

export interface FilterOptions {
  companies: string[];
  locations: string[];
  departments: string[];
}

export async function getVacancies(params?: {
  skip?: number;
  limit?: number;
  search?: string;
  company?: string;
  location?: string;
  department?: string;
}): Promise<Vacancy[]> {
  const searchParams = new URLSearchParams();
  if (params?.skip) searchParams.set("skip", String(params.skip));
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.search) searchParams.set("search", params.search);
  if (params?.company) searchParams.set("company", params.company);
  if (params?.location) searchParams.set("location", params.location);
  if (params?.department) searchParams.set("department", params.department);

  const query = searchParams.toString();
  const url = `${API_URL}/vacancies${query ? `?${query}` : ""}`;

  const res = await fetch(url, { next: { revalidate: 300 } });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function getFilterOptions(): Promise<FilterOptions> {
  const res = await fetch(`${API_URL}/vacancies/filters`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function getVacancy(id: number): Promise<Vacancy> {
  const res = await fetch(`${API_URL}/vacancies/${id}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function getMyVacancies(token: string): Promise<Vacancy[]> {
  const res = await fetch(`${API_URL}/vacancies/mine`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function createVacancy(
  data: VacancyInput,
  token: string
): Promise<Vacancy> {
  const res = await fetch(`${API_URL}/vacancies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error: ${res.status} ${body}`);
  }

  return res.json();
}

export async function updateVacancy(
  id: number,
  data: Partial<VacancyInput>,
  token: string
): Promise<Vacancy> {
  const res = await fetch(`${API_URL}/vacancies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error: ${res.status} ${body}`);
  }

  return res.json();
}

export async function deleteVacancy(id: number, token: string): Promise<void> {
  const res = await fetch(`${API_URL}/vacancies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error: ${res.status} ${body}`);
  }
}
