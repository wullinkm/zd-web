export interface Vacancy {
  id: number;
  title: string;
  company: string;
  location: string | null;
  description: string | null;
  url: string | null;
  salary: string | null;
  employment_type: string | null;
  date_posted: string | null;
  created_at: string;
  updated_at: string;
}

export interface VacancyListResponse {
  items: Vacancy[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
