interface ErrorDetail {
  title: string;
  description: string;
}

interface ErrorCode {
  [key: string]: ErrorDetail;
}

export interface ErrorCategory {
  [key: number]: ErrorCode;
}

export const LOGIN_ERROR: ErrorCategory = {
  400: {
    AD0002: {
      title: "올바르지 않은 비밀번호입니다.",
      description: "비밀번호를 확인해 주세요.",
    },
    AD0004: {
      title: "등록되지 않은 어드민입니다.",
      description: "어드민 관련은 문의 부탁드립니다.",
    },
  },
  404: {
    AD0001: {
      title: "올바르지 않은 이메일입니다.",
      description: "이메일을 확인해 주세요.",
    },
  },
};

export const SCAN_ERROR: ErrorCategory = {
  400: {
    AU0001: {
      title: "발급되지 않은 QR 코드입니다.",
      description: "QR 코드를 재발급 받으세요.",
    },
    TI0012: {
      title: "입금이 완료되지 않은 티켓입니다.",
      description: "입금을 진행해 주세요.",
    },
    TI0013: {
      title: "이미 입장이 완료된 티켓입니다.",
      description: "이미 입장이 완료된 티켓은 재사용할 수 없습니다.",
    },
  },
  401: {
    AU0005: {
      title: "QR 코드가 올바르지 않습니다.",
      description: "",
    },
  },
  403: {
    AU0008: {
      title: "로그인 정보가 유효하지 않습니다.",
      description: "다시 로그인 해주세요.",
    },
  },
};

export type ErrorType = keyof typeof CUSTOM_ERROR_OBJECT;

export const CUSTOM_ERROR_OBJECT = {
  SCAN: SCAN_ERROR,
  AUTH: LOGIN_ERROR,
};
