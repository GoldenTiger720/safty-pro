export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  relatedProducts: string[];
  applicable_standards?: string[];
}

export const products: Product[] = [
  {
    id: "aluminum-wolf-jump-600mm",
    name: "Aluminum Wolf Jump 600mm (M-CROSS)",
    category: "Wolf Jumps",
    price: 1299.99,
    image: "/images/acces-sur-mesure-construction.jpg",
    description:
      "Elevated crossing platform for negotiating obstacles or risk areas. Robust construction.",
    features: [
      "Width 600 mm",
      "Platform 1000 mm",
      "Heights from 293 mm to 2300 mm",
      "Modular",
      "Configurable",
      "Corrosion resistant",
      "Railing compatible",
      "Quick assembly",
    ],
    specifications: {
      Material: "Aluminum",
      Width: "600 mm",
      Platform: "1000 mm",
      "Height Range": "293 mm to 2300 mm",
      "Assembly Time": "30 minutes",
    },
    relatedProducts: [
      "straight-ladder-crinoline",
      "non-slip-aluminum-walkway",
      "floor-mounted-handrail",
    ],
    applicable_standards: ["EN ISO 14122-4", "NF E85-016"],
  },
  {
    id: "straight-ladder-crinoline",
    name: "Straight ladder with crinoline (M-LADDER)",
    category: "Cat ladders",
    price: 879.99,
    image: "/images/acces-sur-mesure-energies-renouvelables.jpg",
    description:
      "Aluminum vertical ladder with safety crinoline, modular design, different heights.",
    features: [
      "With crinoline",
      "Front or side exit",
      "Different height kits",
      "Fixings available",
    ],
    specifications: {
      Material: "Aluminum",
      Type: "Vertical with crinoline",
      Design: "Modular",
      "Exit Options": "Front or side",
      Compliance: "EN ISO 14122-2, EN ISO 14122-3",
    },
    relatedProducts: [
      "aluminum-wolf-jump-600mm",
      "non-slip-aluminum-walkway",
      "temporary-wall-mounted-railing",
    ],
    applicable_standards: ["EN ISO 14122-2", "EN ISO 14122-3"],
  },
  {
    id: "non-slip-aluminum-walkway",
    name: "Non-slip aluminum walkway (M-WALK)",
    category: "Technical walkways",
    price: 749.99,
    image: "/images/acces-sur-mesure-industrie.jpg",
    description:
      "Safe walkway with non-slip surface, with or without side railings.",
    features: [
      "Modular structure",
      "Easy adaptation",
      "Compatible with COLSAFE systems",
      "Corrosion resistant",
      "Integrated handrails",
    ],
    specifications: {
      Material: "Aluminum",
      Surface: "Non-slip",
      Structure: "Modular",
      Handrails: "Optional integrated",
      "Weather Resistance": "Corrosion resistant",
    },
    relatedProducts: [
      "aluminum-wolf-jump-600mm",
      "straight-ladder-crinoline",
      "wall-mounted-handrail",
    ],
    applicable_standards: ["EN ISO 14122-2", "EN ISO 14122-3"],
  },
  {
    id: "skylight-mesh-screen",
    name: "Skylight Mesh Screen (SkyMesh)",
    category: "Skylight Screening",
    price: 349.99,
    image: "/images/acces-sur-mesure-logistique.jpg",
    description:
      "SkyMesh metal grid protection system for skylights. Designed to prevent falls through fragile skylights without modifying the existing structure.",
    features: [
      "Heavy-duty reinforced mesh",
      "Quick tool-free installation",
      "Special perimeter fixing without compromising watertightness",
      "Compatible with polycarbonate and covers",
    ],
    specifications: {
      Material: "Reinforced metal mesh",
      Installation: "Tool-free",
      Compatibility: "Polycarbonate and covers",
      "Fixing Method": "Special perimeter",
      Waterproofing: "Maintains integrity",
    },
    relatedProducts: [
      "hi-vis-laminated-net",
      "self-supporting-guardrail",
      "floor-mounted-handrail",
    ],
    applicable_standards: ["EN ISO 14122-3", "CE Certificates"],
  },
  {
    id: "hi-vis-laminated-net",
    name: "HI-VIS 600-1200J laminated net + Skylight protection",
    category: "HI-VIS fall arrest nets",
    price: 429.99,
    image: "/images/acces-sur-mesure-maintenance.jpg",
    description:
      "High-visibility yellow plastic-coated metal netting, impact resistance up to 1200 joules.",
    features: [
      "High visibility",
      "Sea resistant",
      "10 year lifespan",
      "Parallel or perpendicular mounting",
      "Includes anchors, plates and rivets",
    ],
    specifications: {
      Material: "Plastic-coated metal",
      Color: "High-visibility yellow",
      "Impact Resistance": "Up to 1200 joules",
      Lifespan: "10 years",
      "Mounting Options": "Parallel or perpendicular",
      Includes: "Anchors, plates and rivets",
    },
    relatedProducts: [
      "skylight-mesh-screen",
      "temporary-wall-mounted-railing",
      "metal-plated-railing",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "floor-mounted-handrail",
    name: "Floor-mounted handrail (M-SAFE)",
    category: "Safety handrails",
    price: 189.99,
    image: "/images/acces-sur-mesure-maintennace-technique.png",
    description:
      "No-drilling system. Ideal for waterproofed roofs. With recycled counterweights.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      Installation: "No-drilling",
      Application: "Waterproofed roofs",
      Counterweights: "Recycled material",
      Compatibility: "COLSAFE systems",
    },
    relatedProducts: [
      "wall-mounted-handrail",
      "self-supporting-guardrail",
      "handrail-sabot-d",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "wall-mounted-handrail",
    name: "Wall-mounted or offset handrail (M-SAFE)",
    category: "Safety railings",
    price: 159.99,
    image: "/images/acces-sur-mesure-monde-agricole.png",
    description:
      "Direct fixing to solid surfaces. Robust, compatible with skirting boards. Ideal for technical platforms and walkable roofs.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      Mounting: "Direct to solid surfaces",
      Compatibility: "Skirting boards",
      Application: "Technical platforms, walkable roofs",
      Installation: "Quick assembly",
    },
    relatedProducts: [
      "floor-mounted-handrail",
      "self-supporting-guardrail",
      "concrete-railing",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "self-supporting-guardrail",
    name: "Self-supporting guardrail (M-SAFE)",
    category: "Safety railings",
    price: 219.99,
    image: "/images/ECH_6220___1100x1100.jpg",
    description:
      "Vertical lateral fixing. Use on parapets or walls. Saves space in narrow areas without interfering with the structure.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      "Fixing Type": "Vertical lateral",
      Application: "Parapets, walls",
      "Space Efficiency": "Saves space in narrow areas",
      "Structure Impact": "No interference",
    },
    relatedProducts: [
      "wall-mounted-handrail",
      "floor-mounted-handrail",
      "temporary-wall-mounted-railing",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "temporary-wall-mounted-railing",
    name: "Temporary Wall-Mounted Railing (M-SAFE)",
    category: "Safety Railings",
    price: 179.99,
    image: "/images/3.png",
    description:
      "Removable system for temporary installations. Safety during construction without compromising the structure.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      Type: "Removable",
      Application: "Temporary installations",
      Installation: "Quick assembly/disassembly",
      "Structure Impact": "No compromise",
    },
    relatedProducts: [
      "self-supporting-guardrail",
      "sabot-z-railing",
      "temporary-sabot-z-rail",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "aerated-concrete-railing",
    name: "Railing with aerated concrete insert (M-SAFE)",
    category: "Safety railings",
    price: 199.99,
    image: "/images/ECH_5495___1100x1100.jpg",
    description:
      "Suitable for lightweight structures and cellular concrete walls. Maximum compatibility and safety without overloads.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      Application: "Lightweight structures, cellular concrete walls",
      "Safety Level": "Maximum compatibility",
      Load: "No overloads",
      Installation: "Quick assembly",
    },
    relatedProducts: [
      "concrete-railing",
      "self-supporting-guardrail",
      "wall-mounted-handrail",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "concrete-railing",
    name: "Railing with exterior application to concrete (M-SAFE)",
    category: "Safety railings",
    price: 209.99,
    image: "/images/4.jpg",
    description:
      "Exterior side mounting without roof intervention. Compatible with concrete walls. Perimeter protection without affecting waterproofing.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      Mounting: "Exterior side",
      "Roof Impact": "No intervention",
      Compatibility: "Concrete walls",
      "Protection Type": "Perimeter",
      Waterproofing: "Unaffected",
    },
    relatedProducts: [
      "aerated-concrete-railing",
      "wall-mounted-handrail",
      "self-supporting-guardrail",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "metal-plated-railing",
    name: "Metal-plated railing (M-SAFE)",
    category: "Safety railings",
    price: 229.99,
    image: "/images/5.jpg",
    description:
      "Exterior fixing designed for Bac Acier type metal roofs. Does not pierce the roof, respects watertightness.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      "Fixing Type": "Exterior",
      "Designed For": "Bac Acier type metal roofs",
      "Roof Impact": "No piercing",
      Waterproofing: "Respected",
    },
    relatedProducts: [
      "handrail-sabot-d",
      "sabot-z-railing",
      "sheet-metal-railing",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "handrail-sabot-d",
    name: "Handrail with Sabot D (M-SAFE)",
    category: "Safety rails",
    price: 189.99,
    image: "/images/6.jpg",
    description:
      '"D" type angle bracket. Ideal for sloping roofs or complex facades. Minimizes waterproofing intervention.',
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      "Bracket Type": '"D" type angle',
      Application: "Sloping roofs, complex facades",
      "Waterproofing Impact": "Minimized intervention",
      Installation: "Quick assembly",
    },
    relatedProducts: [
      "sabot-z-railing",
      "metal-plated-railing",
      "sheet-metal-railing",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "sabot-z-railing",
    name: "Sabot Z Railing (M-SAFE)",
    category: "Safety Railings",
    price: 199.99,
    image: "/images/7.jpg",
    description:
      '"Z" shaped metal shoe that distributes load and prevents direct drilling. Preserves waterproofing and façade.',
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      "Shoe Shape": '"Z" shaped',
      Function: "Load distribution",
      Drilling: "Prevents direct drilling",
      Preservation: "Waterproofing and façade",
    },
    relatedProducts: [
      "handrail-sabot-d",
      "temporary-sabot-z-rail",
      "railing-sabot-be",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "temporary-sabot-z-rail",
    name: "Temporary Sabot Z-rail (M-SAFE)",
    category: "Safety Railings",
    price: 169.99,
    image: "/images/8.jpg",
    description:
      "Same protection as Sabot Z but for temporary works. Safety without permanent anchors.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      Type: "Temporary",
      "Protection Level": "Same as Sabot Z",
      Application: "Temporary works",
      Anchoring: "No permanent anchors",
    },
    relatedProducts: [
      "sabot-z-railing",
      "temporary-wall-mounted-railing",
      "railing-sabot-be",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "railing-sabot-be",
    name: "Railing with Sabot BE (M-SAFE)",
    category: "Safety Railings",
    price: 209.99,
    image: "/images/9.jpg",
    description:
      "Secure fixing to metal roofs without compromising watertightness. Compatible with different sheet metal profiles.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      Fixing: "Secure to metal roofs",
      Waterproofing: "Not compromised",
      Compatibility: "Different sheet metal profiles",
      Installation: "Quick assembly",
    },
    relatedProducts: [
      "sabot-z-railing",
      "sheet-metal-railing",
      "metal-plated-railing",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
  {
    id: "sheet-metal-railing",
    name: "Railing fixed to sheet metal (M-SAFE)",
    category: "Safety railings",
    price: 219.99,
    image: "/images/10.jpg",
    description:
      "External tray mounting. High structural rigidity and maximum roof protection. Ideal for industrial environments.",
    features: [
      "Compatible with COLSAFE systems",
      "Aluminum construction",
      "Quick installation",
      "Certified collective protection",
    ],
    specifications: {
      Material: "Aluminum",
      Mounting: "External tray",
      Rigidity: "High structural",
      Protection: "Maximum roof protection",
      Environment: "Industrial",
    },
    relatedProducts: [
      "metal-plated-railing",
      "railing-sabot-be",
      "handrail-sabot-d",
    ],
    applicable_standards: ["EN ISO 14122-3"],
  },
];

export const categories = [
  {
    id: "wolf-jumps",
    name: "Wolf Jumps",
    image: "/images/products/wolf-jumps.jpg",
    description:
      "Elevated crossing platforms for negotiating obstacles or risk areas.",
  },
  {
    id: "cat-ladders",
    name: "Cat Ladders",
    image: "/images/products/cat-ladders.jpg",
    description:
      "Professional grade vertical ladders with safety features including crinoline protection.",
  },
  {
    id: "technical-walkways",
    name: "Technical Walkways",
    image: "/images/products/technical-walkways.jpg",
    description:
      "Safe walkways with non-slip surfaces, with or without side railings.",
  },
  {
    id: "safety-railings",
    name: "Safety Railings",
    image: "/images/products/safety-railings.jpg",
    description:
      "Modular guardrail systems for various mounting situations and surfaces.",
  },
  {
    id: "skylight-screening",
    name: "Skylight Screening",
    image: "/images/products/skylight-screening.jpg",
    description:
      "Protection systems for skylights to prevent falls through fragile surfaces.",
  },
  {
    id: "fall-arrest-nets",
    name: "Fall Arrest Nets",
    image: "/images/products/fall-arrest-nets.jpg",
    description:
      "High-visibility nets designed to arrest falls and protect from impact damage.",
  },
];

export const heroSlides = [
  {
    id: "slide1",
    title: "Professional Height Safety Solutions",
    subtitle: "Complete protection systems for working at heights",
    image:
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    cta: "Shop Now",
  },
  {
    id: "slide2",
    title: "Certified Fall Protection",
    subtitle: "Equipment that meets the highest safety standards",
    image: "/images/1.jpg",
    cta: "View Products",
  },
  {
    id: "slide3",
    title: "Industrial Safety Guardrails",
    subtitle: "Protect your workforce with reliable barrier systems",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    cta: "Explore Systems",
  },
];
