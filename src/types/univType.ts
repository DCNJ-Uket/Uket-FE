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
  campusName: string;
  collegeinfourl: string;
  schoolType: string;
  link: string;
  schoolGubun: string;
  adres: string;
  schoolName: string;
  region: string;
  totalCount: string;
  estType: string;
  seq: string;
};

export type MajorInfo = {
  lClass: string;
  facilName: string;
  majorSeq: string;
  mClass: string;
  totalCount: string;
};

export type UnivOrMajorResponse<T> = {
  dataSearch: {
    content: T[];
  };
};
