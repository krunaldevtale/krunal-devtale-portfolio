import React from "react";
import { notFound } from "next/navigation";
import { experiences } from "@/data/experienceData";
import ExperienceDetailClient from "@/components/ExperienceDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    id: exp.id.toString(),
  }));
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const exp = experiences.find((item) => item.id === parseInt(id));

  if (!exp) {
    notFound();
  }

  return <ExperienceDetailClient exp={exp} />;
}
