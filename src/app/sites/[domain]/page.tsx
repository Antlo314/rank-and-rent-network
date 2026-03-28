import { notFound } from "next/navigation";
import RoofingHomeTemplate from "@/components/templates/roofing/RoofingHomeTemplate";
import LawHomeTemplate from "@/components/templates/law/LawHomeTemplate";

export default async function DomainHomePage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params;

  if (domain === "atlantaroofingandsiding.net") {
    return <RoofingHomeTemplate domain={domain} />;
  }

  if (domain === "personalinjuryatlantalawyer.com") {
    return <LawHomeTemplate domain={domain} />;
  }

  return notFound();
}
