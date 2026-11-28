import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Origin Data | Warisan Pahang",
  description: "Original photograph sources, credits, and reuse status for Warisan Pahang landmarks.",
};

const publishedPhotos = [
  { id: "sultan-abdullah-mosque-museum", label: "Pekan 13", url: "https://commons.wikimedia.org/wiki/File:Pekan_13.jpg" },
  { id: "sungai-lembing-museum", label: "Sungai Lembing 1", url: "https://commons.wikimedia.org/wiki/File:Sungai_Lembing_1.jpg" },
  { id: "old-state-mosque", label: "Kuala Lipis 29", url: "https://commons.wikimedia.org/wiki/File:Kuala_Lipis_29.jpg" },
];

const candidatePhotos = [
  { id: "clifford-school", label: "Malaya History", url: "https://malayahistory.com/2022/11/17/clifford-school-kuala-lipis-1913/", subject: "Historic school building. The publisher labels the photo public domain; that status has not been independently verified." },
  { id: "bukit-residen", label: "The Residency on Flickr", url: "https://www.flickr.com/photos/23268776@N03/6053313158", subject: "Former British Resident’s house. Photo by DBHKer; all rights reserved." },
  { id: "bukit-residen", label: "Pahang Club on Flickr", url: "https://www.flickr.com/photos/23268776@N03/6052758653", subject: "Former clubhouse. Photo by DBHKer; all rights reserved." },
  { id: "tunku-azizah-craft-village", label: "Tourism Malaysia photo record", url: "https://tmgallery.tourism.gov.my/tmgallery/pages/view.php?ref=89892", subject: "Contributor: Fadlurrahman Maksom. Rights holder listed as Unit Audio Visual Tourism Malaysia; the original file is restricted." },
  { id: "pulau-beram-museum", label: "Tourism Pahang", url: "https://www.pahangtourism.org.my/index.php/destination/must-visit-places-in-pahang/item?id=29:pulau-beram-museum&files_order=ordering", subject: "Watercraft Gallery listing. The photo’s exterior view has not been confirmed. Tourism Pahang requires permission to reproduce its images." },
  { id: "royal-mausoleum-precinct", label: "Seni Lama Melayu", url: "https://artmelayu.blogspot.com/2011/08/makam-diraja-royal-mausoleum-of-pekan.html", subject: "Royal Mausoleum only; no photo of Abu Bakar Royal Mosque was verified. Post by Radzi Sapiee; no separate photo credit or reuse license is listed." },
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
          <p className="mt-5 max-w-prose">Original sources for the landmark photographs on this site and for photos being considered. Candidate photos are linked, not republished.</p>
        </header>
        <section aria-labelledby="published-photos">
          <h2 id="published-photos" className="font-[family-name:var(--font-display)] text-4xl font-semibold">Photos used on the site</h2>
          <p className="mt-2">Photos by Slleong via Wikimedia Commons. Resized and converted to WebP. <a className={sourceLink} href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a></p>
          <ul className="mt-4 divide-y divide-[var(--muted)]/30 border-y border-[var(--muted)]/30">
            {publishedPhotos.map(({ id, label, url }) => (
              <li key={id} className="py-3 sm:flex sm:items-center sm:justify-between sm:gap-6">
                <h3 className="font-semibold">{names.get(id)}</h3>
                <a className={sourceLink} href={url}>{label} (Wikimedia Commons)</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-12" aria-labelledby="candidate-photos">
          <h2 id="candidate-photos" className="font-[family-name:var(--font-display)] text-4xl font-semibold">Photos awaiting permission</h2>
          <p className="mt-2 max-w-prose">These links lead to the original publishers. Contact the publisher or credited photographer to confirm who can grant permission before reusing a photo.</p>
          <ul className="mt-6 divide-y divide-[var(--muted)]/30 border-y border-[var(--muted)]/30">
            {candidatePhotos.map(({ id, label, url, subject }) => (
              <li key={url} className="py-4">
                <h3 className="font-semibold">{names.get(id)}</h3>
                <p className="mt-1 max-w-prose text-sm">{subject}</p>
                <a className={sourceLink} href={url}>{label}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer><Link className="footer-back underline underline-offset-4" href="/">Warisan Pahang</Link><p>© 2026 · Malaysia</p></footer>
    </>
  );
}
