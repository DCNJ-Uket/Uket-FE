export type UniversityInfo = {
  id: number;
  name: string;
  logoUrl: string;
};

export type UniversityListResponse = {
  items: UniversityInfo[];
};
