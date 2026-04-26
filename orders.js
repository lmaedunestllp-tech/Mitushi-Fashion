// ============================================================
//  MITUSHI FASHION - ORDERS DATA
//  Naya order aane par yahan add karo
//  GitHub pe edit karke commit karo — client ko status dikhega
// ============================================================
//
//  ORDER STATUS OPTIONS:
//  "received"  → Order Received (payment pending)
//  "confirmed" → Order Confirmed ✅
//  "packed"    → Order Packed 📦
//  "dispatch"  → Out for Delivery 🚚
//  "delivered" → Delivered ✅
//  "cancelled" → Cancelled ❌
//
// ============================================================

const orders = [

  // ── EXAMPLE ORDER (isko dekh ke samjho format) ──
  {
    id: "MF001",                        // Order ID — har order ka alag
    customerName: "Priya Sharma",       // Client ka naam
    mobile: "9876543210",               // Client ka mobile
    product: "Floral Anarkali Kurti",   // Kurti ka naam
    size: "M",
    color: "Pink",
    qty: 1,
    amount: 499,                        // Total amount ₹
    address: "Kothrud, Pune - 411038",  // Delivery address
    orderDate: "25 Apr 2026",           // Order date
    status: "delivered",               // Current status
    timeline: [
      { status: "received",  label: "Order Received",     date: "25 Apr, 10:30 AM", done: true  },
      { status: "confirmed", label: "Order Confirmed",    date: "25 Apr, 11:00 AM", done: true  },
      { status: "packed",    label: "Order Packed",       date: "25 Apr, 2:00 PM",  done: true  },
      { status: "dispatch",  label: "Out for Delivery",   date: "26 Apr, 10:00 AM", done: true  },
      { status: "delivered", label: "Delivered",          date: "26 Apr, 1:30 PM",  done: true  },
    ],
    note: "Thank you for shopping! 🎉"
  },

  // ── NAYA ORDER AANE PAR YAHAN ADD KARO ──
  // {
  //   id: "MF002",
  //   customerName: "Sunita Patil",
  //   mobile: "9823456789",
  //   product: "Embroidered Straight Kurti",
  //   size: "L",
  //   color: "Blue",
  //   qty: 1,
  //   amount: 749,
  //   address: "Wakad, Pune - 411057",
  //   orderDate: "26 Apr 2026",
  //   status: "packed",
  //   timeline: [
  //     { status: "received",  label: "Order Received",   date: "26 Apr, 9:00 AM",  done: true  },
  //     { status: "confirmed", label: "Order Confirmed",  date: "26 Apr, 9:30 AM",  done: true  },
  //     { status: "packed",    label: "Order Packed",     date: "26 Apr, 12:00 PM", done: true  },
  //     { status: "dispatch",  label: "Out for Delivery", date: "",                 done: false },
  //     { status: "delivered", label: "Delivered",        date: "",                 done: false },
  //   ],
  //   note: "Delivery today evening expected"
  // },

];

// ============================================================
//  NAYI ORDER ADD KARNE KA QUICK GUIDE:
//
//  1. Upar commented example ko copy karo
//  2. Comment hata do (// hata do)
//  3. Sab details bharo
//  4. Status update karte raho jaise order aage badhta hai
//  5. Commit karo — client ko turant dikhega!
//
//  ORDER ID FORMAT: MF001, MF002, MF003...
//  Client ko yeh link bhejo WhatsApp pe:
//  https://lmaedunestllp-tech.github.io/Mitushi-Fashion/tracking.html?order=MF001
// ============================================================
