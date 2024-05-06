import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import { FormSchemaType, FormType } from "@/hooks/useStackForm";

type formType = "userUniv" | "userMajor";

interface UnivSearchProps {
  form: FormType;
  formType: formType;
  label: string;
  placeholder: string;
}

const SearchSelector = (props: UnivSearchProps) => {
  const { form, formType, label, placeholder } = props;
  const sublabel = label === "학교" ? "학교명" : "학과명";
  const [open, setOpen] = useState(false);
  const selectedValue = useMemo(() => {
    return form.getValues(formType) ? form.getValues(formType) : placeholder;
  }, [form, formType, placeholder]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="flex relative gap-3 justify-start px-3 mt-7 border-formInput hover:bg-inherit"
        >
          <p className="absolute left-0 -top-7">{label}</p>
          <Search className="w-5 h-5 text-gray-500" />
          <span className="text-slate-500">{selectedValue}</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="p-0">
            <FormField
              control={form.control}
              name={formType as keyof FormSchemaType}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="ml-10 text-xs text-[rgb(137,137,161)]">
                    {sublabel}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={placeholder}
                      className="border-none ring-0 ring-offset-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      autoComplete="off"
                      isIcon
                      value={field.value || ""}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </DrawerHeader>
          <Separator className="bg-brand" />
          <DrawerFooter className="px-10 py-7 h-80 text-base">
            {/* // TODO: API 호출로 학교, 학과 목록으로 교체 */}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchSelector;
