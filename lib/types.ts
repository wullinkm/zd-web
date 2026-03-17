export interface VacancyInput {
  title: string;
  company: string;
  location?: string | null;
  description?: string | null;
  department?: string | null;
  employment_type?: string | null;
  salary_min?: number | null;
  salary_max?: number | null;
  salary_currency?: string | null;
  url?: string | null;
}

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
  user_id?: string | null;
  created_at: string;
  updated_at: string;
}

export interface WorkHistory {
  id: number;
  user_id: string;
  company: string;
  title: string;
  start_date: string | null;
  end_date: string | null;
  description: string | null;
  created_at: string | null;
}

export interface Education {
  id: number;
  user_id: string;
  institution: string;
  degree: string | null;
  field_of_study: string | null;
  start_year: number | null;
  end_year: number | null;
  created_at: string | null;
}

export interface ProfileTag {
  id: number;
  user_id: string;
  tag: string;
  tag_type: string; // skill, role, industry
  created_at: string | null;
}

export interface Profile {
  id: number;
  user_id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  date_of_birth: string | null;
  location: string | null;
  bio: string | null;
  availability: string | null;
  languages: string | null;
  created_at: string | null;
  updated_at: string | null;
  work_history: WorkHistory[];
  education: Education[];
  tags: ProfileTag[];
}

export interface AnonymousProfile {
  user_id: string;
  location: string | null;
  bio: string | null;
  availability: string | null;
  languages: string | null;
  work_history: WorkHistory[];
  education: Education[];
  tags: ProfileTag[];
}

export interface Application {
  id: number;
  user_id: string;
  vacancy_id: number;
  cover_letter: string | null;
  status: string;
  applied_at: string | null;
}

export interface ApplicationWithProfile extends Application {
  profile: AnonymousProfile | null;
}

export interface Credit {
  user_id: string;
  balance: number;
  updated_at: string | null;
}

export interface ProfileInput {
  full_name?: string | null;
  email?: string | null;
  phone?: string | null;
  date_of_birth?: string | null;
  location?: string | null;
  bio?: string | null;
  availability?: string | null;
  languages?: string | null;
}

export interface WorkHistoryInput {
  company: string;
  title: string;
  start_date?: string | null;
  end_date?: string | null;
  description?: string | null;
}

export interface EducationInput {
  institution: string;
  degree?: string | null;
  field_of_study?: string | null;
  start_year?: number | null;
  end_year?: number | null;
}

export interface ProfileTagInput {
  tag: string;
  tag_type: string;
}

export interface ApplicationInput {
  vacancy_id: number;
  cover_letter?: string | null;
}
