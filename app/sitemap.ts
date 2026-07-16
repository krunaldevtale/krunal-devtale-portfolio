import { MetadataRoute } from "next";
import { experiences } from "@/data/experienceData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://liladhar.com";

  const experienceUrls = experiences.map((exp) => ({
    url: `${baseUrl}/experience/${exp.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...experienceUrls,
  ];
}
