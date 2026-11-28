import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Origin Data | Warisan Pahang",
  description: "Sources and credits for landmark photographs on Warisan Pahang.",
};

const commonsCredit = "Slleong · Wikimedia Commons";
const photos = [
  { id: "sultan-abdullah-mosque-museum", label: "Pekan 13", url: "https://commons.wikimedia.org/wiki/File:Pekan_13.jpg", credit: commonsCredit, cc0: true },
  { id: "sungai-lembing-museum", label: "Sungai Lembing 1", url: "https://commons.wikimedia.org/wiki/File:Sungai_Lembing_1.jpg", credit: commonsCredit, cc0: true },
  { id: "old-state-mosque", label: "Kuala Lipis 29", url: "https://commons.wikimedia.org/wiki/File:Kuala_Lipis_29.jpg", credit: commonsCredit, cc0: true },
  { id: "clifford-school", label: "Malaya History", url: "https://malayahistory.com/2022/11/17/clifford-school-kuala-lipis-1913/" },
  { id: "bukit-residen", title: "Bukit Residen (The Residency)", label: "The Residency on Flickr", url: "https://www.flickr.com/photos/23268776@N03/6053313158", credit: "Photo by DBHKer" },
  { id: "bukit-residen", title: "Former Pahang Club", label: "Pahang Club on Flickr", url: "https://www.flickr.com/photos/23268776@N03/6052758653", credit: "Photo by DBHKer" },
  { id: "tunku-azizah-craft-village", label: "Tourism Malaysia photo record", url: "https://tmgallery.tourism.gov.my/tmgallery/pages/view.php?ref=89892", credit: "Fadlurrahman Maksom · Unit Audio Visual Tourism Malaysia" },
  { id: "pulau-beram-museum", label: "Tourism Pahang museum listing", url: "https://www.pahangtourism.org.my/index.php/destination/must-visit-places-in-pahang/item?id=29:pulau-beram-museum&files_order=ordering" },
  { id: "royal-mausoleum-precinct", title: "Pahang Royal Mausoleum", label: "Seni Lama Melayu", url: "https://artmelayu.blogspot.com/2011/08/makam-diraja-royal-mausoleum-of-pekan.html", credit: "Post by Radzi Sapiee" },
];

const names = new Map(destinations.map(({ id, name }) => [id, name]));
const sourceLink = "inline-flex min-h-11 items-center underline underline-offset-4 hover:text-[var(--rust)] focus-visible:outline-2 focus-visible:outline-offset-4";

export default function OriginDataPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-10 sm:py-20">
        <Link href="/" className={sourceLink}>Back to Warisan Pahang</Link>
        <header className="mb-12 mt-6">
          <h1 className="font-[family-name:var(--font-display)] text-6xl font-semibold leading-none sm:text-7xl">Origin Data</h1>
          <p className="mt-5 max-w-prose">Original sources and credits for the landmark photographs on Warisan Pahang.</p>
        </header>
        <ul className="divide-y divide-[var(--muted)]/30 border-y border-[var(--muted)]/30">
          {photos.map(({ id, title, label, url, credit, cc0 }) => (
            <li key={url} className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <h2 className="font-semibold">{title ?? names.get(id)}</h2>
                {credit && <p className="mt-1 text-sm">{credit}{cc0 && <> · <a className="underline underline-offset-4" href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a></>}</p>}
              </div>
              <a className={sourceLink} href={url}>{label}</a>
            </li>
          ))}
        </ul>
      </main>
      <footer><Link className="footer-back underline underline-offset-4" href="/">Warisan Pahang</Link><p>© 2026 · Malaysia</p></footer>
    </>
  );
}
