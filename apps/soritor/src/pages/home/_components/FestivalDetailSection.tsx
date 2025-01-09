import { Link } from "react-router-dom";

import Image from "@/components/Image";

import SoritorPost1 from "/soritor-post-1.png";
import SoritorPost2 from "/soritor-post-2.png";

const FestivalDetailSection = () => {
  return (
    <section className="space-y-10 pt-5">
      <article>
        <h1 className="font-bold">
          🎙️&#41;&#41;&#41; Live Station: 소리터의 밤입니다.
        </h1>
        <p className="flex flex-col">
          <span>여러분은 지금 소리터 겨울 정기 공연과 함께하고 계십니다.</span>
          <span>
            이번 공연에선 소리터 부원들이 준비한 멋진 라이브 음악과 더불어 특별
            DJ가 전해주는 사연이 함께할 예정입니다.🎵🔥
          </span>
          <span className="my-7 font-medium">
            라이브 스테이션: 소리터의 밤, 1월 17일 &#91;On Air&#93;
          </span>
          <span>많은 응원과 관심 부탁드립니다.</span>
        </p>
      </article>
      <article>
        <h1 className="mb-5 font-bold">🎵 공연 정보</h1>
        <div className="mb-10">
          <ol className="list-disc pl-6">
            <li>공연일자: 2025년 1월 17일</li>
            <li>공연시간: 오후 4시 30분 입장~</li>
            <li>
              장소: 합정 얼라이브홀 &#40;서울 마포구 독막로7길 20 지층&#41;
            </li>
            <li>티켓금액: 3,000원</li>
          </ol>
        </div>
        <div className="flex flex-col gap-5">
          <Image src={SoritorPost1} className="px-5" />
          <Image src={SoritorPost2} className="px-5" />
        </div>
      </article>
      <article>
        <h1 className="mb-5 font-bold">☑️ 주의 사항</h1>
        <div>
          <ol className="flex flex-col gap-7">
            <li>
              *입금 후 예매가 완료되니 꼭 입금내역을 확인해주시길 바랍니다.
            </li>
            <li className="flex flex-col">
              <span>*예매는 1월 15일&#40;수&#41; 자정까지입니다.</span>
            </li>
            <li>
              *환불은 1월 16일&#40;목&#41; 자정까지 가능하며&#40;100%&#41;, 당일
              환불은 불가합니다.
            </li>
            <li>*식음료, 술반입은 무료이며 냉장고 사용이 가능합니다.</li>
            <li className="flex flex-col">
              <span>
                *주차는 공연장 맞은편에 사설주차장&#40;서교동 제4주차장&#41;과
              </span>
              <span>
                인근에 노상공영주차장&#40;합정/당인 공영주차장&#41;이 있습니다.
              </span>
            </li>
            <li className="flex flex-col">
              <span>
                *기타 모든 문의는 소리터 인스타그램을 통해 부탁드립니다.
              </span>
              <Link
                to="https://www.instagram.com/soritor_official/"
                className="decoration-brand font-medium underline underline-offset-4"
              >
                @soritor_official
              </Link>
            </li>
          </ol>
        </div>
      </article>
    </section>
  );
};

export default FestivalDetailSection;
