import { notFound } from "next/navigation";
import { getEditionByDate, getIssueNumber } from "../../../lib/supabase";
import { IssueSheet } from "../../../components/editorial/IssueSheet";

export const revalidate = 30;

export default async function EditionPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const edition = await getEditionByDate(date);

  if (!edition) {
    notFound();
  }

  const issueNumber = await getIssueNumber(edition.edition_date);

  return <IssueSheet edition={edition} issueNumber={issueNumber} isArchived />;
}
