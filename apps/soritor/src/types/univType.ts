export type FestivalInfo = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  banners: { title: string; url: string }[];
};

export type FestivalInfoResponse = FestivalInfo;

export type FestivalUniversity = {
  id: number;
  name: string;
  logoUrl: string;
};

export type FestivalUniversityResponse = {
  items: FestivalUniversity[];
};

export type UniversityInfo = {
  universityId: number;
  name: string;
};

export type UniversityResponse = {
  items: UniversityInfo[];
};
