export interface Vacancy {
  id: number;
  title: string;
  company: string;
  location: string | null;
  description: string | null;
  department: string | null;
  employment_type: string | null;
  salary_min: number | null;
  salary_max: number | null;
  salary_currency: string | null;
  url: string | null;
  date_posted: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
