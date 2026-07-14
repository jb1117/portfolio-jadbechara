export type SidebarRow = { label: string; value: string; check?: boolean };
export type SidebarSection = { heading: string; rows: SidebarRow[]; notes: string[] };
export type FlagshipProduct = { icon: string; title: string; tagline: string; tags: string[]; details: { label: string; body: string }[]; stack: string[]; sidebar: SidebarSection[] };
export type StandardProduct = { icon: string; tags: string[]; title: string; tagline: string; description: string; stack: string[] };
export type CompactProduct = { icon: string; tags: string[]; title: string; description: string };
