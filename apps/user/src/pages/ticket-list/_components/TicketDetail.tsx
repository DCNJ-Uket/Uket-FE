import GridItem from "./GridItem";

interface TicketDetailProps {
  owner: string;
  enterDate: string;
  enterTime: string;
  location: string;
  purchaseDate?: string;
  userType?: string;
}

const TicketDetail = (props: TicketDetailProps) => {
  const { owner, enterDate, enterTime, location, purchaseDate, userType } =
    props;

  return (
    <section className="grid grid-cols-2 auto-rows-auto gap-4">
      <GridItem title={"예매자"} content={owner} />
      <GridItem title={"입장 날짜"} content={enterDate} />
      <GridItem title={"위치(공연장)"} content={location} />
      <GridItem title={"입장 시간"} content={enterTime} />
      {purchaseDate && userType && (
        <>
          <GridItem title={"구매 일시"} content={purchaseDate} />
          <GridItem title={"회원구분"} content={userType} />
        </>
      )}
    </section>
  );
};

export default TicketDetail;
