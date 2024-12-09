export interface TicketFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const TicketFooter = (props: TicketFooterProps) => {
  const { className, children, ...rest } = props;

  return (
    <div className={`flex gap-10 text-xs ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default TicketFooter;
