import type { Metadata } from "next";
import BlogView from "@/components/views/BlogView";

export const metadata: Metadata = {
  title: "Photographer's Diary | M. Haikal Arrasyid",
  description: "Catatan visual, analisis teknis pencahayaan panggung, dan cerita di balik lensa oleh M. Haikal Arrasyid.",
};

export default function BlogPage() {
  return <BlogView />;
}
