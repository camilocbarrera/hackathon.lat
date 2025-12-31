export interface EventBreakdown {
  event: string;
  amount: number;
  location: string;
  date: string;
  participants: number;
  submissions: number;
  url: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  tier: "platinum" | "gold" | "silver" | "bronze" | "partner";
  url: string;
}

export interface WrappedData {
  year: number;
  fundsRaised: {
    total: number;
    currency: string;
    breakdown: EventBreakdown[];
  };
  credits: {
    total: number;
    currency: string;
    partners: Partner[];
  };
  community: {
    hackers: number;
    submissions: number;
    companies: number;
    countries: number;
    countryList: { name: string; flag: string; code: string }[];
  };
  events: EventBreakdown[];
  sponsors: Sponsor[];
}

export const wrappedData: WrappedData = {
  year: 2025,
  fundsRaised: {
    total: 30500,
    currency: "$",
    breakdown: [
      {
        event: "AI Hackathon",
        amount: 4000,
        location: "Global",
        date: "2025",
        participants: 800,
        submissions: 45,
        url: "https://www.ai-hackathon.co",
      },
      {
        event: "Colombia Tech Week Hack",
        amount: 22000,
        location: "Colombia",
        date: "2025",
        participants: 500,
        submissions: 52,
        url: "https://www.colombiatechfest.ai-hackathon.co",
      },
      {
        event: "Peru AI Hackathon",
        amount: 4500,
        location: "Peru",
        date: "2025",
        participants: 1000,
        submissions: 30,
        url: "https://peru.ai-hackathon.co",
      },
    ],
  },
  credits: {
    total: 10000,
    currency: "$",
    partners: [
      {
        name: "Lovable",
        logo: "https://lovable.dev/favicon.ico",
        url: "https://lovable.dev",
      },
      {
        name: "Supabase",
        logo: "https://cdn.brandfetch.io/idsSceG8fK/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1668829260323",
        url: "https://supabase.com",
      },
      {
        name: "n8n",
        logo: "https://n8n.io/favicon.ico",
        url: "https://n8n.io",
      },
      {
        name: "v0",
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/v0.png",
        url: "https://v0.dev",
      },
      {
        name: "ElevenLabs",
        logo: "https://elevenlabs.io/favicon.ico",
        url: "https://elevenlabs.io",
      },
      {
        name: "Cursor",
        logo: "https://cursor.com/favicon.ico",
        url: "https://cursor.com",
      },
    ],
  },
  community: {
    hackers: 700,
    submissions: 127,
    companies: 20,
    countries: 2,
    countryList: [
      { name: "Colombia", flag: "🇨🇴", code: "CO" },
      { name: "Peru", flag: "🇵🇪", code: "PE" },
    ],
  },
  events: [
    {
      event: "AI Hackathon",
      amount: 4000,
      location: "Global",
      date: "2025",
      participants: 800,
      submissions: 45,
      url: "https://www.ai-hackathon.co",
    },
    {
      event: "Colombia Tech Week Hack",
      amount: 22000,
      location: "Colombia",
      date: "2025",
      participants: 500,
      submissions: 52,
      url: "https://www.colombiatechfest.ai-hackathon.co",
    },
    {
      event: "Peru AI Hackathon",
      amount: 4500,
      location: "Peru",
      date: "2025",
      participants: 1000,
      submissions: 30,
      url: "https://peru.ai-hackathon.co",
    },
  ],
  sponsors: [
    // Platinum
    { name: "Supabase", logo: "https://www.colombiatechfest.ai-hackathon.co/supabase.png", tier: "platinum", url: "https://supabase.com" },
    { name: "Lovable", logo: "https://www.peru.ai-hackathon.co/logo_lovable.svg", tier: "platinum", url: "https://lovable.dev" },
    { name: "Huawei", logo: "https://www.peru.ai-hackathon.co/_logo_Logo-Huawei.png", tier: "platinum", url: "https://huawei.com" },
    { name: "Habi", logo: "https://www.colombiatechfest.ai-hackathon.co/Habi.png", tier: "platinum", url: "#" },
    // Gold
    { name: "v0", logo: "https://www.colombiatechfest.ai-hackathon.co/v0.png", tier: "gold", url: "https://v0.dev" },
    { name: "n8n", logo: "https://www.colombiatechfest.ai-hackathon.co/n8n.png", tier: "gold", url: "https://n8n.io" },
    { name: "ElevenLabs", logo: "https://www.peru.ai-hackathon.co/2.png", tier: "gold", url: "https://elevenlabs.io" },
    { name: "Cursor", logo: "https://www.peru.ai-hackathon.co/logo_cursor.svg", tier: "gold", url: "https://cursor.com" },
    { name: "Clerk", logo: "https://www.peru.ai-hackathon.co/_logo_Logo-Clerk.png", tier: "gold", url: "https://clerk.com" },
    { name: "Firecrawl", logo: "https://www.colombiatechfest.ai-hackathon.co/firecrawl.png", tier: "gold", url: "https://firecrawl.dev" },
    { name: "Publicis Sapient", logo: "https://www.colombiatechfest.ai-hackathon.co/publicis-sapien.png", tier: "gold", url: "#" },
    { name: "OpenRouter", logo: "https://www.colombiatechfest.ai-hackathon.co/openrouter.png", tier: "gold", url: "https://openrouter.ai" },
    // Silver
    { name: "Cayetano", logo: "https://www.peru.ai-hackathon.co/logo_cayetano_BN_1.png", tier: "silver", url: "#" },
    { name: "Bioincuba", logo: "https://www.peru.ai-hackathon.co/logo_bioincuba_BN_1.png", tier: "silver", url: "#" },
    { name: "Yavendió", logo: "https://www.peru.ai-hackathon.co/1.png", tier: "silver", url: "#" },
    { name: "forHuman", logo: "https://www.peru.ai-hackathon.co/3.png", tier: "silver", url: "#" },
    { name: "Repensar", logo: "https://www.peru.ai-hackathon.co/logo_repensar_logo.png", tier: "silver", url: "#" },
    { name: "Wallbit", logo: "https://www.colombiatechfest.ai-hackathon.co/Wallbit.png", tier: "silver", url: "#" },
    { name: "Factored", logo: "https://www.colombiatechfest.ai-hackathon.co/Factored.png", tier: "silver", url: "#" },
    { name: "GoodRec", logo: "https://www.colombiatechfest.ai-hackathon.co/good-rec.png", tier: "silver", url: "#" },
    { name: "Trez", logo: "https://www.colombiatechfest.ai-hackathon.co/Trez.png", tier: "silver", url: "#" },
    // Bronze
    { name: "Valtec", logo: "https://www.peru.ai-hackathon.co/_logo_logo-valtec.png", tier: "bronze", url: "#" },
    { name: "Nutriera", logo: "https://www.peru.ai-hackathon.co/_logo_logo%20nutriera.png", tier: "bronze", url: "#" },
    { name: "Leasy", logo: "https://www.peru.ai-hackathon.co/_logo_Logo%20Leasy.png", tier: "bronze", url: "#" },
    { name: "Finity", logo: "https://www.peru.ai-hackathon.co/_logo_logo%20finity.png", tier: "bronze", url: "#" },
    { name: "Cloud Forge AI", logo: "https://www.peru.ai-hackathon.co/_logo_logo%20cloud%20forge%20ai.png", tier: "bronze", url: "#" },
    { name: "Little Caesars", logo: "https://www.peru.ai-hackathon.co/logo-little-caesars.png", tier: "bronze", url: "#" },
    // Partners
    { name: "Universidad Sergio Arboleda", logo: "https://www.colombiatechfest.ai-hackathon.co/UNISA.svg", tier: "partner", url: "#" },
    { name: "Jesus Velez Santiago", logo: "https://www.peru.ai-hackathon.co/_logo_jesus%20%20velez%20santiago.png", tier: "partner", url: "#" },
  ],
};

export const metrics = {
  totalFundsRaised: wrappedData.fundsRaised.total,
  totalCredits: wrappedData.credits.total,
  totalHackers: wrappedData.community.hackers,
  totalSubmissions: wrappedData.community.submissions,
  totalCompanies: wrappedData.community.companies,
  totalCountries: wrappedData.community.countries,
  totalEvents: wrappedData.events.length,
};

