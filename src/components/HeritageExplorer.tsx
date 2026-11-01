"use client";

import { useMemo, useState } from "react";
import { Bike, Bus, ChevronDown, Clock3, ExternalLink, Languages, MapPin, Menu, Search, ShipWheel, Ticket, TrainFront, UtensilsCrossed, X } from "lucide-react";
import { categories, destinations, type Destination } from "@/data/destinations";

const copy = {
  en: { nav: ["Discover", "Journeys", "Stories", "Plan your visit"], eyebrow: "The soul of the east coast", titleA: "Stories live", titleB: "here.", hero: "Journey through royal towns, riverside villages and living traditions in the heart of Pahang.", explore: "Explore the heritage", map: "View heritage map", featured: "15 places with a past", featuredSub: "Explore royal, colonial, industrial, religious, archaeological and living-cultural heritage across Pahang.", all: "All places", details: "View place", stays: "Stay nearby", food: "Food guide", getting: "Getting there", activity: "Things to experience", concern: "Conservation concern", rating: "Heritage potential", indicative: "Visitor information is indicative — confirm before travel", close: "Close", search: "Search a place", noResults: "No places match your search.", mapLink: "Open in OpenStreetMap", quote: "Pahang is not only a place to see. It is a story to enter.", footer: "Made for thoughtful journeys through Pahang." },
  ms: { nav: ["Terokai", "Perjalanan", "Cerita", "Rancang lawatan"], eyebrow: "Jiwa pantai timur", titleA: "Cerita hidup", titleB: "di sini.", hero: "Jelajahi bandar diraja, kampung tepian sungai dan tradisi hidup di tengah negeri Pahang.", explore: "Terokai warisan", map: "Lihat peta warisan", featured: "15 tempat penuh sejarah", featuredSub: "Terokai warisan diraja, kolonial, industri, agama, arkeologi dan budaya hidup di seluruh Pahang.", all: "Semua tempat", details: "Lihat tempat", stays: "Penginapan berdekatan", food: "Panduan makanan", getting: "Cara ke sana", activity: "Aktiviti", concern: "Isu pemuliharaan", rating: "Potensi warisan", indicative: "Maklumat pelawat adalah anggaran — sahkan sebelum perjalanan", close: "Tutup", search: "Cari tempat", noResults: "Tiada tempat sepadan dengan carian anda.", mapLink: "Buka di OpenStreetMap", quote: "Pahang bukan sekadar tempat untuk dilihat. Ia sebuah cerita untuk diterokai.", footer: "Dicipta untuk perjalanan bermakna di Pahang." }
};

export default function HeritageExplorer() {
  const [lang, setLang] = useState<"en" | "ms">("en");
  const [category, setCategory] = useState<(typeof categories)[number]>("All places");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Destination | null>(null);
  const [menu, setMenu] = useState(false);
  const t = copy[lang];
  const visible = useMemo(() => destinations.filter((item) => (category === "All places" || item.category === category) && `${item.name} ${item.nameMs} ${item.region}`.toLowerCase().includes(query.toLowerCase())), [category, query]);

  return <main>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Warisan Pahang home"><img src="/logo-mark.svg" alt=""/><span><b>WARISAN</b><small>PAHANG</small></span></a>
      <nav className={menu ? "nav open" : "nav"}>{t.nav.map((item, i) => <a key={item} href={i === 0 ? "#discover" : i === 3 ? "#plan" : "#stories"} onClick={() => setMenu(false)}>{item}</a>)}</nav>
      <div className="nav-actions"><button className="lang" onClick={() => setLang(lang === "en" ? "ms" : "en")}><Languages size={16}/>{lang === "en" ? "BM" : "EN"}</button><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button></div>
    </header>

    <section className="hero" id="top">
      <div className="hero-overlay"/><div className="hero-grain"/>
      <div className="hero-content"><p className="eyebrow light">— {t.eyebrow}</p><h1>{t.titleA}<br/><em>{t.titleB}</em></h1><p className="hero-copy">{t.hero}</p><div className="hero-actions"><a className="button gold" href="#discover">{t.explore}<ChevronDown size={17}/></a><a className="text-link" href="#map"><MapPin size={17}/>{t.map}</a></div></div>
      <div className="hero-index"><span>03° 49&apos; N</span><i/><span>103° 20&apos; E</span></div>
    </section>

    <section className="intro section" id="discover"><div><p className="eyebrow">01 — {lang === "en" ? "Discover Pahang" : "Terokai Pahang"}</p><h2>{t.featured}</h2></div><p>{t.featuredSub}</p></section>

    <section className="filters section"><div className="category-list">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item === "All places" ? t.all : item}</button>)}</div><label className="search"><Search size={18}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.search}/></label></section>

    <section className="places section">
      {visible.map((place, index) => <article className="place-card" key={place.id} onClick={() => setSelected(place)} tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setSelected(place)}>
        <div className="card-image" style={{backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(15,28,23,.78)), url('${place.image}')`}}><span className="card-number">{String(index + 1).padStart(2, "0")}</span><span className="card-category">{place.category}</span><div className="card-location"><MapPin size={14}/>{place.region}, Pahang</div></div>
        <div className="card-body"><h3>{lang === "en" ? place.name : place.nameMs}</h3><p>{lang === "en" ? place.intro : place.introMs}</p><div className="card-meta"><span><Ticket size={16}/>{t.rating}: {place.rating}/5</span><span><Clock3 size={16}/>{place.hours.split("·")[0]}</span></div><button>{t.details}<span>↗</span></button></div>
      </article>)}
      {!visible.length && <p className="empty">{t.noResults}</p>}
    </section>

    <section className="map-section" id="map"><div className="map-copy"><p className="eyebrow light">02 — {lang === "en" ? "Find your way" : "Cari perjalanan"}</p><h2>{lang === "en" ? "Heritage, across the state." : "Warisan di seluruh negeri."}</h2><p>{lang === "en" ? "From the royal riverlands to old railway towns, every route reveals another layer of Pahang." : "Dari lembah sungai diraja ke bandar kereta api lama, setiap laluan menyingkap lapisan baharu Pahang."}</p></div><div className="map-visual"><div className="map-lines"/>{destinations.slice(0,5).map((place, i) => <button key={place.id} style={{left: `${[68,39,74,21,42][i]}%`, top: `${[70,55,75,30,35][i]}%`}} onClick={() => setSelected(place)}><span>{i+1}</span><small>{place.region}</small></button>)}</div></section>

    <section className="story" id="stories"><div className="story-image"/><blockquote>“{t.quote}”<span>— {lang === "en" ? "A journey shaped by memory" : "Perjalanan dibentuk oleh kenangan"}</span></blockquote></section>

    <section className="plan section" id="plan"><div><p className="eyebrow">03 — {lang === "en" ? "Plan with confidence" : "Rancang dengan yakin"}</p><h2>{lang === "en" ? "Everything for the road." : "Segalanya untuk perjalanan."}</h2></div><div className="plan-grid"><div><Bus/><h3>{lang === "en" ? "Road & bus" : "Jalan & bas"}</h3><p>{lang === "en" ? "Most heritage towns are connected from Kuantan by road and regional bus." : "Kebanyakan bandar warisan dihubungkan dari Kuantan melalui jalan raya dan bas."}</p></div><div><TrainFront/><h3>{lang === "en" ? "Rail journeys" : "Perjalanan kereta api"}</h3><p>{lang === "en" ? "The Jungle Railway serves inland towns including Kuala Lipis and Jerantut." : "Laluan Kereta Api Hutan melalui Kuala Lipis dan Jerantut."}</p></div><div><Bike/><h3>{lang === "en" ? "Slow travel" : "Perjalanan santai"}</h3><p>{lang === "en" ? "Walking and cycling are rewarding in compact old towns and villages." : "Berjalan kaki dan berbasikal sesuai di pekan lama dan kampung."}</p></div><div><ShipWheel/><h3>{lang === "en" ? "River routes" : "Laluan sungai"}</h3><p>{lang === "en" ? "Boats remain essential for selected river and rainforest experiences." : "Bot penting untuk pengalaman sungai dan hutan hujan tertentu."}</p></div></div></section>

    <footer><div className="brand inverse"><img src="/logo-mark.svg" alt=""/><span><b>WARISAN</b><small>PAHANG</small></span></div><p>{t.footer}</p><p>© 2026 · Malaysia</p></footer>

    {selected && <div className="modal-backdrop" onMouseDown={() => setSelected(null)}><aside className="detail" onMouseDown={(e) => e.stopPropagation()}><button className="close" onClick={() => setSelected(null)} aria-label={t.close}><X/></button><div className="detail-hero" style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(11,28,22,.85)),url('${selected.image}')`}}><span>{selected.category}</span><h2>{lang === "en" ? selected.name : selected.nameMs}</h2><p><MapPin size={16}/>{selected.region}, Pahang</p></div><div className="detail-body"><div className="price-line"><b>{t.rating}: {selected.rating}/5</b><span><Clock3 size={16}/>{selected.hours}</span></div><p>{lang === "en" ? selected.intro : selected.introMs}</p><h3>{t.concern}</h3><p>{selected.concern}</p><h3>{t.activity}</h3><ul>{selected.activities.map(x => <li key={x}>{x}</li>)}</ul><div className="detail-columns"><div><h3>{t.stays}</h3>{selected.stays.map(x => <div className="item" key={x.name}><b>{x.name}</b><span>{x.distance} · {x.price}</span></div>)}</div><div><h3><UtensilsCrossed size={17}/>{t.food}</h3>{selected.food.map(x => <div className="item" key={x.label}><b>{x.label}</b><span>{x.range}</span></div>)}</div></div><h3>{t.getting}</h3><div className="chips">{selected.transport.map(x => <span key={x}>{x}</span>)}</div><a className="map-button" target="_blank" rel="noreferrer" href={`https://www.openstreetmap.org/?mlat=${selected.coordinates[0]}&mlon=${selected.coordinates[1]}#map=14/${selected.coordinates[0]}/${selected.coordinates[1]}`}><MapPin size={18}/>{t.mapLink}<ExternalLink size={15}/></a><small className="disclaimer">{t.indicative}</small></div></aside></div>}
  </main>;
}
