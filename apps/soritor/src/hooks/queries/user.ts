import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getUserInfo } from "@/api/user";
import { getMyTicketList } from "@/api/ticket";

import { getAccessToken } from "@/utils/handleToken";
import { formatDate } from "@/utils/handleTicket";
import { getRefreshToken } from "@/utils/handleCookie";


export const user = createQueryKeys("user", {
  info: () => ({
    queryKey: ["user-info"],
    queryFn: getUserInfo,
  }),
  ticket: () => ({
    queryKey: ["user-ticket-list"],
    queryFn: getMyTicketList,
  }),
});

/**
 * 유저 정보를 조회합니다.
 * @returns {UserInfoResponse}
 */
export const useQueryUserInfo = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken("refreshToken");

  if (!accessToken || !refreshToken) return { data: null };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    ...user.info(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    enabled: !!accessToken && !!refreshToken,
  });
};

/**
 * 유저가 소유한 티켓 목록을 조회합니다.
 * @returns {TicketItem[]}
 */
export const useQueryUserTicketList = () => {
  return useSuspenseQuery({
    ...user.ticket(),
    select: data => {
      return data.items.map(item => ({
        ...item,
        createdAt: formatDate(item.createdAt, "full"),
        showDate: formatDate(item.showDate, "short"),
        enterStartTime: formatDate(item.enterStartTime, "time"),
        enterEndTime: formatDate(item.enterEndTime, "time"),
      }));
    },
    staleTime: 0,
  });
};
