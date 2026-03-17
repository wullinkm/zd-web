"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Profile,
  ProfileInput,
  WorkHistoryInput,
  EducationInput,
  ProfileTagInput,
} from "@/lib/types";
import { User, Briefcase, GraduationCap, Tag, Plus, Trash2, Eye, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ProfileEditPage() {
  const t = useTranslations("profile");
  const params = useParams();
  const locale = params.locale as string;

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Personal info form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [availability, setAvailability] = useState("");
  const [languages, setLanguages] = useState("");

  // Work history
  const [showWorkForm, setShowWorkForm] = useState(false);
  const [workForm, setWorkForm] = useState<WorkHistoryInput>({ company: "", title: "" });
  const [currentPosition, setCurrentPosition] = useState(false);
  const [addingWork, setAddingWork] = useState(false);

  // Education
  const [showEduForm, setShowEduForm] = useState(false);
  const [eduForm, setEduForm] = useState<EducationInput>({ institution: "" });
  const [addingEdu, setAddingEdu] = useState(false);

  // Tags
  const [tagInput, setTagInput] = useState("");
  const [tagType, setTagType] = useState<"skill" | "role" | "industry">("skill");
  const [addingTag, setAddingTag] = useState(false);

  const loadProfile = async () => {
    try {
      const res = await fetch("/api/profile");
      if (res.ok) {
        const data: Profile = await res.json();
        setProfile(data);
        setFullName(data.full_name || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setDateOfBirth(data.date_of_birth || "");
        setLocation(data.location || "");
        setBio(data.bio || "");
        setAvailability(data.availability || "");
        setLanguages(data.languages || "");
      }
    } catch {
      setError("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleSaveProfile = async () => {
    setSaving(true);
    setError(null);
    setSaved(false);
    try {
      const data: ProfileInput = {
        full_name: fullName || null,
        email: email || null,
        phone: phone || null,
        date_of_birth: dateOfBirth || null,
        location: location || null,
        bio: bio || null,
        availability: availability || null,
        languages: languages || null,
      };
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const updated: Profile = await res.json();
        setProfile(updated);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        throw new Error(`${res.status}`);
      }
    } catch {
      setError(t("errorSave"));
    } finally {
      setSaving(false);
    }
  };

  const handleAddWork = async () => {
    if (!workForm.company || !workForm.title) return;
    setAddingWork(true);
    try {
      const res = await fetch("/api/profile/work-history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...workForm,
          end_date: currentPosition ? null : workForm.end_date,
        }),
      });
      if (res.ok) {
        await loadProfile();
        setWorkForm({ company: "", title: "" });
        setCurrentPosition(false);
        setShowWorkForm(false);
      }
    } catch {
      setError("Failed to add work history");
    } finally {
      setAddingWork(false);
    }
  };

  const handleDeleteWork = async (id: number) => {
    try {
      await fetch(`/api/profile/work-history/${id}`, { method: "DELETE" });
      await loadProfile();
    } catch {
      setError("Failed to delete work history");
    }
  };

  const handleAddEdu = async () => {
    if (!eduForm.institution) return;
    setAddingEdu(true);
    try {
      const res = await fetch("/api/profile/education", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eduForm),
      });
      if (res.ok) {
        await loadProfile();
        setEduForm({ institution: "" });
        setShowEduForm(false);
      }
    } catch {
      setError("Failed to add education");
    } finally {
      setAddingEdu(false);
    }
  };

  const handleDeleteEdu = async (id: number) => {
    try {
      await fetch(`/api/profile/education/${id}`, { method: "DELETE" });
      await loadProfile();
    } catch {
      setError("Failed to delete education");
    }
  };

  const handleAddTag = async () => {
    if (!tagInput.trim()) return;
    setAddingTag(true);
    try {
      const res = await fetch("/api/profile/tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tag: tagInput.trim(), tag_type: tagType }),
      });
      if (res.ok) {
        await loadProfile();
        setTagInput("");
      }
    } catch {
      setError("Failed to add tag");
    } finally {
      setAddingTag(false);
    }
  };

  const handleDeleteTag = async (id: number) => {
    try {
      await fetch(`/api/profile/tags/${id}`, { method: "DELETE" });
      await loadProfile();
    } catch {
      setError("Failed to delete tag");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const skills = profile?.tags.filter((tg) => tg.tag_type === "skill") || [];
  const roles = profile?.tags.filter((tg) => tg.tag_type === "role") || [];
  const industries = profile?.tags.filter((tg) => tg.tag_type === "industry") || [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t("editProfile")}</h1>
          <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href={`/${locale}/profile/preview`}>
            <Eye className="mr-2 h-4 w-4" />
            {t("previewProfile")}
          </Link>
        </Button>
      </div>

      {error && (
        <div className="mb-4 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {saved && (
        <div className="mb-4 flex items-center gap-2 rounded-md bg-green-50 px-4 py-3 text-sm text-green-700">
          <CheckCircle className="h-4 w-4" />
          {t("saved")}
        </div>
      )}

      {/* Personal Info */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="mb-4 flex items-center gap-2 font-semibold">
            <User className="h-4 w-4" />
            {t("personalInfo")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium">{t("fullName")}</label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t("fullNamePlaceholder")}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">{t("email")}</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">{t("phone")}</label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("phonePlaceholder")}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">{t("dateOfBirth")}</label>
              <Input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">{t("location")}</label>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={t("locationPlaceholder")}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">{t("availability")}</label>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">— Select —</option>
                <option value="immediately">{t("availabilityOptions.immediately")}</option>
                <option value="1_month">{t("availabilityOptions.1_month")}</option>
                <option value="3_months">{t("availabilityOptions.3_months")}</option>
                <option value="not_looking">{t("availabilityOptions.not_looking")}</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium">{t("bio")}</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder={t("bioPlaceholder")}
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium">{t("languages")}</label>
              <Input
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                placeholder={t("languagesPlaceholder")}
              />
              <p className="mt-1 text-xs text-muted-foreground">{t("languagesHint")}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Button onClick={handleSaveProfile} disabled={saving}>
              {saving ? t("saving") : t("save")}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Work History */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-semibold">
              <Briefcase className="h-4 w-4" />
              {t("workHistory")}
            </h2>
            <Button size="sm" variant="outline" onClick={() => setShowWorkForm(!showWorkForm)}>
              <Plus className="mr-1.5 h-3.5 w-3.5" />
              {t("addWorkHistory")}
            </Button>
          </div>

          {profile?.work_history.map((job) => (
            <div key={job.id} className="mb-3 rounded-md border p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{job.title}</p>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                  <p className="text-xs text-muted-foreground">
                    {job.start_date?.slice(0, 7)} — {job.end_date ? job.end_date.slice(0, 7) : "Present"}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDeleteWork(job.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              {job.description && <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>}
            </div>
          ))}

          {showWorkForm && (
            <div className="mt-4 rounded-md border p-4 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium">{t("company")} *</label>
                  <Input
                    value={workForm.company}
                    onChange={(e) => setWorkForm({ ...workForm, company: e.target.value })}
                    placeholder={t("companyPlaceholder")}
                    size={1}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium">{t("jobTitle")} *</label>
                  <Input
                    value={workForm.title}
                    onChange={(e) => setWorkForm({ ...workForm, title: e.target.value })}
                    placeholder={t("jobTitlePlaceholder")}
                    size={1}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium">{t("startDate")}</label>
                  <Input
                    type="date"
                    value={workForm.start_date || ""}
                    onChange={(e) => setWorkForm({ ...workForm, start_date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium">{t("endDate")}</label>
                  <Input
                    type="date"
                    value={workForm.end_date || ""}
                    onChange={(e) => setWorkForm({ ...workForm, end_date: e.target.value })}
                    disabled={currentPosition}
                  />
                  <label className="mt-1 flex items-center gap-1.5 text-xs">
                    <input
                      type="checkbox"
                      checked={currentPosition}
                      onChange={(e) => setCurrentPosition(e.target.checked)}
                    />
                    {t("currentPosition")}
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium">{t("description")}</label>
                  <textarea
                    value={workForm.description || ""}
                    onChange={(e) => setWorkForm({ ...workForm, description: e.target.value })}
                    placeholder={t("descriptionPlaceholder")}
                    rows={3}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleAddWork} disabled={addingWork}>
                  {addingWork ? "Adding..." : t("add")}
                </Button>
                <Button size="sm" variant="outline" onClick={() => setShowWorkForm(false)}>
                  {t("cancel")}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-semibold">
              <GraduationCap className="h-4 w-4" />
              {t("education")}
            </h2>
            <Button size="sm" variant="outline" onClick={() => setShowEduForm(!showEduForm)}>
              <Plus className="mr-1.5 h-3.5 w-3.5" />
              {t("addEducation")}
            </Button>
          </div>

          {profile?.education.map((edu) => (
            <div key={edu.id} className="mb-3 rounded-md border p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{edu.institution}</p>
                  {edu.degree && <p className="text-sm text-muted-foreground">{edu.degree}</p>}
                  {edu.field_of_study && <p className="text-sm text-muted-foreground">{edu.field_of_study}</p>}
                  {(edu.start_year || edu.end_year) && (
                    <p className="text-xs text-muted-foreground">
                      {edu.start_year} — {edu.end_year || "Present"}
                    </p>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDeleteEdu(edu.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          {showEduForm && (
            <div className="mt-4 rounded-md border p-4 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium">{t("institution")} *</label>
                  <Input
                    value={eduForm.institution}
                    onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })}
                    placeholder={t("institutionPlaceholder")}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium">{t("degree")}</label>
                  <Input
                    value={eduForm.degree || ""}
                    onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })}
                    placeholder={t("degreePlaceholder")}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium">{t("fieldOfStudy")}</label>
                  <Input
                    value={eduForm.field_of_study || ""}
                    onChange={(e) => setEduForm({ ...eduForm, field_of_study: e.target.value })}
                    placeholder={t("fieldOfStudyPlaceholder")}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium">{t("startYear")}</label>
                  <Input
                    type="number"
                    value={eduForm.start_year || ""}
                    onChange={(e) => setEduForm({ ...eduForm, start_year: e.target.value ? Number(e.target.value) : null })}
                    placeholder="2018"
                    min={1950}
                    max={2030}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium">{t("endYear")}</label>
                  <Input
                    type="number"
                    value={eduForm.end_year || ""}
                    onChange={(e) => setEduForm({ ...eduForm, end_year: e.target.value ? Number(e.target.value) : null })}
                    placeholder="2022"
                    min={1950}
                    max={2030}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleAddEdu} disabled={addingEdu}>
                  {addingEdu ? "Adding..." : t("add")}
                </Button>
                <Button size="sm" variant="outline" onClick={() => setShowEduForm(false)}>
                  {t("cancel")}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Skills & Tags */}
      <Card>
        <CardContent className="p-6">
          <h2 className="mb-4 flex items-center gap-2 font-semibold">
            <Tag className="h-4 w-4" />
            {t("skillsAndTags")}
          </h2>

          {/* Skills */}
          <div className="mb-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">{t("tagTypes.skill")}</p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <Badge key={s.id} variant="secondary" className="gap-1">
                  {s.tag}
                  <button onClick={() => handleDeleteTag(s.id)} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div className="mb-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">{t("tagTypes.role")}</p>
            <div className="flex flex-wrap gap-1.5">
              {roles.map((r) => (
                <Badge key={r.id} variant="default" className="gap-1">
                  {r.tag}
                  <button onClick={() => handleDeleteTag(r.id)} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="mb-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">{t("tagTypes.industry")}</p>
            <div className="flex flex-wrap gap-1.5">
              {industries.map((i) => (
                <Badge key={i.id} variant="outline" className="gap-1">
                  {i.tag}
                  <button onClick={() => handleDeleteTag(i.id)} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          {/* Add tag */}
          <div className="flex gap-2">
            <select
              value={tagType}
              onChange={(e) => setTagType(e.target.value as "skill" | "role" | "industry")}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="skill">{t("tagTypes.skill")}</option>
              <option value="role">{t("tagTypes.role")}</option>
              <option value="industry">{t("tagTypes.industry")}</option>
            </select>
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder={t("tagPlaceholder")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
              className="flex-1"
            />
            <Button size="sm" onClick={handleAddTag} disabled={addingTag || !tagInput.trim()}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
