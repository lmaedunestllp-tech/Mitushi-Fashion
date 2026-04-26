// ============================================================
//  MITUSHI FASHION - PRODUCTS DATA
// ============================================================

const WHATSAPP_NUMBER = "919503677200"; // 91 + aapka 10 digit number

const products = [
  {
    id: 1,
    name: "Sleeveless Collar Neck Kurti",
    price: 701,
    originalPrice: 779,
    fabric: "Cotton",
    desc: "Collar neck, A-line silhouette with palazzo",
    photo: "1dmaicgdAa4SB0p4nrtqRcXc4iPEFHHfy",
    colors: ["Teal", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "casual",
    badge: "NEW",
    inStock: true,
    details: {
      features: [
        "Sleeveless Kurti with Collar Neck",
        "Front Button Closure",
        "Flowy A-Line Silhouette",
        "Comes with Wide Palazzo",
        "Premium Comfort Fabric"
      ],
      specs: {
        "Fabric":   "Pure Cotton",
        "Style":    "A-Line",
        "Neck":     "Collar Neck",
        "Sleeve":   "Sleeveless",
        "Includes": "Kurti + Palazzo",
        "Occasion": "Casual / Daily"
      },
      washCare: "Hand wash recommended · Do not bleach"
    }
  },
  {
    id: 2,
    name: "Embroidered Straight Kurti",
    price: 749,
    originalPrice: 999,
    fabric: "Rayon",
    desc: "Beautiful embroidery work, rayon fabric, party ready",
    photo: "GOOGLE_DRIVE_FILE_ID_2",
    colors: ["Blue", "White", "Green"],
    sizes: ["S", "M", "L", "XL"],
    category: "festive",
    badge: "HOT",
    inStock: true,
    details: {
      features: [
        "Beautiful Hand Embroidery Work",
        "Straight Cut Design",
        "Lightweight Rayon Fabric",
        "Perfect for Festive Occasions"
      ],
      specs: {
        "Fabric":   "Rayon",
        "Style":    "Straight Cut",
        "Sleeve":   "3/4 Sleeve",
        "Occasion": "Festive / Party"
      },
      washCare: "Dry clean recommended"
    }
  },
  {
    id: 3,
    name: "Casual Daily Wear Kurti",
    price: 349,
    originalPrice: 450,
    fabric: "Cotton",
    desc: "Comfortable pure cotton, everyday wear, easy to wash",
    photo: "GOOGLE_DRIVE_FILE_ID_3",
    colors: ["Orange", "Cream", "Peach"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "casual",
    badge: "",
    inStock: true,
    details: {
      features: [
        "100% Pure Cotton",
        "Comfortable for all day wear",
        "Easy to wash & maintain",
        "Breathable fabric"
      ],
      specs: {
        "Fabric":   "Pure Cotton",
        "Style":    "Regular Fit",
        "Occasion": "Daily Wear"
      },
      washCare: "Machine wash · Cold water"
    }
  },
  {
    id: 4,
    name: "Festive Silk Kurti",
    price: 899,
    originalPrice: 1199,
    fabric: "Silk",
    desc: "Premium silk fabric, perfect for festivals & parties",
    photo: "GOOGLE_DRIVE_FILE_ID_4",
    colors: ["Maroon", "Gold", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    category: "festive",
    badge: "SALE",
    inStock: true,
    details: {
      features: [
        "Premium Soft Silk Fabric",
        "Rich Festive Look",
        "Beautiful Color Options",
        "Perfect for Diwali & Weddings"
      ],
      specs: {
        "Fabric":   "Silk",
        "Style":    "Straight Cut",
        "Occasion": "Festive / Wedding"
      },
      washCare: "Dry clean only"
    }
  },
  {
    id: 5,
    name: "Printed Rayon Kurti",
    price: 449,
    originalPrice: 599,
    fabric: "Rayon",
    desc: "Trendy block print, lightweight rayon, very comfortable",
    photo: "GOOGLE_DRIVE_FILE_ID_5",
    colors: ["Purple", "Teal", "Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "casual",
    badge: "",
    inStock: true,
    details: {
      features: [
        "Trendy Block Print Design",
        "Lightweight Rayon Fabric",
        "Flowy & Comfortable",
        "Versatile — Casual to Semi-Formal"
      ],
      specs: {
        "Fabric":   "Rayon",
        "Print":    "Block Print",
        "Occasion": "Casual / Office"
      },
      washCare: "Hand wash · Mild detergent"
    }
  },
  {
    id: 6,
    name: "Mirror Work Kurti",
    price: 649,
    originalPrice: 850,
    fabric: "Cotton",
    desc: "Gujarati mirror work, traditional ethnic look, very pretty",
    photo: "GOOGLE_DRIVE_FILE_ID_6",
    colors: ["Blue", "Green", "Orange"],
    sizes: ["S", "M", "L", "XL"],
    category: "festive",
    badge: "",
    inStock: true,
    details: {
      features: [
        "Traditional Gujarati Mirror Work",
        "Handcrafted Design",
        "Rich Ethnic Look",
        "Perfect for Navratri & Festivals"
      ],
      specs: {
        "Fabric":   "Cotton",
        "Work":     "Mirror Embroidery",
        "Style":    "A-Line",
        "Occasion": "Festive / Traditional"
      },
      washCare: "Hand wash only · Handle with care"
    }
  }
];

// ============================================================
//  DETAILS FIELD GUIDE:
//
//  details: {
//    features: [
//      "Feature 1",
//      "Feature 2",
//    ],
//    specs: {
//      "Fabric":   "Cotton",
//      "Style":    "A-Line",
//      "Neck":     "Round Neck",
//      "Sleeve":   "Full Sleeve",
//      "Includes": "Only Kurti",
//      "Occasion": "Casual"
//    },
//    washCare: "Hand wash"
//  }
// ============================================================
