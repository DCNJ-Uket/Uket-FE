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
