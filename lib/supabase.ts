import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ColumnItem = {
  title: string;
  body: string;
};

export type Edition = {
  id: string;
  edition_date: string;
  editor_note: string | null;
  kicker: string;
  headline: string;
  subhead: string;
  byline: string;
  body: string[];
  columns: ColumnItem[];
  reasons_title: string;
  reasons_items: string[];
  quote_text: string;
  quote_attribution: string;
  coupon_label: string;
  coupon_title: string;
  coupon_fine: string;
  footer_line: string;
  song_title: string | null;
  song_artist: string | null;
  song_url: string | null;
  song_cover_url: string | null;
  published: boolean;
  created_at: string;
};

export async function getLatestEdition(): Promise<Edition | null> {
  const today = new Date().toISOString().slice(0, 10);
  const { data } = await supabase
    .from("editions")
    .select("*")
    .eq("published", true)
    .lte("edition_date", today)
    .order("edition_date", { ascending: false })
    .limit(1)
    .maybeSingle();
  return data;
}

export async function getIssueNumber(date: string): Promise<number> {
  const { count } = await supabase
    .from("editions")
    .select("id", { count: "exact", head: true })
    .eq("published", true)
    .lte("edition_date", date);
  return count ?? 1;
}

export async function getEditionByDate(date: string): Promise<Edition | null> {
  const { data } = await supabase
    .from("editions")
    .select("*")
    .eq("published", true)
    .eq("edition_date", date)
    .maybeSingle();
  return data;
}

export async function getAllEditions(): Promise<Edition[]> {
  const { data } = await supabase
    .from("editions")
    .select("*")
    .eq("published", true)
    .order("edition_date", { ascending: false });
  return data ?? [];
}

export async function getEditionsWithSongs(): Promise<Edition[]> {
  const { data } = await supabase
    .from("editions")
    .select("*")
    .eq("published", true)
    .not("song_title", "is", null)
    .order("edition_date", { ascending: false });
  return data ?? [];
}
