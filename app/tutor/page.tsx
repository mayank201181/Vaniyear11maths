import type { Metadata } from "next";
import { TutorChat } from "@/components/TutorChat";
import { TOPIC_META } from "@/lib/topics/meta";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ask Professor Pi",
  description: "An AI maths tutor for Year 11 IGCSE: ask anything, send a photo of a question or your working, and get hints and explanations.",
};

export default function TutorPage() {
  return (
    <div className="mx-auto w-full max-w-3xl py-2 sm:py-4">
      <h1 className="text-2xl font-black tracking-tight sm:text-3xl">🦉 Ask Professor Pi</h1>
      <p className="mt-1 text-ink-2">Your maths tutor — hints first, full solutions only if you give up.</p>
      <div className="mt-4">
        <TutorChat topics={TOPIC_META.map((t) => ({ id: t.id, title: t.title }))} />
      </div>
    </div>
  );
}
