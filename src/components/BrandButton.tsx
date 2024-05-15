import { VariantProps, cva } from "class-variance-authority";

import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

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
  const { brand, title, className } = props;

  return (
    <Button className={cn(brandButtonVariants({ brand, className }))}>
      {title}
    </Button>
  );
};

export default BrandButton;
