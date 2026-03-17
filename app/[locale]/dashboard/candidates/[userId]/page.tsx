"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Profile } from "@/lib/types";
import { MapPin, Mail, Phone, Calendar, Briefcase, GraduationCap, Tag, Lock } from "lucide-react";

export default function CandidateDetailPage() {
  const params = useParams();
  const userId = params.userId as string;
  const tc = useTranslations("candidates");
  const tp = useTranslations("profile");

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [revealing, setRevealing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/candidates/${userId}`);
      if (res.status === 402) {
        // Not revealed yet — show reveal button
        setRevealed(false);
        setProfile(null);
      } else if (res.ok) {
        const data = await res.json();
        setProfile(data);
        setRevealed(true);
      } else {
        throw new Error(`Error ${res.status}`);
      }
    } catch (e) {
      setError("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleReveal = async () => {
    if (!confirm(tc("revealConfirm"))) return;
    setRevealing(true);
    setError(null);
    try {
      const res = await fetch(`/api/candidates/${userId}/reveal`, { method: "POST" });
      if (res.status === 402) {
        setError(tc("insufficientCredits"));
      } else if (res.ok) {
        const data = await res.json();
        setProfile(data);
        setRevealed(true);
      } else {
        throw new Error(`Error ${res.status}`);
      }
    } catch (e) {
      setError("Failed to reveal profile");
    } finally {
      setRevealing(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!revealed && !loading) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center py-16 text-center">
          <Lock className="mb-4 h-12 w-12 text-muted-foreground/40" />
          <h2 className="text-lg font-semibold">{tc("revealProfile")}</h2>
          <p className="mt-1 text-sm text-muted-foreground mb-6">{tc("revealCost")}</p>
          {error && <p className="text-sm text-destructive mb-4">{error}</p>}
          <Button onClick={handleReveal} disabled={revealing}>
            {revealing ? "Revealing..." : tc("revealProfile")}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!profile) return null;

  const skills = profile.tags.filter((t) => t.tag_type === "skill");
  const roles = profile.tags.filter((t) => t.tag_type === "role");
  const industries = profile.tags.filter((t) => t.tag_type === "industry");

  const availabilityLabels: Record<string, string> = {
    immediately: "Available immediately",
    "1_month": "Available in 1 month",
    "3_months": "Available in 3 months",
    not_looking: "Not looking",
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">{profile.full_name || "Candidate"}</h1>
              {profile.availability && (
                <Badge variant="outline" className="mt-2">
                  {availabilityLabels[profile.availability] || profile.availability}
                </Badge>
              )}
            </div>
            <Badge variant="secondary">{tc("alreadyRevealed")}</Badge>
          </div>

          <div className="mt-4 space-y-2">
            {profile.location && (
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </p>
            )}
            {profile.email && (
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
              </p>
            )}
            {profile.phone && (
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href={`tel:${profile.phone}`} className="hover:underline">{profile.phone}</a>
              </p>
            )}
          </div>

          {profile.bio && (
            <>
              <Separator className="my-4" />
              <p className="text-sm leading-relaxed">{profile.bio}</p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Tags */}
      {(skills.length > 0 || roles.length > 0 || industries.length > 0) && (
        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {tp("skillsAndTags")}
            </h2>
            {roles.length > 0 && (
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-2">{tp("tagTypes.role")}</p>
                <div className="flex flex-wrap gap-1.5">
                  {roles.map((r) => <Badge key={r.id}>{r.tag}</Badge>)}
                </div>
              </div>
            )}
            {skills.length > 0 && (
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-2">{tp("tagTypes.skill")}</p>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((s) => <Badge key={s.id} variant="secondary">{s.tag}</Badge>)}
                </div>
              </div>
            )}
            {industries.length > 0 && (
              <div>
                <p className="text-xs text-muted-foreground mb-2">{tp("tagTypes.industry")}</p>
                <div className="flex flex-wrap gap-1.5">
                  {industries.map((i) => <Badge key={i.id} variant="outline">{i.tag}</Badge>)}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Work History */}
      {profile.work_history.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              {tp("workHistory")}
            </h2>
            <div className="space-y-4">
              {profile.work_history.map((job) => (
                <div key={job.id}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{job.title}</p>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {job.start_date?.slice(0, 7)} — {job.end_date ? job.end_date.slice(0, 7) : "Present"}
                    </p>
                  </div>
                  {job.description && (
                    <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Education */}
      {profile.education.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              {tp("education")}
            </h2>
            <div className="space-y-4">
              {profile.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{edu.institution}</p>
                      {edu.degree && <p className="text-sm text-muted-foreground">{edu.degree}</p>}
                      {edu.field_of_study && <p className="text-sm text-muted-foreground">{edu.field_of_study}</p>}
                    </div>
                    {(edu.start_year || edu.end_year) && (
                      <p className="text-xs text-muted-foreground">
                        {edu.start_year} — {edu.end_year || "Present"}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
