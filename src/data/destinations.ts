export type Destination = {
  id: string;
  name: string;
  nameMs: string;
  region: string;
  category: "Royal Heritage" | "Living Culture" | "Historic Town" | "Nature & Heritage";
  intro: string;
  introMs: string;
  image: string;
  coordinates: [number, number];
  hours: string;
  admission: string;
  activities: string[];
  stays: { name: string; distance: string; price: string }[];
  food: { label: string; range: string }[];
  transport: string[];
};

export const destinations: Destination[] = [
  {
    id: "pekan-royal-town", name: "Pekan Royal Town", nameMs: "Bandar Diraja Pekan", region: "Pekan",
    category: "Royal Heritage", intro: "Walk through Pahang's royal capital, where palaces, museums and riverfront kampungs preserve centuries of courtly history.",
    introMs: "Telusuri ibu kota diraja Pahang dengan istana, muzium dan kampung tepian sungai yang menyimpan sejarah berabad lamanya.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85", coordinates: [3.4935, 103.3896],
    hours: "Tue–Sun · 9:00–17:00", admission: "From RM 5", activities: ["Sultan Abu Bakar Museum", "Royal Mosque trail", "Silk weaving demonstration"],
    stays: [{ name: "Ancasa Royale Pekan", distance: "1.2 km", price: "From RM 190/night" }, { name: "Pekan Budget Hotel", distance: "2.1 km", price: "From RM 80/night" }],
    food: [{ label: "Local breakfast", range: "RM 5–12" }, { label: "Traditional lunch", range: "RM 12–30" }], transport: ["Car", "Local taxi", "Bicycle", "River boat"]
  },
  {
    id: "sungai-lembing", name: "Sungai Lembing", nameMs: "Sungai Lembing", region: "Kuantan",
    category: "Historic Town", intro: "Once home to one of the world's deepest tin mines, this quiet valley town tells a remarkable industrial story.",
    introMs: "Pekan lembah yang tenang ini pernah menempatkan salah sebuah lombong bijih timah terdalam di dunia.",
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&q=85", coordinates: [3.9167, 103.0369],
    hours: "Daily · Best before 16:00", admission: "Museum from RM 2", activities: ["Mining Museum", "Heritage street walk", "Panorama Hill sunrise"],
    stays: [{ name: "Casa Hill Resort", distance: "1.0 km", price: "From RM 145/night" }, { name: "Time Capsule Retreat", distance: "1.8 km", price: "From RM 120/night" }],
    food: [{ label: "Market noodles", range: "RM 6–12" }, { label: "Local café meal", range: "RM 10–25" }], transport: ["Car", "Bus from Kuantan", "Motorcycle", "Bicycle"]
  },
  {
    id: "pulau-keladi", name: "Pulau Keladi Cultural Village", nameMs: "Kampung Budaya Pulau Keladi", region: "Pekan",
    category: "Living Culture", intro: "Meet the craft traditions of Pahang at the birthplace of statesman Tun Abdul Razak, surrounded by timber village homes.",
    introMs: "Kenali tradisi kraf Pahang di tempat kelahiran negarawan Tun Abdul Razak, dikelilingi rumah kayu kampung.",
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=1200&q=85", coordinates: [3.4799, 103.3948],
    hours: "Tue–Sun · 9:30–16:30", admission: "Free–RM 10", activities: ["Traditional weaving", "Village architecture", "Tun Razak memorial"],
    stays: [{ name: "Ancasa Royale Pekan", distance: "4.2 km", price: "From RM 190/night" }],
    food: [{ label: "Village snacks", range: "RM 3–8" }, { label: "Family meal", range: "RM 10–25" }], transport: ["Car", "E-hailing", "Bicycle"]
  },
  {
    id: "kuala-lipis", name: "Kuala Lipis Heritage Trail", nameMs: "Jejak Warisan Kuala Lipis", region: "Lipis",
    category: "Historic Town", intro: "Trace colonial-era railway history through former administrative buildings, shophouses and the grand old station.",
    introMs: "Jejaki sejarah kereta api era kolonial melalui bangunan pentadbiran lama, rumah kedai dan stesen bersejarah.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85", coordinates: [4.1847, 102.0542],
    hours: "Open daily · Daylight hours", admission: "Free", activities: ["Self-guided heritage trail", "Railway station visit", "Old town photography"],
    stays: [{ name: "Lipis Plaza Hotel", distance: "0.7 km", price: "From RM 85/night" }, { name: "Star-Well Hotel", distance: "1.1 km", price: "From RM 75/night" }],
    food: [{ label: "Kopitiam breakfast", range: "RM 5–10" }, { label: "Town restaurant", range: "RM 10–25" }], transport: ["KTM train", "Car", "Bus", "Walking"]
  },
  {
    id: "taman-negara", name: "Taman Negara & Orang Asli Heritage", nameMs: "Taman Negara & Warisan Orang Asli", region: "Jerantut",
    category: "Nature & Heritage", intro: "Experience one of the world's oldest rainforests while learning respectfully about the living knowledge of local communities.",
    introMs: "Alami salah sebuah hutan hujan tertua di dunia sambil mengenali ilmu hidup komuniti tempatan dengan penuh hormat.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85", coordinates: [4.3824, 102.4013],
    hours: "Daily · Permit required", admission: "Permit from RM 1", activities: ["Community-led visit", "Canopy walk", "River journey"],
    stays: [{ name: "Mutiara Taman Negara", distance: "On-site", price: "From RM 320/night" }, { name: "Balai Serama Guesthouse", distance: "2.5 km", price: "From RM 170/night" }],
    food: [{ label: "Floating restaurant", range: "RM 12–35" }, { label: "Resort dining", range: "RM 30–70" }], transport: ["Boat", "Bus to Jerantut", "Shuttle van", "Walking"]
  },
  {
    id: "chenor", name: "Chenor Riverside Village", nameMs: "Kampung Tepian Sungai Chenor", region: "Maran",
    category: "Living Culture", intro: "Slow down beside the Pahang River among traditional houses, fishing stories and enduring village foodways.",
    introMs: "Nikmati suasana Sungai Pahang dengan rumah tradisional, kisah nelayan dan warisan makanan kampung.",
    image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1200&q=85", coordinates: [3.4852, 102.6032],
    hours: "Open daily · Visit respectfully", admission: "Free", activities: ["Riverside village walk", "Traditional food tasting", "Fishing experience"],
    stays: [{ name: "Local homestay", distance: "In village", price: "From RM 70/night" }],
    food: [{ label: "Village meal", range: "RM 8–20" }, { label: "River fish set", range: "RM 18–45" }], transport: ["Car", "Motorcycle", "Bicycle", "Boat"]
  }
];

export const categories = ["All places", "Royal Heritage", "Living Culture", "Historic Town", "Nature & Heritage"] as const;
