type Localized<T> = { en: T; ms: T };

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
  activitiesMs?: string[];
  background?: { en: string; ms: string };
  visitorInfo?: {
    en: string;
    ms: string;
    address?: string;
    admission?: Localized<string[]>;
    facilities?: Localized<string[]>;
    nearby?: Localized<string[]>;
    sources?: { en: string; ms: string; url: string }[];
  };
  concernMs?: string;
  stays: { name: string; distance: string; price: string }[];
  food: { label: string; range: string }[];
  transport: string[];
  concern: string;
  rating: number;
};

const makeDestination = (place: Omit<Destination, "hours" | "admission" | "stays" | "food" | "transport">): Destination => ({
  hours: "Confirm before visit", admission: "Confirm before visit",
  stays: [{ name: "Local accommodation", distance: "Check location", price: "Confirm current rates" }],
  food: [{ label: "Local dining", range: "Prices vary" }], transport: ["Car", "E-hailing", "Guided tour"], ...place
});

const royalImage = "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85";
const townImage = "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85";
const cultureImage = "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=1200&q=85";
const natureImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85";

export const destinations: Destination[] = [
  makeDestination({ id: "sultan-abu-bakar-museum", name: "Sultan Abu Bakar Museum", nameMs: "Muzium Sultan Abu Bakar", region: "Pekan", category: "Royal Heritage", intro: "A former royal palace presenting Pahang's royal history, archaeology and material culture—the strongest anchor for a Royal Pekan heritage route.", introMs: "Bekas istana diraja yang memaparkan sejarah diraja, arkeologi dan budaya kebendaan Pahang.", image: royalImage, coordinates: [3.4935, 103.3896], activities: ["Royal galleries", "Archaeology collection", "Palace architecture"], concern: "Collections and historic interiors require controlled lighting, humidity and visitor movement.", rating: 5 }),
  makeDestination({
    id: "sultan-abdullah-mosque-museum", name: "Sultan Abdullah Mosque Museum", nameMs: "Muzium Masjid Sultan Abdullah", region: "Pekan", category: "Royal Heritage",
    intro: "A mosque built around 1930 in Pekan was restored as an Islamic art museum and officially opened in October 2016. It retains a dedicated prayer space alongside its galleries.",
    introMs: "Masjid yang dibina sekitar tahun 1930 di Pekan ini dipulihara sebagai muzium seni Islam dan dibuka secara rasmi pada Oktober 2016. Ruang khas untuk solat dikekalkan di samping galeri pameran.",
    image: "/media/sultan-abdullah-mosque-museum.webp", coordinates: [3.4953, 103.38912],
    activities: ["Islamic architecture and interior details", "Galleries on the Islamic world, Malay world and royal traditions"],
    activitiesMs: ["Seni bina Islam dan perincian hiasan dalaman", "Galeri tentang dunia Islam, alam Melayu dan tradisi diraja"],
    visitorInfo: {
      address: "Jalan Masjid Abdullah, Kampung Pancur, Pekan",
      en: "Visitor listings report 9:00 a.m.–4:30 p.m., with a Friday midday break, and free admission. Confirm hours, admission and prayer space access before visiting. Dress modestly and follow the museum’s photography rules.",
      ms: "Penyenaraian pelawat menyatakan waktu lawatan 9.00 pagi–4.30 petang, dengan rehat tengah hari pada Jumaat, serta kemasukan percuma. Sahkan waktu operasi, bayaran masuk dan akses ke ruang solat sebelum berkunjung. Berpakaian sopan dan patuhi peraturan fotografi muzium.",
      facilities: {
        en: ["Exhibition galleries and a dedicated prayer space", "Confirm wheelchair access at the entrance, parking area and toilets with the museum before travelling"],
        ms: ["Galeri pameran dan ruang khas untuk solat", "Sahkan akses kerusi roda di pintu masuk, kawasan parkir dan tandas dengan pihak muzium sebelum bertolak"],
      },
      nearby: {
        en: ["Sultan Abu Bakar Museum", "Tunku Azizah Royal Craft Village"],
        ms: ["Muzium Sultan Abu Bakar", "Perkampungan Kraf Diraja Tunku Azizah"],
      },
      sources: [
        { en: "Visit Pahang museum listing", ms: "Penyenaraian muzium Visit Pahang", url: "https://www.visitpahang.my/listing/sultan-abdullah-mosque-museum-muzium-masjid-sultan-abdullah/" },
        { en: "WHW exhibition design notes", ms: "Nota reka bentuk pameran WHW", url: "https://www.whwdesign.org/muzium-masjid-sultan-abdullah" },
      ],
    },
    concern: "Adaptive reuse must preserve the building's religious character and architectural authenticity.", rating: 4.5,
  }),
  makeDestination({
    id: "tunku-azizah-craft-village", name: "Tunku Azizah Royal Craft Village", nameMs: "Perkampungan Kraf Diraja Tunku Azizah", region: "Pekan", category: "Living Culture",
    intro: "This craft village in Pulau Keladi, Pekan, showcases Tenun Pahang Diraja weaving, songket and traditional handicrafts.",
    introMs: "Perkampungan kraf di Pulau Keladi, Pekan ini mengetengahkan Tenun Pahang Diraja, songket dan kraftangan tradisional.",
    image: cultureImage, coordinates: [3.4922, 103.3905],
    background: {
      en: "The village grew out of the Pulau Keladi Cultural Complex. Its weaving centre helps preserve Tenun Pahang Diraja, while heritage houses connect the craft village to Pekan’s history.",
      ms: "Perkampungan ini dibangunkan daripada Kompleks Budaya Pulau Keladi. Pusat tenunannya membantu memelihara Tenun Pahang Diraja, manakala rumah warisan di sini memperkenalkan sejarah Pekan.",
    },
    activities: ["Explore the Pahang Silk Weaving Centre and Karyaneka Centre", "Visit Rumah Serambi Pahang and Tun Abdul Razak’s birthplace when open", "Look for batik, woodcarving and Orang Asli crafts when on display"],
    activitiesMs: ["Terokai Pusat Tenun Sutera Pahang dan Pusat Karyaneka", "Lawati Rumah Serambi Pahang dan rumah kelahiran Tun Abdul Razak apabila dibuka", "Lihat batik, ukiran kayu dan kraf Orang Asli jika dipamerkan"],
    visitorInfo: {
      address: "Kampung Pulau Keladi, Pekan",
      en: "Visitor listings report 9:00 a.m.–4:30 p.m. with a Friday midday break. Confirm hours, admission and whether weaving demonstrations are scheduled before travelling.",
      ms: "Penyenaraian pelawat menyatakan waktu lawatan 9.00 pagi–4.30 petang dengan rehat tengah hari pada Jumaat. Sahkan waktu operasi, bayaran masuk dan jadual demonstrasi tenunan sebelum bertolak.",
      facilities: {
        en: ["Weaving and training facilities", "Craft and heritage exhibition spaces", "Recreation and traditional games area"],
        ms: ["Kemudahan tenunan dan latihan", "Ruang pameran kraf dan warisan", "Kawasan rekreasi dan permainan tradisional"],
      },
      nearby: {
        en: ["Sultan Abdullah Mosque Museum", "Sultan Abu Bakar Museum"],
        ms: ["Muzium Masjid Sultan Abdullah", "Muzium Sultan Abu Bakar"],
      },
      sources: [
        { en: "Tourism Malaysia gallery entry", ms: "Entri galeri Tourism Malaysia", url: "https://tmgallery.tourism.gov.my/tmgallery/pages/view.php?ref=89892" },
        { en: "Pahang State Secretary’s Office opening announcement", ms: "Pengumuman pembukaan oleh Pejabat Setiausaha Kerajaan Pahang", url: "https://www.facebook.com/PejabatSUKPahang/posts/perkampungan-kraf-diraja-tunku-azizah-mula-dibuka-kepada-orang-ramaisumber-muziu/611966621587625/" },
      ],
    },
    concern: "Commercialisation should not replace traditional techniques or reduce artisans to demonstrations alone.", rating: 5,
  }),
  makeDestination({
    id: "pulau-beram-museum", name: "Pulau Beram Museum", nameMs: "Muzium Pulau Beram", region: "Pekan", category: "Royal Heritage",
    intro: "The Watercraft Gallery in Pulau Beram, Pekan, tells the story of Pahang’s rivers through traditional boats and sampans.",
    introMs: "Galeri Pengangkutan Air di Pulau Beram, Pekan, menceritakan sejarah sungai di Pahang melalui koleksi perahu tradisional dan sampan.",
    background: {
      en: "Communities along Pahang’s rivers and coast used boats to travel, fish and trade. The gallery displays decorated boats and full-size replicas that show how different craft met those needs.",
      ms: "Masyarakat di sepanjang sungai dan pesisir Pahang menggunakan perahu untuk bergerak, menangkap ikan dan berdagang. Galeri ini mempamerkan perahu berhias dan replika bersaiz sebenar yang menunjukkan kepelbagaian kegunaannya.",
    },
    image: royalImage, coordinates: [3.5118, 103.4003],
    activities: ["Compare traditional Malay boats and sampans", "Learn how waterways shaped everyday life in Pahang"],
    activitiesMs: ["Bandingkan perahu tradisional Melayu dan sampan", "Ketahui peranan sungai dalam kehidupan harian masyarakat Pahang"],
    visitorInfo: {
      en: "Check with the Pahang State Museum for current opening hours, admission and photography rules before visiting.",
      ms: "Semak waktu operasi, bayaran masuk dan peraturan fotografi dengan Muzium Negeri Pahang sebelum berkunjung.",
    },
    concern: "Clear exhibit labels can help visitors distinguish surviving vessels from replicas.",
    concernMs: "Label pameran yang jelas membantu pelawat membezakan perahu asal daripada replika.", rating: 4,
  }),
  makeDestination({
    id: "royal-mausoleum-precinct", name: "Pahang Royal Mausoleum & Abu Bakar Royal Mosque Precinct", nameMs: "Makam Diraja Pahang & Kompleks Masjid Diraja Abu Bakar", region: "Pekan", category: "Royal Heritage",
    intro: "The royal mausoleum and mosque precinct in Pekan bring together the burial traditions of the Pahang royal family and the state’s Islamic heritage.",
    introMs: "Kawasan makam dan masjid diraja di Pekan memperlihatkan tradisi pemakaman keluarga diraja Pahang dan warisan Islam negeri ini.",
    background: {
      en: "Pekan has long been a seat of the Pahang Sultanate. Its royal burial sites and mosques show how Islamic practices have shaped Malay court life and customs.",
      ms: "Pekan telah lama menjadi pusat Kesultanan Pahang. Makam dan masjid dirajanya memperlihatkan pengaruh amalan Islam terhadap kehidupan dan adat istana Melayu.",
    },
    image: royalImage, coordinates: [3.4874, 103.3914],
    activities: ["View the mosque architecture from permitted areas", "Learn about the Pahang Sultanate and its burial traditions"],
    activitiesMs: ["Perhatikan seni bina masjid dari kawasan yang dibenarkan", "Kenali Kesultanan Pahang dan tradisi pemakaman diraja"],
    visitorInfo: {
      en: "Confirm visiting arrangements and any fees in advance. Dress modestly, respect prayer times and photograph only where permitted. Some areas may be closed to visitors.",
      ms: "Sahkan aturan lawatan dan sebarang bayaran terlebih dahulu. Berpakaian sopan, hormati waktu solat dan ambil gambar hanya di kawasan yang dibenarkan. Sesetengah kawasan mungkin ditutup kepada pelawat.",
    },
    concern: "Public access should respect the privacy of royal burial grounds and the needs of worshippers.",
    concernMs: "Akses awam perlu menghormati privasi kawasan makam diraja dan keperluan jemaah.", rating: 4,
  }),
  makeDestination({ id: "lipis-heritage-museum", name: "Lipis Heritage Museum", nameMs: "Muzium Warisan Lipis", region: "Kuala Lipis", category: "Historic Town", intro: "In the former State Secretary's residence, the museum interprets Kuala Lipis during its years as Pahang's capital from 1898 to 1955.", introMs: "Di bekas kediaman Setiausaha Kerajaan, muzium ini mentafsir Kuala Lipis ketika menjadi ibu negeri Pahang dari 1898 hingga 1955.", image: townImage, coordinates: [4.1847, 102.0542], activities: ["Former capital history", "Colonial residence", "Museum galleries"], concern: "The building needs continuous maintenance because of its age and tropical climate.", rating: 4.5 }),
  makeDestination({
    id: "old-state-mosque", name: "Old State Mosque (Masjid Negeri Lama)", nameMs: "Masjid Negeri Lama", region: "Kuala Lipis", category: "Royal Heritage",
    intro: "Built in 1888 beside the Jelai River, this timber mosque served as Pahang’s state mosque when Kuala Lipis was the capital.",
    introMs: "Dibina pada tahun 1888 di tebing Sungai Jelai, masjid kayu ini pernah menjadi masjid negeri Pahang ketika Kuala Lipis menjadi ibu negeri.",
    background: {
      en: "Yemeni merchant Habib Hassan founded the mosque. The building survived major floods in 1926 and 1971. Sultan Abu Bakar and Tun Abdul Razak are among the figures said to have prayed here. The local Indian Muslim community has looked after it since 1980, and it is also known as the Indian Mosque.",
      ms: "Masjid ini diasaskan oleh Habib Hassan, seorang pedagang dari Yaman. Bangunan ini terselamat daripada banjir besar pada tahun 1926 dan 1971. Sultan Abu Bakar dan Tun Abdul Razak antara tokoh yang dikatakan pernah bersolat di sini. Sejak 1980, masjid ini dijaga oleh masyarakat India Muslim setempat dan turut dikenali sebagai Masjid India.",
    },
    image: "/media/old-state-mosque.webp", coordinates: [4.1858, 102.0526],
    activities: ["Observe the traditional timber architecture", "Explore the mosque’s setting beside the Jelai River"],
    activitiesMs: ["Perhatikan seni bina kayu tradisional", "Kenali persekitaran masjid di tebing Sungai Jelai"],
    visitorInfo: {
      en: "Check visiting arrangements and any fees in advance. Dress modestly, avoid interrupting prayers and ask before taking photographs.",
      ms: "Sahkan aturan lawatan dan sebarang bayaran terlebih dahulu. Berpakaian sopan, elakkan mengganggu solat dan minta izin sebelum mengambil gambar.",
    },
    concern: "Moisture and fire are risks to the historic timber structure.",
    concernMs: "Kelembapan dan kebakaran menjadi risiko kepada struktur kayu bersejarah ini.", rating: 5,
  }),
  makeDestination({ id: "kuala-lipis-railway-station", name: "Kuala Lipis Old Railway Station", nameMs: "Stesen Kereta Api Lama Kuala Lipis", region: "Kuala Lipis", category: "Historic Town", intro: "Represents rail transport's role in administration, migration and trade, and fits naturally into a walkable town trail.", introMs: "Mewakili peranan kereta api dalam pentadbiran, penghijrahan dan perdagangan serta sesuai dalam jejak bandar.", image: townImage, coordinates: [4.1821, 102.0559], activities: ["Railway heritage", "Old town walk", "Historic photography"], concern: "Modern railway development could weaken the historic setting if old and new structures are poorly integrated.", rating: 4 }),
  makeDestination({
    id: "clifford-school", name: "Clifford School", nameMs: "Sekolah Clifford", region: "Kuala Lipis", category: "Historic Town",
    intro: "Established in 1913, Clifford School is one of Kuala Lipis’s oldest schools and still serves the town today.",
    introMs: "Ditubuhkan pada tahun 1913, Sekolah Clifford ialah antara sekolah tertua di Kuala Lipis dan masih beroperasi hingga kini.",
    background: {
      en: "Founded during British rule and named after Hugh Clifford, the school has educated generations of local students. Its colonial-era buildings are part of the town’s educational heritage.",
      ms: "Ditubuhkan semasa pemerintahan British dan dinamakan sempena Hugh Clifford, sekolah ini telah mendidik beberapa generasi pelajar tempatan. Bangunan era kolonialnya merupakan sebahagian daripada warisan pendidikan bandar ini.",
    },
    image: townImage, coordinates: [4.1875, 102.0520],
    activities: ["View the historic exterior from public areas", "Learn about the history of education in Kuala Lipis"],
    activitiesMs: ["Lihat bahagian luar bangunan bersejarah dari kawasan awam", "Ketahui sejarah pendidikan di Kuala Lipis"],
    visitorInfo: {
      en: "This is an operating school, not a walk-in attraction. Ask the school for permission before entering the grounds or taking photographs on campus. For local heritage enquiries, contact the Kuala Lipis District Office.",
      ms: "Sekolah ini masih beroperasi dan tidak dibuka untuk lawatan tanpa kebenaran. Minta izin pihak sekolah sebelum memasuki kawasan sekolah atau mengambil gambar di dalamnya. Untuk pertanyaan tentang warisan tempatan, hubungi Pejabat Daerah Kuala Lipis.",
    },
    concern: "Visits should not disrupt classes or compromise student privacy.",
    concernMs: "Lawatan tidak sepatutnya mengganggu pembelajaran atau menjejaskan privasi pelajar.", rating: 4,
  }),
  makeDestination({
    id: "bukit-residen", name: "Bukit Residen & Former Pahang Club Precinct", nameMs: "Bukit Residen & Bekas Kelab Pahang", region: "Kuala Lipis", category: "Historic Town",
    intro: "This hill in Kuala Lipis is associated with the former British Resident’s house and the old Pahang Club.",
    introMs: "Kawasan bukit di Kuala Lipis ini dikaitkan dengan bekas kediaman Residen British dan Kelab Pahang lama.",
    background: {
      en: "The house, built in 1922, served as the British Resident’s official residence. The former Pahang Club was a social gathering place for the British community. Together, the sites tell different sides of colonial life in Kuala Lipis.",
      ms: "Rumah yang dibina pada tahun 1922 ini pernah menjadi kediaman rasmi Residen British. Kelab Pahang pula menjadi tempat pertemuan masyarakat British. Kedua-dua tapak ini memperlihatkan sisi berbeza kehidupan zaman kolonial di Kuala Lipis.",
    },
    image: townImage, coordinates: [4.1889, 102.0498],
    activities: ["View the heritage buildings from public areas", "Look out over Kuala Lipis from accessible viewpoints"],
    activitiesMs: ["Lihat bangunan warisan dari kawasan awam", "Nikmati pemandangan Kuala Lipis dari tempat tinjau yang boleh diakses"],
    visitorInfo: {
      en: "Check current access, hours and any fees with the Lipis District Council. Take photos only from permitted areas, and do not enter closed grounds or buildings without permission.",
      ms: "Sahkan akses, waktu lawatan dan sebarang bayaran dengan Majlis Daerah Lipis. Ambil gambar hanya dari kawasan yang dibenarkan dan jangan masuk ke kawasan atau bangunan yang ditutup tanpa kebenaran.",
    },
    concern: "Public paths and viewpoints should be clearly marked so visitors can appreciate the precinct without entering restricted areas.",
    concernMs: "Laluan awam dan tempat tinjau perlu ditanda dengan jelas agar pelawat tidak memasuki kawasan terhad.", rating: 4,
  }),
  makeDestination({
    id: "sungai-lembing-museum", name: "Sungai Lembing Museum", nameMs: "Muzium Sungai Lembing", region: "Kuantan", category: "Historic Town",
    intro: "The former mine managers’ residence overlooks the Kenau River. Its two floors of galleries trace the town’s underground tin-mining industry and the lives of the people who worked in it.",
    introMs: "Bekas kediaman pengurus lombong ini menghadap Sungai Kenau. Galeri di dua tingkat menelusuri sejarah perlombongan bijih timah bawah tanah dan kehidupan para pekerja lombong.",
    image: "/media/sungai-lembing-museum.webp", coordinates: [3.9167, 103.0369],
    activities: ["Explore underground mining dioramas and geology displays", "See drilling equipment, mine transport and safety gear", "Learn about the people who worked in the tin mines"],
    activitiesMs: ["Terokai diorama perlombongan bawah tanah dan pameran geologi", "Lihat peralatan penggerudian, pengangkutan lombong dan kelengkapan keselamatan", "Kenali kehidupan pekerja lombong bijih timah"],
    visitorInfo: {
      address: "Jalan Muzium, Sungai Lembing",
      en: "The Department of Museums Malaysia’s detailed visitor guide lists daily hours of 9:00 a.m.–5:00 p.m., except the first two days of Aidilfitri and the first day of Aidiladha. The department’s museum overview lists different hours and free admission. Confirm both before travelling.",
      ms: "Panduan terperinci Jabatan Muzium Malaysia menyenaraikan waktu lawatan setiap hari dari 9.00 pagi hingga 5.00 petang, kecuali dua hari pertama Aidilfitri dan hari pertama Aidiladha. Ringkasan muzium oleh jabatan yang sama menyenaraikan waktu berbeza dan kemasukan percuma. Sahkan waktu operasi dan bayaran sebelum bertolak.",
      admission: {
        en: ["Malaysian adult: RM2; Malaysian child aged 12 or younger: free", "Senior citizen or person with a disability (OKU): RM1", "Non-Malaysian adult: RM5; ages 6–12: RM2; under 6: free"],
        ms: ["Dewasa warganegara: RM2; kanak-kanak warganegara berumur 12 tahun ke bawah: percuma", "Warga emas atau orang kurang upaya (OKU): RM1", "Dewasa bukan warganegara: RM5; umur 6–12 tahun: RM2; bawah 6 tahun: percuma"],
      },
      facilities: {
        en: ["Public toilets, surau and parking", "Souvenir shop and cafeteria", "Ask the museum about guided visits and access to research facilities"],
        ms: ["Tandas awam, surau dan tempat letak kereta", "Kedai cenderamata dan kafeteria", "Tanya pihak muzium tentang lawatan berpandu dan akses ke kemudahan penyelidikan"],
      },
      nearby: {
        en: ["Sungai Lembing town and the underground mine", "Rainbow Waterfall, Panorama Hill and the Hanging Bridge", "Crystal House and Sungai Lembing 3D Gallery"],
        ms: ["Pekan Sungai Lembing dan lombong bawah tanah", "Air Terjun Pelangi, Bukit Panorama dan Jambatan Gantung", "Rumah Kristal dan Galeri 3D Sungai Lembing"],
      },
      sources: [
        { en: "Department of Museums Malaysia: detailed visitor guide", ms: "Jabatan Muzium Malaysia: panduan pelawat terperinci", url: "https://www.jmm.gov.my/ms/content/muzium-sungai-lembing-0" },
        { en: "Department of Museums Malaysia: museum overview", ms: "Jabatan Muzium Malaysia: ringkasan muzium", url: "https://www.jmm.gov.my/ms/muzium-sungai-lembing-0" },
      ],
    },
    concern: "Displays should include workers' experiences and environmental impacts, not only corporate or technological history.", rating: 4.5,
  }),
  makeDestination({ id: "sungai-lembing-mine", name: "Sungai Lembing Underground Mine", nameMs: "Lombong Bawah Tanah Sungai Lembing", region: "Kuantan", category: "Historic Town", intro: "An important industrial-heritage attraction offering direct engagement with Pahang's mining landscape in a distinctive tunnel environment.", introMs: "Tarikan warisan industri penting yang membawa pengunjung terus ke landskap perlombongan Pahang dalam persekitaran terowong.", image: townImage, coordinates: [3.9178, 103.0345], activities: ["Underground mine tour", "Industrial heritage", "Mining landscape"], concern: "Structural stability, flooding, ventilation and emergency procedures require strict monitoring.", rating: 5 }),
  makeDestination({ id: "mat-kilau-tomb", name: "Mat Kilau Tomb, Pulau Tawar", nameMs: "Makam Mat Kilau, Pulau Tawar", region: "Jerantut", category: "Royal Heritage", intro: "Associated with Malay warrior Mat Kilau and resistance to British intervention, with strong historical, patriotic and educational value.", introMs: "Dikaitkan dengan pahlawan Melayu Mat Kilau dan penentangan terhadap campur tangan British.", image: royalImage, coordinates: [3.9348, 102.3738], activities: ["Mat Kilau history", "Patriotic heritage", "Reflective visit"], concern: "Interpretation should distinguish documented history from oral tradition and popular legend.", rating: 4.5 }),
  makeDestination({ id: "kota-gelanggi", name: "Kota Gelanggi Cave Complex", nameMs: "Kompleks Gua Kota Gelanggi", region: "Jerantut", category: "Nature & Heritage", intro: "Combines limestone geology, archaeology, biodiversity and folklore as a compelling geotourism and archaeological destination.", introMs: "Menggabungkan geologi batu kapur, arkeologi, biodiversiti dan cerita rakyat sebagai destinasi geowarisan.", image: natureImage, coordinates: [3.9790, 102.4680], activities: ["Cave exploration", "Archaeology", "Geology and folklore"], concern: "Uncontrolled access can damage cave formations, archaeological deposits and wildlife habitats.", rating: 5 }),
  makeDestination({ id: "bentong-gallery", name: "Bentong Gallery & Old Town", nameMs: "Galeri Bentong & Pekan Lama", region: "Bentong", category: "Historic Town", intro: "Introduces Bentong's development, communities and commercial history amid shophouses, markets and food traditions.", introMs: "Memperkenalkan pembangunan, komuniti dan sejarah perdagangan Bentong dalam landskap rumah kedai, pasar dan tradisi makanan.", image: townImage, coordinates: [3.5223, 101.9087], activities: ["Gallery visit", "Old town walk", "Market and food heritage"], concern: "Heritage façades may be lost through redevelopment, inappropriate signage and unsympathetic renovation.", rating: 4 })
];

export const categories = ["All places", "Royal Heritage", "Living Culture", "Historic Town", "Nature & Heritage"] as const;
