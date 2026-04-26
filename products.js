// ============================================================
//  MITUSHI FASHION - PRODUCTS DATA
//  Yahan apni kurtis add karo
//  Google Drive photo kaise add karein - neeche guide hai
// ============================================================
//
//  📸 GOOGLE DRIVE PHOTO LINK KAISE BANAYEIN:
//  1. Google Drive mein photo open karo
//  2. Right click → "Share" → "Anyone with the link" select karo
//  3. Link copy karo — kuch aisa dikhega:
//     https://drive.google.com/file/d/XXXXXXXXXXXXXXX/view?usp=sharing
//  4. Us link mein se sirf XXXXXXXXXXXXXXX (File ID) copy karo
//  5. Neeche photo field mein paste karo: "XXXXXXXXXXXXXXX"
//
// ============================================================

const WHATSAPP_NUMBER = "917976964364"; // Aapka WhatsApp number (91 + 10 digit)

const products = [
  {
    id: 1,
    name: "Sleeveless Collar Neck Kurti",
    price: 701,
    originalPrice: 779,
    fabric: "Cotton",
    desc: "Soft cotton, Premium Comfort Fabric, wide Palazzos",
    photo: "16E7lzestvZRtQ_-gt_eaZ_SVjaTBNoac", // 👈 Yahan apna Google Drive File ID daalo
    colors: ["Peacock Green"],
    sizes: ["M", "L", "XL",],
    category: "casual",
    badge: "NEW",
    inStock: true
  },
  {
    id: 2,
    name: "Embroidered Straight Kurti",
    price: 749,
    originalPrice: 999,
    fabric: "Rayon",
    desc: "Beautiful embroidery work, rayon fabric, party ready",
    photo: "1l267jINpgysXyzr0Ml2Gwv788GU558V5", // 👈 Yahan apna Google Drive File ID daalo
    colors: ["Blue", "White", "Green"],
    sizes: ["S", "M", "L", "XL"],
    category: "festive",
    badge: "HOT",
    inStock: true
  },
  {
    id: 3,
    name: "Casual Daily Wear Kurti",
    price: 349,
    originalPrice: 450,
    fabric: "Cotton",
    desc: "Comfortable pure cotton, everyday wear, easy to wash",
    photo: "12FtGc9eMG3WTl52vW1ne2bymubVpZgi_", // 👈 Yahan apna Google Drive File ID daalo
    colors: ["Orange", "Cream", "Peach"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "casual",
    badge: "",
    inStock: true
  },
  {
    id: 4,
    name: "Festive Silk Kurti",
    price: 899,
    originalPrice: 1199,
    fabric: "Silk",
    desc: "Premium silk fabric, perfect for festivals & parties",
    photo: "1Al0Y9JEKnOlXrvPzBLEryfWpomAkxtyr", // 👈 Yahan apna Google Drive File ID daalo
    colors: ["Maroon", "Gold", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    category: "festive",
    badge: "SALE",
    inStock: true
  },
  {
    id: 5,
    name: "Printed Rayon Kurti",
    price: 449,
    originalPrice: 599,
    fabric: "Rayon",
    desc: "Trendy block print, lightweight rayon, very comfortable",
    photo: "1FbRcU6OdT2pQmV7wX9zAbCd", // 👈 Yahan apna Google Drive File ID daalo
    colors: ["Purple", "Teal", "Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "casual",
    badge: "",
    inStock: true
  },
  {
    id: 6,
    name: "Mirror Work Kurti",
    price: 649,
    originalPrice: 850,
    fabric: "Cotton",
    desc: "Gujarati mirror work, traditional ethnic look, very pretty",
    photo: "1GcSdV7PeU3qRnW8xY0aBcDe", // 👈 Yahan apna Google Drive File ID daalo
    colors: ["Blue", "Green", "Orange"],
    sizes: ["S", "M", "L", "XL"],
    category: "festive",
    badge: "",
    inStock: true
  }
];

// ============================================================
//  NAYI KURTI ADD KARNE KA TARIKA:
//  {
//    id: 7,                          ← next number
//    name: "Kurti ka naam",
//    price: 599,                     ← aapka price
//    originalPrice: 799,             ← crossed price (thoda zyada dikhao)
//    fabric: "Cotton",               ← Cotton / Rayon / Silk / Georgette
//    desc: "Short description",
//    photo: "GOOGLE_DRIVE_FILE_ID",  ← Drive ka File ID
//    colors: ["Red", "Blue"],
//    sizes: ["S", "M", "L", "XL"],
//    category: "casual",             ← casual / festive / party
//    badge: "NEW",                   ← NEW / HOT / SALE / "" (khaali)
//    inStock: true
//  },
// ============================================================
