import {
  Vacancy,
  VacancyInput,
  Profile,
  ProfileInput,
  WorkHistory,
  WorkHistoryInput,
  Education,
  EducationInput,
  ProfileTag,
  ProfileTagInput,
  AnonymousProfile,
  Application,
  ApplicationWithProfile,
  ApplicationInput,
  Credit,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app";

export interface FilterOptions {
  companies: string[];
  locations: string[];
  departments: string[];
}

// ── Vacancies ────────────────────────────────────────────────────────────────

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

// ── Profiles ─────────────────────────────────────────────────────────────────

export async function getMyProfile(token: string): Promise<Profile> {
  const res = await fetch(`${API_URL}/profiles/me`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function upsertMyProfile(
  data: ProfileInput,
  token: string
): Promise<Profile> {
  const res = await fetch(`${API_URL}/profiles/me`, {
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

export async function addWorkHistory(
  data: WorkHistoryInput,
  token: string
): Promise<WorkHistory> {
  const res = await fetch(`${API_URL}/profiles/me/work-history`, {
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

export async function deleteWorkHistory(
  id: number,
  token: string
): Promise<void> {
  const res = await fetch(`${API_URL}/profiles/me/work-history/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error: ${res.status} ${body}`);
  }
}

export async function addEducation(
  data: EducationInput,
  token: string
): Promise<Education> {
  const res = await fetch(`${API_URL}/profiles/me/education`, {
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

export async function deleteEducation(
  id: number,
  token: string
): Promise<void> {
  const res = await fetch(`${API_URL}/profiles/me/education/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error: ${res.status} ${body}`);
  }
}

export async function addProfileTag(
  data: ProfileTagInput,
  token: string
): Promise<ProfileTag> {
  const res = await fetch(`${API_URL}/profiles/me/tags`, {
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

export async function deleteProfileTag(
  id: number,
  token: string
): Promise<void> {
  const res = await fetch(`${API_URL}/profiles/me/tags/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error: ${res.status} ${body}`);
  }
}

export async function searchCandidates(
  token: string,
  params?: {
    skip?: number;
    limit?: number;
    availability?: string;
    location?: string;
    tag?: string;
  }
): Promise<AnonymousProfile[]> {
  const searchParams = new URLSearchParams();
  if (params?.skip) searchParams.set("skip", String(params.skip));
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.availability) searchParams.set("availability", params.availability);
  if (params?.location) searchParams.set("location", params.location);
  if (params?.tag) searchParams.set("tag", params.tag);

  const query = searchParams.toString();
  const url = `${API_URL}/profiles/search${query ? `?${query}` : ""}`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function getCandidateProfile(
  userId: string,
  token: string
): Promise<Profile> {
  const res = await fetch(`${API_URL}/profiles/${userId}`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

// ── Applications ─────────────────────────────────────────────────────────────

export async function applyForJob(
  data: ApplicationInput,
  token: string
): Promise<Application> {
  const res = await fetch(`${API_URL}/applications`, {
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

export async function getMyApplications(token: string): Promise<Application[]> {
  const res = await fetch(`${API_URL}/applications/mine`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function getVacancyApplications(
  vacancyId: number,
  token: string
): Promise<ApplicationWithProfile[]> {
  const res = await fetch(`${API_URL}/applications/vacancy/${vacancyId}`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function updateApplicationStatus(
  applicationId: number,
  status: string,
  token: string
): Promise<Application> {
  const res = await fetch(`${API_URL}/applications/${applicationId}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error: ${res.status} ${body}`);
  }

  return res.json();
}

// ── Credits ──────────────────────────────────────────────────────────────────

export async function getCreditBalance(token: string): Promise<Credit> {
  const res = await fetch(`${API_URL}/credits/balance`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function revealCandidate(
  candidateUserId: string,
  token: string
): Promise<Profile> {
  const res = await fetch(`${API_URL}/credits/reveal`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ candidate_user_id: candidateUserId }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error: ${res.status} ${body}`);
  }

  return res.json();
}
