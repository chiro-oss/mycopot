import type {
  ProductItem,
  ProcessStage,
  ResearchPillar,
  TeamMember,
  MilestoneItem,
  CircularStep,
} from '../types';

import imgMini from '../assets/images/mycopot_product_mini_1789306865607.jpg';
import imgMedium from '../assets/images/mycopot_product_medium_1789306882140.jpg';
import imgLarge from '../assets/images/mycopot_product_large_1789306896257.jpg';
import imgCustom from '../assets/images/mycopot_product_custom_1789306913436.jpg';
import imgMaterialLab from '../assets/images/mycopot_material_lab_1789306928141.jpg';

export { imgMaterialLab };

export const PRODUCTS: ProductItem[] = [
  {
    id: 'mycopot-mini',
    name: 'MYCOPOT Mini',
    badge: 'Seedling & Indoor',
    size: 'Approx. 8–10 cm',
    price: 'Rp15.000 / unit',
    priceRaw: 15000,
    application: 'For seedlings, succulents, cactus and small indoor plants.',
    shortDescription:
      'Compact biological vessel engineered for delicate root systems, microgreens, and succulent cultivation.',
    fullDescription:
      'Engineered specifically for nursery sprouting and desktop indoor greenery. The porous mycelium-sawdust matrix provides natural micro-aeration for root tips while preventing root circling. When the seedling outgrows the pot, it can be planted directly into soil.',
    dimensions: 'Height: 8.5 cm | Top Diameter: 9.0 cm',
    wallThickness: '4.5 mm average',
    substrate: 'Filtered hardwood sawdust residue',
    binder: 'Pleurotus ostreatus vegetative mycelium',
    features: [
      'Micro-porous natural aeration',
      'Direct-to-soil transplantable',
      'Zero synthetic petroleum polymers',
      'Decomposes naturally in garden soil',
    ],
    image: imgMini,
  },
  {
    id: 'mycopot-medium',
    name: 'MYCOPOT Medium',
    badge: 'Standard Nursery',
    size: 'Approx. 12–15 cm',
    price: 'Rp25.000 / unit',
    priceRaw: 25000,
    application: 'For medium ornamental plants, herbs and nursery applications.',
    shortDescription:
      'Balanced structural format designed for kitchen herbs, table ornamentals, and commercial botanical nurseries.',
    fullDescription:
      'A versatile biomaterial container tailored for medium-stage horticultural cultivation. Structural rigidity is calibrated to withstand 3–6 months of regular surface watering while maintaining form stability until soil-burial biodegradation is triggered.',
    dimensions: 'Height: 13.5 cm | Top Diameter: 14.0 cm',
    wallThickness: '6.0 mm average',
    substrate: 'Wood-processing byproduct sawdust',
    binder: 'Pleurotus ostreatus vegetative mycelium',
    features: [
      'Optimal thermal buffer for root systems',
      'Moisture vapor balance',
      'Eliminates transplant shock completely',
      'Uniform biological density',
    ],
    image: imgMedium,
  },
  {
    id: 'mycopot-large',
    name: 'MYCOPOT Large',
    badge: 'Productive Plants',
    size: 'Approx. 18–20 cm',
    price: 'Rp40.000 / unit',
    priceRaw: 40000,
    application: 'For productive plants, potted fruit plants and decorative applications.',
    shortDescription:
      'High-consolidation biological container engineered for robust vegetative root masses and urban home orchards.',
    fullDescription:
      'Our highest structural volume pot, reinforced with dense hyphal colonization. Designed for extended residential indoor display or transitional agricultural planting of dwarf fruit shrubs, robust ornamental foliage, and perennial vegetable crops.',
    dimensions: 'Height: 18.0 cm | Top Diameter: 20.0 cm',
    wallThickness: '8.0 mm average',
    substrate: 'Grade-A localized timber residue',
    binder: 'Pleurotus ostreatus vegetative mycelium',
    features: [
      'Reinforced wall consolidation',
      'Sustained structural integrity',
      'Post-life biological soil enrichment',
      'Low embodied carbon footprint',
    ],
    image: imgLarge,
  },
  {
    id: 'mycopot-custom',
    name: 'MYCOPOT Custom',
    badge: 'Bespoke Engineering',
    size: 'Custom dimensions and shapes',
    price: 'Starting from Rp30.000 / unit',
    priceRaw: 30000,
    application: 'For wedding souvenirs, corporate gifting and special events.',
    shortDescription:
      'Tailored biological geometries, custom mold tooling, embossed typography, and custom volume production.',
    fullDescription:
      'Engineered in collaboration with organizations, eco-conscious brands, and event planners. We fabricate bespoke negative molds for hexagonal geometries, embossed brand marks, custom souvenir dimensions, and specialty horticultural form factors.',
    dimensions: 'Configured to client design brief',
    wallThickness: 'Engineered per specification (4–10 mm)',
    substrate: 'Controlled sawdust fiber formulation',
    binder: 'Pleurotus ostreatus vegetative mycelium',
    features: [
      'Custom 3D-printed mold tooling',
      'Embossed logos or event typography',
      'Batch production from 50 to 5,000 units',
      'Accompanying biological material specimen cards',
    ],
    image: imgCustom,
    isCustom: true,
  },
];

export const WHY_MYCOPOT = [
  {
    num: '01',
    title: 'BIOLOGICAL',
    summary: 'Mycelium acts as a biological binder within the composite material.',
    details:
      'Rather than relying on chemical binders, glues, or plastic polymers, living fungal hyphae branch through wood substrate to physically weave the material together.',
  },
  {
    num: '02',
    title: 'WASTE-DERIVED',
    summary: 'Sawdust from wood processing is used as the primary substrate.',
    details:
      'We intercept local timber processing residues that would otherwise be burned or landfilled, upcycling lignocellulosic cellulose into durable solid structures.',
  },
  {
    num: '03',
    title: 'BIODEGRADABLE',
    summary: 'The product is designed as an alternative material that can return to the biological cycle.',
    details:
      'At end-of-life or upon burial, natural soil microbes and environmental moisture break down the mycelium composite into organic matter without leaving microplastic residue.',
  },
  {
    num: '04',
    title: 'DIRECT PLANTING',
    summary: 'The pot is designed to support direct planting without requiring conventional pot removal.',
    details:
      'Plants can be inserted into the ground together with the MYCOPOT. This eliminates plastic pot peeling, root trauma, and nursery waste.',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'SUBSTRATE PREPARATION',
    duration: 'Day 1–2',
    summary: 'Sawdust is prepared and combined with supporting materials.',
    description:
      'Locally sourced wood sawdust is sieved for particle size uniformity, adjusted for optimal moisture content (approx. 60–65%), and supplemented with natural nutrients to foster vigorous mycelial colonization.',
    parameters: {
      action: 'Sieving, moisture calibration, pasteurization / heat sterilization',
      equipment: 'Autoclave / steam chamber, mechanical blender',
    },
  },
  {
    step: '02',
    title: 'INOCULATION',
    duration: 'Day 2',
    summary: 'Mycelium spawn is introduced into the prepared substrate.',
    description:
      'Pure culture spawn of Pleurotus ostreatus (oyster mushroom) is thoroughly blended with the conditioned substrate under sterile laminar airflow conditions to ensure clean culture dominance.',
    parameters: {
      action: 'Aseptic blending of vegetative fungal spawn with wood substrate',
      equipment: 'Laminar flow cabinet, sterilized mixing tools',
    },
  },
  {
    step: '03',
    title: 'MOLDING',
    duration: 'Day 2–3',
    summary: 'The substrate and mycelium mixture is placed into molds.',
    description:
      'The inoculated composite mixture is packed into geometric 3D tooling molds designed with micro-ventilation ports that allow gas exchange while preserving target dimensional tolerances.',
    parameters: {
      action: 'Compaction into custom negative form molds',
      equipment: 'Precision ergonomic tooling molds, mechanical tamping jig',
    },
  },
  {
    step: '04',
    title: 'INCUBATION',
    duration: 'Day 3–11 (approx. 7–10 days)',
    summary: 'Controlled environmental conditions allow mycelium to grow and bind the substrate.',
    description:
      'The molded units are placed in an incubation darkroom. Fungal hyphae continuously expand through the sawdust particles, forming a dense, self-assembled network that solidifies the vessel.',
    parameters: {
      temp: '24°C – 28°C',
      humidity: '75% – 85% RH',
      action: 'Vegetative hyphal elongation and particle interlock',
      equipment: 'Climate-controlled incubation chamber',
    },
  },
  {
    step: '05',
    title: 'HEAT TREATMENT',
    duration: 'Day 12',
    summary: 'The material is treated to stop further mycelial growth and stabilize the structure.',
    description:
      'Once full biological consolidation is achieved, pots are demolded and transferred into a drying convective heat chamber. This inactivates the fungus permanently and removes residual moisture.',
    parameters: {
      temp: '65°C – 75°C thermal baking',
      action: 'Fungal inactivation, dehydration to <10% moisture content',
      equipment: 'Industrial convective drying oven',
    },
  },
  {
    step: '06',
    title: 'FINISHING',
    duration: 'Day 13–14',
    summary: 'The final pot is removed from the mold, refined, labeled and packaged.',
    description:
      'Stabilized plant pots undergo dimensional quality checks, edge deburring, density recording, eco-friendly paper labeling, and protective shipping preparation.',
    parameters: {
      action: 'Edge refinement, quality inspection, natural labeling, packaging',
      equipment: 'Rotary fine sanding, electronic caliper, batch stamping',
    },
  },
];

export const CIRCULAR_STEPS: CircularStep[] = [
  {
    step: 1,
    label: 'WOOD PROCESSING',
    category: 'Input',
    description: 'Timber and lumber processing facilities generate residual wood shavings and sawdust.',
  },
  {
    step: 2,
    label: 'SAWDUST',
    category: 'Input',
    description: 'Low-value lignocellulosic wood waste is intercepted and sieved instead of incinerated.',
  },
  {
    step: 3,
    label: 'MYCOPOT MATERIAL',
    category: 'Transformation',
    description: 'Living oyster mushroom mycelium bio-binds wood particles into an engineered composite pot.',
  },
  {
    step: 4,
    label: 'PLANT APPLICATION',
    category: 'Application',
    description: 'Nurseries and plant owners grow seedlings directly in the pot with enhanced root aeration.',
  },
  {
    step: 5,
    label: 'BIOLOGICAL DECOMPOSITION',
    category: 'Regeneration',
    description: 'When buried in soil, micro-organisms and soil enzymes naturally break down the matrix.',
  },
  {
    step: 6,
    label: 'SOIL / BIOLOGICAL CYCLE',
    category: 'Regeneration',
    description: 'Returns carbon and organic nutrients to the earth without microplastics or toxic chemicals.',
  },
];

export const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    id: 'formulation',
    code: 'RD-01',
    title: 'FORMULATION',
    focus: 'Explore substrate composition and material formulation.',
    scope: [
      'Screening wood sawdust species (hardwood vs. softwood ratios)',
      'Substrate particle size distribution impact on hyphal density',
      'Natural organic nutrient supplementation optimization',
    ],
    status: 'In Active Testing',
  },
  {
    id: 'structural',
    code: 'RD-02',
    title: 'STRUCTURAL PERFORMANCE',
    focus: 'Evaluate material density, strength and dimensional consistency.',
    scope: [
      'Compressive load resistance testing per wall thickness',
      'Dry vs. wet bulk density measurements',
      'Dimensional shrinkage monitoring during the drying phase',
    ],
    status: 'Iterative Evaluation',
  },
  {
    id: 'moisture',
    code: 'RD-03',
    title: 'MOISTURE RESISTANCE',
    focus: 'Evaluate performance during the intended product life.',
    scope: [
      'Capillary water uptake curves across nursery watering cycles',
      'Natural biological coatings exploration (carnauba, plant waxes)',
      'Structural cohesion retention during active 60-day nursery use',
    ],
    status: 'In Active Testing',
  },
  {
    id: 'biodegradation',
    code: 'RD-04',
    title: 'BIODEGRADATION',
    focus: 'Evaluate decomposition behaviour under relevant conditions.',
    scope: [
      'Soil burial mass loss tracking over 30, 60, and 90-day intervals',
      'Decomposition rate correlation with ambient soil moisture and microbiota',
      'Absence of phytotoxic residues on surrounding plant root systems',
    ],
    status: 'In Active Testing',
  },
  {
    id: 'mold',
    code: 'RD-05',
    title: 'MOLD DEVELOPMENT',
    focus: 'Develop consistent product geometry and scalable manufacturing.',
    scope: [
      'Draft angles for clean demolding without shearing surface hyphae',
      'Aeration port patterns inside mold shells for uniform hyphal growth',
      'Modular 3D tooling for cost-effective geometric adaptation',
    ],
    status: 'Formulation Stage',
  },
  {
    id: 'future',
    code: 'RD-06',
    title: 'FUTURE MATERIAL APPLICATIONS',
    focus: 'Explore potential applications beyond plant pots.',
    scope: [
      'Protective molded packaging corners for electronics and shipping',
      'Acoustic wall tiles and interior architectural biomaterial panels',
      'Horticultural nursery seedling plug trays and modular farming media',
    ],
    status: 'Exploratory Phase',
  },
];

export const RESEARCH_MINDSET_STEPS = [
  { step: '01', title: 'HYPOTHESIS', desc: 'Identify biological questions and material requirements' },
  { step: '02', title: 'FORMULATION', desc: 'Calibrate fungal spawn ratios, wood fiber grades, and moisture' },
  { step: '03', title: 'PROTOTYPE', desc: 'Fabricate physical test batches in controlled mold cavities' },
  { step: '04', title: 'TEST', desc: 'Measure density, compression, moisture uptake, and growth stability' },
  { step: '05', title: 'ANALYZE', desc: 'Examine microscopic hyphae matrix binding and structural flaws' },
  { step: '06', title: 'IMPROVE', desc: 'Iterate parameters to elevate product resilience and consistency' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Arief Surya Darma',
    role: 'Chief Executive Officer',
    affiliation: 'Universitas Jambi',
    department: 'Executive Leadership & Strategy',
    avatarSeed: 'Arief',
  },
  {
    name: 'M. Ghaisan Alfirizki',
    role: 'Chief Operating Officer',
    affiliation: 'Universitas Jambi',
    department: 'Operations & Manufacturing',
    avatarSeed: 'Ghaisan',
  },
  {
    name: 'Anjeli Bismi Arsy',
    role: 'Finance',
    affiliation: 'Universitas Jambi',
    department: 'Financial Management & Budgeting',
    avatarSeed: 'Anjeli',
  },
  {
    name: 'Fadila Rezki Desriani',
    role: 'Research & Development',
    affiliation: 'Universitas Jambi',
    department: 'Biological Materials Research',
    avatarSeed: 'Fadila',
  },
  {
    name: 'Sovia Zulfiqa Melati',
    role: 'Head of Promotion',
    affiliation: 'Universitas Jambi',
    department: 'Marketing, Public Relations & Brand',
    avatarSeed: 'Sovia',
  },
  {
    name: 'Airin Natasya Putri',
    role: 'Secretary',
    affiliation: 'Universitas Jambi',
    department: 'Administration & Institutional Relations',
    avatarSeed: 'Airin',
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    period: 'MONTH 1–2',
    phase: 'Foundation & Incubation',
    description:
      'Research & development of substrate formulation, mold trials and incubation optimization.',
    keyOutputs: [
      'Substrate sawdust moisture matrix baseline',
      'Pleurotus ostreatus strain compatibility checks',
      'Initial 3D negative mold geometry test runs',
    ],
    status: 'Current Focus',
  },
  {
    period: 'MONTH 3',
    phase: 'Prototyping & Testing',
    description: 'Prototype finalization and testing.',
    keyOutputs: [
      'Compression and watering stability evaluations',
      'Batch-to-batch structural uniformity',
      'Initial sample distribution to local nurseries',
    ],
    status: 'Scheduled',
  },
  {
    period: 'MONTH 4',
    phase: 'Soft Launch',
    description: 'Soft launching and small-scale production.',
    keyOutputs: [
      'First pilot batch run (MYCOPOT Mini & Medium)',
      'Direct gardener and nursery trial feedback capture',
      'Packaging and biological instruction label release',
    ],
    status: 'Scheduled',
  },
  {
    period: 'MONTH 5–6',
    phase: 'Optimization & Breakeven',
    description: 'Consumer feedback, production optimization and break-even target.',
    keyOutputs: [
      'Iterate mold release and heating drying efficiency',
      'Unit economics refinement per pot tier',
      'Initial revenue generation milestones',
    ],
    status: 'Scheduled',
  },
  {
    period: 'MONTH 7–9',
    phase: 'Ecosystem Expansion',
    description: 'Marketplace expansion, nursery/florist collaboration and branding.',
    keyOutputs: [
      'Commercial florist and boutique nursery partner programs',
      'Eco-lifestyle marketplace distribution',
      'Custom corporate souvenir product rollout',
    ],
    status: 'Scheduled',
  },
  {
    period: 'MONTH 10–12',
    phase: 'Capacity & B2B',
    description: 'Production capacity expansion and corporate market penetration.',
    keyOutputs: [
      'Modular incubation rack system deployment',
      'Bulk enterprise gifting and B2B contracts',
      'Pilot nursery bulk direct-planting supply',
    ],
    status: 'Scheduled',
  },
  {
    period: 'YEAR 2',
    phase: 'Diversification & Certification',
    description: 'Certification exploration, geographic expansion and product diversification.',
    keyOutputs: [
      'Formal biological compostability certification',
      'Regional distribution across Sumatra and Java',
      'R&D on secondary protective packaging molds',
    ],
    status: 'Upcoming',
  },
];
