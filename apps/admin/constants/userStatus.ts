interface userType {
  text: string;
  value: string;
}

export const USER_TYPE: userType[] = [
  { text: "일반인", value: "TICKETING_ALL" },
  { text: "재학생", value: "TICKETING_STUDENT" },
];
