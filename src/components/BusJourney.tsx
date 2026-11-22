"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BusFront, Languages, MapPin, Menu, Search, X } from "lucide-react";
import { busRoutes } from "@/data/busRoutes";

const copy = {
  en: {
    back: "Home",
    routes: "Routes",
    guide: "Travel guide",
    source: "Official source",
    eyebrow: "Bus journeys in Pahang",
    title: "MyBus routes from Kuantan",
    intro: "Start with 16 BAS.MY services linking Kuantan with town, coast and inland destinations.",
    browse: "Browse routes",
    official: "Open BAS.MY",
    count: "16 published routes",
    network: "The Kuantan network",
    networkCopy: "Most services begin at Hentian Bandar. C64 links Balok Makmur with Cherating, while C100 circulates within Kuantan city.",
    routeList: "Find a bus route",
    routeListCopy: "Search by route number, origin or destination. Each result opens the current route page published by BAS.MY.",
    search: "Search routes",
    searchPlaceholder: "Try C20 or Cherating",
    noResults: "No MyBus routes match that search.",
    loop: "Loop service",
    via: "via",
    view: "View official route",
    planning: "Before you travel",
    planningCopy: "Route information can change. Check the official BAS.MY page for the latest route diagram, operating information and service notices before leaving.",
    check: "Check BAS.MY routes",
    footer: "Bus journeys across Pahang",
    menu: "Toggle menu",
  },
  ms: {
    back: "Laman utama",
    routes: "Laluan",
    guide: "Panduan perjalanan",
    source: "Sumber rasmi",
    eyebrow: "Perjalanan bas di Pahang",
    title: "Laluan MyBus dari Kuantan",
    intro: "Mulakan dengan 16 perkhidmatan BAS.MY yang menghubungkan Kuantan dengan bandar, pantai dan kawasan pedalaman.",
    browse: "Lihat laluan",
    official: "Buka BAS.MY",
    count: "16 laluan diterbitkan",
    network: "Rangkaian Kuantan",
    networkCopy: "Kebanyakan perkhidmatan bermula di Hentian Bandar. C64 menghubungkan Balok Makmur dengan Cherating, manakala C100 beroperasi dalam bandar Kuantan.",
    routeList: "Cari laluan bas",
    routeListCopy: "Cari mengikut nombor laluan, tempat mula atau destinasi. Setiap hasil membuka halaman semasa yang diterbitkan oleh BAS.MY.",
    search: "Cari laluan",
    searchPlaceholder: "Cuba C20 atau Cherating",
    noResults: "Tiada laluan MyBus sepadan dengan carian itu.",
    loop: "Laluan pusingan",
    via: "melalui",
    view: "Lihat laluan rasmi",
    planning: "Sebelum bergerak",
    planningCopy: "Maklumat laluan boleh berubah. Semak halaman rasmi BAS.MY untuk peta laluan, maklumat operasi dan notis perkhidmatan terkini sebelum bertolak.",
    check: "Semak laluan BAS.MY",
    footer: "Perjalanan bas di seluruh Pahang",
    menu: "Buka atau tutup menu",
  },
};

export default function BusJourney() {
  const [lang, setLang] = useState<"en" | "ms">("en");
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState(false);
  const t = copy[lang];
  const visibleRoutes = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return busRoutes;
    return busRoutes.filter((route) => `${route.code} ${route.origin} ${route.destination} ${route.via ?? ""}`.toLowerCase().includes(needle));
  }, [query]);

  return <main className="bus-page">
    <header className="topbar bus-topbar">
      <Link className="brand" href="/" aria-label="Warisan Pahang home"><Image src="/logo-mark.svg" alt="" width={32} height={38}/><span><b>WARISAN</b><small>PAHANG</small></span></Link>
      <nav className={menu ? "nav open" : "nav"}>
        <Link href="/">{t.back}</Link>
        <a href="#routes">{t.routes}</a>
        <a href="#guide">{t.guide}</a>
        <a href="https://bas.my/basmykuantan.php" target="_blank" rel="noreferrer">{t.source}</a>
      </nav>
      <div className="nav-actions"><button className="lang" onClick={() => setLang(lang === "en" ? "ms" : "en")}><Languages size={16}/>{lang === "en" ? "BM" : "EN"}</button><button className="menu" onClick={() => setMenu(!menu)} aria-label={t.menu} aria-expanded={menu}>{menu ? <X/> : <Menu/>}</button></div>
    </header>

    <section className="bus-hero" id="top">
      <div className="bus-hero-copy">
        <p className="eyebrow light">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
        <div className="hero-actions"><a className="button gold" href="#routes">{t.browse}<ArrowUpRight size={17}/></a><a className="text-link" href="https://bas.my/basmykuantan.php" target="_blank" rel="noreferrer">{t.official}<ArrowUpRight size={16}/></a></div>
      </div>
      <div className="bus-hero-visual" role="img" aria-label="A route line connecting Kuantan bus destinations">
        <span className="bus-roundel"><BusFront size={34}/></span>
        <span className="route-station route-station-a"><b>Hentian Bandar</b><small>C10–C61</small></span>
        <span className="route-station route-station-b"><b>Balok Makmur</b><small>C60 · C64</small></span>
        <span className="route-station route-station-c"><b>Cherating</b><small>C64</small></span>
        <span className="route-station route-station-d"><b>Kuantan</b><small>C100</small></span>
      </div>
      <p className="bus-route-count">{t.count}</p>
    </section>

    <section className="bus-network section">
      <div><p className="eyebrow">01 — MyBus Kuantan</p><h2>{t.network}</h2></div>
      <p>{t.networkCopy}</p>
    </section>

    <section className="bus-routes section" id="routes">
      <div className="bus-routes-head"><div><p className="eyebrow">02 — {t.routes}</p><h2>{t.routeList}</h2><p>{t.routeListCopy}</p></div><label className="bus-search"><span>{t.search}</span><span><Search size={19}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.searchPlaceholder}/></span></label></div>
      <div className="route-grid">
        {visibleRoutes.map((route) => <a className="route-card" key={route.code} href={route.officialUrl} target="_blank" rel="noreferrer">
          <span className="route-code">{route.code}</span>
          <span className="route-path"><span><MapPin size={15}/>{route.origin}</span><i/><strong>{route.destination}</strong>{route.via && <small>{t.via} {route.via}</small>}{route.loop && <em>{t.loop}</em>}</span>
          <span className="route-link">{t.view}<ArrowUpRight size={16}/></span>
        </a>)}
        {!visibleRoutes.length && <p className="empty">{t.noResults}</p>}
      </div>
    </section>

    <section className="bus-guide section" id="guide"><div className="bus-guide-mark"><BusFront size={44}/><span>BAS.MY</span></div><div><p className="eyebrow light">03 — {t.guide}</p><h2>{t.planning}</h2><p>{t.planningCopy}</p><a className="button gold" href="https://bas.my/basmykuantan.php" target="_blank" rel="noreferrer">{t.check}<ArrowUpRight size={17}/></a></div></section>

    <footer><Link className="brand inverse" href="/"><Image src="/logo-mark.svg" alt="" width={32} height={38}/><span><b>WARISAN</b><small>PAHANG</small></span></Link><p>{t.footer}</p><Link className="footer-back" href="/"><ArrowLeft size={15}/>{t.back}</Link></footer>
  </main>;
}
