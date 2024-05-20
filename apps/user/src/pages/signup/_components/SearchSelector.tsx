import { ErrorBoundary } from "react-error-boundary";
import { Suspense, useState } from "react";
import { Separator } from "@uket/ui/components/ui/separator";
import { Input } from "@uket/ui/components/ui/input";
import { Search } from "@uket/ui/components/ui/icon";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@uket/ui/components/ui/form";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@uket/ui/components/ui/drawer";
import { Button } from "@uket/ui/components/ui/button";

import { FormSchemaType, FormType } from "@/hooks/useStackForm";
import { useSearch } from "@/hooks/useSearch";

import SearchResultSection from "./SearchResultSection";

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
  const { selectedItem, value, handleSelectItem } = useSearch({
    form,
    control: form.control,
    formType,
    placeholder,
    callback: setOpen,
  });

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="border-formInput relative mt-7 flex justify-start gap-3 px-3 hover:bg-inherit"
        >
          <p className="absolute -top-7 left-0">{label}</p>
          <Search className="h-5 w-5 text-gray-500" />
          <span className="text-slate-500">{selectedItem || value}</span>
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
                      className="border-none outline-none ring-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
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
          <DrawerFooter className="h-80 px-10 py-7 text-base">
            <ErrorBoundary fallback={<div>Something went wrong.</div>}>
              <Suspense fallback={<div>Loading...</div>}>
                <SearchResultSection
                  value={value}
                  formType={formType}
                  onSelect={handleSelectItem}
                />
              </Suspense>
            </ErrorBoundary>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchSelector;
