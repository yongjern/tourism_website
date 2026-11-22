export type BusRoute = {
  code: string;
  origin: string;
  destination: string;
  via?: string;
  loop?: boolean;
  officialUrl: string;
};

export const busRoutes: BusRoute[] = [
  { code: "C10", origin: "Hentian Bandar", destination: "Gambang Resort", officialUrl: "https://bas.my/route/C10-hentian-bandar-gambang-resort.php" },
  { code: "C11", origin: "Hentian Bandar", destination: "Indera Sempurna", loop: true, officialUrl: "https://bas.my/route/C11-hentian-bandar-indera-sempurna.php" },
  { code: "C12", origin: "Hentian Bandar", destination: "Permatang Badak", loop: true, officialUrl: "https://bas.my/route/C12-hentian-bandar-permatang-badak.php" },
  { code: "C20", origin: "Hentian Bandar", destination: "Teluk Cempedak", officialUrl: "https://bas.my/route/C20-hentian-bandar-teluk-cempedak.php" },
  { code: "C30", origin: "Hentian Bandar", destination: "Taman Impian", officialUrl: "https://bas.my/route/C30-hentian-bandar-taman-impian.php" },
  { code: "C31", origin: "Hentian Bandar", destination: "Bukit Sagu", via: "Bukit Kuantan", officialUrl: "https://bas.my/route/C31-hentian-bandar-bukit-sagu-via-bukit-kuantan.php" },
  { code: "C32", origin: "Hentian Bandar", destination: "Indera Mahkota", officialUrl: "https://bas.my/route/C32-hentian-bandar-indera-mahkota.php" },
  { code: "C33", origin: "Hentian Bandar", destination: "Terminal Sentral Kuantan", via: "UIA", officialUrl: "https://bas.my/route/C33-hentian-bandar-terminal-sentral-kuantan-via-UIA.php" },
  { code: "C40", origin: "Hentian Bandar", destination: "Pekan", officialUrl: "https://bas.my/route/C40-hentian-bandar-pekan.php" },
  { code: "C41", origin: "Hentian Bandar", destination: "Kuala Pahang", officialUrl: "https://bas.my/route/C41-hentian-bandar-kuala-pahang.php" },
  { code: "C42", origin: "Hentian Bandar", destination: "Sg Soi", officialUrl: "https://bas.my/route/C42-hentian-bandar-sg-soi.php" },
  { code: "C50", origin: "Hentian Bandar", destination: "Sungai Lembing", officialUrl: "https://bas.my/route/C50-hentian-bandar-sungai-lembing.php" },
  { code: "C60", origin: "Hentian Bandar", destination: "Balok Makmur", officialUrl: "https://bas.my/route/C60-hentian-bandar-balok-makmur.php" },
  { code: "C61", origin: "Hentian Bandar", destination: "POLISAS", officialUrl: "https://bas.my/route/C61-hentian-bandar-POLISAS.php" },
  { code: "C64", origin: "Balok Makmur", destination: "Cherating", officialUrl: "https://bas.my/route/C64-balok-makmur-cherating.php" },
  { code: "C100", origin: "Bandaraya Kuantan", destination: "Feeder", loop: true, officialUrl: "https://bas.my/route/C100-bandaraya-kuantan-feeder.php" },
];
