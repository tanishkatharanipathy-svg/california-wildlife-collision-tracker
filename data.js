// California Wildlife-Vehicle Collision Data
const hotspotData = [
    // TIER 1: DEADLIEST
    {
        rank: 1,
        location: "Interstate 280",
        county: "Santa Clara/San Mateo",
        region: "Bay Area",
        incidents: "300+ (deer), 5,000+ (newts)",
        cost: "$178,439/mile/year",
        species: "Mule Deer, Pacific Newts",
        risk: "CRITICAL",
        latitude: 37.3382,
        longitude: -122.0724,
        details: "Deadliest highway for wildlife collisions. High volume of Pacific newts during migration season (Lexington Reservoir area)."
    },
    {
        rank: 2,
        location: "Alma Bridge Road",
        county: "Santa Clara",
        region: "Bay Area",
        incidents: "5,000+/year",
        cost: "High",
        species: "Pacific Newts",
        risk: "CRITICAL",
        latitude: 37.2567,
        longitude: -122.0156,
        details: "World's highest amphibian roadkill rate. Migration zone to Lexington Reservoir. Approximately 5,000 newts killed annually."
    },
    {
        rank: 3,
        location: "Highway 17",
        county: "Santa Clara/Santa Cruz",
        region: "Bay Area",
        incidents: "200+/year",
        cost: "$50M+",
        species: "Mountain Lions, Deer",
        risk: "CRITICAL",
        latitude: 37.1869,
        longitude: -121.9777,
        details: "Critical wildlife corridor. High mountain lion and deer mortalities. Proposed wildlife crossing projects."
    },
    {
        rank: 4,
        location: "U.S. 101 (Marin County)",
        county: "Marin",
        region: "Bay Area",
        incidents: "150+/year",
        cost: "High",
        species: "Deer, Mountain Lions",
        risk: "HIGH",
        latitude: 37.9577,
        longitude: -122.5107,
        details: "Major north-south corridor. Multiple wildlife habitat areas nearby. Frequent deer and mountain lion collisions."
    },
    {
        rank: 5,
        location: "U.S. 101 (Sonoma/Mendocino)",
        county: "Sonoma/Mendocino",
        region: "Northern CA",
        incidents: "150+/year",
        cost: "High",
        species: "Deer, Elk",
        risk: "HIGH",
        latitude: 38.6521,
        longitude: -123.2083,
        details: "Redwood and oak woodland areas. Elk and deer populations crossing major highway."
    },

    // TIER 2: SIERRA NEVADA
    {
        rank: 6,
        location: "Highway 88",
        county: "Alpine/Amador",
        region: "Sierra Nevada",
        incidents: "80-120/year",
        cost: "High",
        species: "Mule Deer, Black Bear",
        risk: "HIGH",
        latitude: 38.7147,
        longitude: -120.3883,
        details: "Alpine pass. High elevation habitat with seasonal migration patterns. Bears and deer common."
    },
    {
        rank: 7,
        location: "Highway 4",
        county: "Tuolumne/Calaveras",
        region: "Sierra Nevada",
        incidents: "80-120/year",
        cost: "High",
        species: "Mule Deer, Coyote",
        risk: "HIGH",
        latitude: 38.2485,
        longitude: -120.4458,
        details: "Mountain pass corridor. Coyote and deer populations. Heavy seasonal traffic."
    },
    {
        rank: 8,
        location: "Highway 108",
        county: "Tuolumne",
        region: "Sierra Nevada",
        incidents: "70-100/year",
        cost: "High",
        species: "Mule Deer, Black Bear",
        risk: "HIGH",
        latitude: 38.0952,
        longitude: -120.0234,
        details: "Sierra pass. Remote area with significant wildlife populations. Winter closures affect migration patterns."
    },
    {
        rank: 9,
        location: "U.S. 50",
        county: "El Dorado/Placer",
        region: "Sierra Nevada",
        incidents: "70-100/year",
        cost: "High",
        species: "Mule Deer, Black Bear",
        risk: "HIGH",
        latitude: 38.7854,
        longitude: -120.8842,
        details: "Major east-west corridor through Sierra Nevada. High-speed highway. Multiple bear crossings annually."
    },
    {
        rank: 10,
        location: "Highway 49",
        county: "Nevada/Placer",
        region: "Sierra Nevada",
        incidents: "50-80/year",
        cost: "Moderate-High",
        species: "Mule Deer",
        risk: "HIGH",
        latitude: 39.0156,
        longitude: -120.9864,
        details: "Historic gold rush route through foothills. Deer migration hotspot."
    },

    // TIER 3: NORTHERN
    {
        rank: 11,
        location: "Interstate 5 (Shasta-Lassen)",
        county: "Shasta/Lassen",
        region: "Northern CA",
        incidents: "60-90/year",
        cost: "Moderate-High",
        species: "Black Bear, Deer",
        risk: "HIGH",
        latitude: 40.5921,
        longitude: -121.5243,
        details: "Major north-south freeway. Forest habitat on both sides. Seasonal bear activity."
    },
    {
        rank: 12,
        location: "Highway 20 (Clear Lake)",
        county: "Lake/Colusa",
        region: "Northern CA",
        incidents: "50-70/year",
        cost: "Moderate",
        species: "Deer, Wild Turkey",
        risk: "HIGH",
        latitude: 39.1326,
        longitude: -122.6124,
        details: "Lake region. Oak woodland and riparian habitat. Waterfowl and game birds also affected."
    },
    {
        rank: 13,
        location: "Highway 44 (Lassen County)",
        county: "Lassen",
        region: "Northern CA",
        incidents: "40-60/year",
        cost: "Moderate",
        species: "Black Bear, Deer",
        risk: "MODERATE",
        latitude: 40.3726,
        longitude: -121.2789,
        details: "Remote mountain highway. National forest area. Seasonal closures affect patterns."
    },
    {
        rank: 14,
        location: "U.S. 97",
        county: "Modoc/Lassen",
        region: "Northern CA",
        incidents: "40-60/year",
        cost: "Moderate",
        species: "Deer, Pronghorn",
        risk: "MODERATE",
        latitude: 41.1926,
        longitude: -121.4863,
        details: "High desert highway. Limited traffic. Pronghorn and deer populations."
    },
    {
        rank: 15,
        location: "Highway 299",
        county: "Shasta/Trinity",
        region: "Northern CA",
        incidents: "40-60/year",
        cost: "Moderate",
        species: "Deer, Mountain Lion",
        risk: "MODERATE",
        latitude: 40.8854,
        longitude: -122.4152,
        details: "Mountain pass. Remote wilderness area. Low traffic but high wildlife density."
    },

    // TIER 4: SOUTHERN
    {
        rank: 16,
        location: "Interstate 405",
        county: "Los Angeles",
        region: "Southern CA",
        incidents: "80-120/year",
        cost: "Moderate-High",
        species: "Coyote, Deer",
        risk: "HIGH",
        latitude: 34.0522,
        longitude: -118.2437,
        details: "High-traffic urban freeway. Wildlife corridor fragmentation. Coyote adaptations to urban areas."
    },
    {
        rank: 17,
        location: "Highway 2",
        county: "Los Angeles",
        region: "Southern CA",
        incidents: "70-100/year",
        cost: "Moderate-High",
        species: "Mountain Lion, Deer",
        risk: "HIGH",
        latitude: 34.1899,
        longitude: -118.1941,
        details: "San Gabriel Mountains. Critical mountain lion habitat. Proposed wildlife crossing."
    },
    {
        rank: 18,
        location: "Interstate 15",
        county: "San Diego",
        region: "Southern CA",
        incidents: "60-90/year",
        cost: "Moderate",
        species: "Coyote, Deer",
        risk: "HIGH",
        latitude: 32.7157,
        longitude: -117.1611,
        details: "Major north-south freeway. Desert and coastal sage scrub habitat."
    },
    {
        rank: 19,
        location: "Highway 67",
        county: "San Diego",
        region: "Southern CA",
        incidents: "50-80/year",
        cost: "Moderate",
        species: "Mountain Lion, Deer",
        risk: "HIGH",
        latitude: 32.9256,
        longitude: -116.7987,
        details: "Mountain pass. Ramona area. Significant mountain lion populations."
    },
    {
        rank: 20,
        location: "Interstate 8",
        county: "San Diego",
        region: "Southern CA",
        incidents: "50-80/year",
        cost: "Moderate",
        species: "Coyote, Deer",
        risk: "HIGH",
        latitude: 32.6370,
        longitude: -116.3725,
        details: "East-west corridor through desert. Desert habitat fragmentation."
    },
    {
        rank: 21,
        location: "U.S. 101 (Santa Barbara)",
        county: "Santa Barbara",
        region: "Central Coast",
        incidents: "40-70/year",
        cost: "Moderate",
        species: "Deer, Mountain Lion",
        risk: "MODERATE",
        latitude: 34.4208,
        longitude: -119.7026,
        details: "Coastal corridor. Chaparral and oak woodland habitat."
    },
    {
        rank: 22,
        location: "Highway 154",
        county: "Santa Barbara",
        region: "Central Coast",
        incidents: "40-60/year",
        cost: "Moderate",
        species: "Deer, Coyote",
        risk: "MODERATE",
        latitude: 34.4789,
        longitude: -119.8326,
        details: "Mountain pass. Los Olivos area. Deer and coyote crossings."
    },

    // TIER 5: CENTRAL COAST
    {
        rank: 23,
        location: "U.S. 101 (Monterey)",
        county: "Monterey",
        region: "Central Coast",
        incidents: "40-70/year",
        cost: "Moderate",
        species: "Deer, Mountain Lion",
        risk: "MODERATE",
        latitude: 36.6002,
        longitude: -121.8944,
        details: "Coastal highway. Salinas Valley. Agricultural and wilderness habitat."
    },
    {
        rank: 24,
        location: "Highway 1 (Big Sur)",
        county: "Monterey",
        region: "Central Coast",
        incidents: "30-50/year",
        cost: "Moderate",
        species: "Deer, Mountain Lion",
        risk: "MODERATE",
        latitude: 36.3638,
        longitude: -121.8082,
        details: "Scenic coastal highway. Remote wilderness. Mountain lion habitat."
    },
    {
        rank: 25,
        location: "U.S. 101 (San Luis Obispo)",
        county: "San Luis Obispo",
        region: "Central Coast",
        incidents: "30-50/year",
        cost: "Moderate",
        species: "Deer, Elk",
        risk: "MODERATE",
        latitude: 35.2828,
        longitude: -120.6625,
        details: "Central coast corridor. Oak woodland and grassland habitat."
    }
];

// Annual Statistics
const annualStats = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    collisions: [20000, 20500, 21000, 20800, 21200, 20500],
    costs: [232, 240, 250, 245, 255, 250]
};

// Species Data
const speciesData = {
    labels: ['Mule Deer', 'Pacific Newts', 'Coyotes', 'Other Mammals/Birds', 'Black Bears', 'Mountain Lions'],
    data: [48000, 22000, 2000, 5000, 557, 300]
};

// Export data
window.hotspotData = hotspotData;
window.annualStats = annualStats;
window.speciesData = speciesData;
