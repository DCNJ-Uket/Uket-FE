import { type VariantProps, cva } from "@uket/ui/lib/utils";
import { cn } from "@uket/ui/lib/utils";
import { Button } from "@uket/ui/components/ui/button";

const brandButtonVariants = cva(
  "basis-1/2 rounded-lg border border-brand sm:w-80",
  {
    variants: {
      brand: {
        primary: "bg-brand hover:bg-brand/80",
        secondary: "bg-white text-brand hover:bg-primary-foreground",
      },
    },
    defaultVariants: {
      brand: "primary",
    },
  },
);

interface BrandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brandButtonVariants> {
  title: string;
}

const BrandButton = (props: BrandButtonProps) => {
  const { brand, title, className, ...rest } = props;

  return (
    <Button className={cn(brandButtonVariants({ brand, className }))} {...rest}>
      {title}
    </Button>
  );
};

export default BrandButton;
