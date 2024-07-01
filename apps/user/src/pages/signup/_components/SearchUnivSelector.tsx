import { Suspense, useState } from "react";
import { Separator } from "@uket/ui/components/ui/separator";
import { Input } from "@uket/ui/components/ui/input";
import { LoaderCircleIcon, Search } from "@uket/ui/components/ui/icon";
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

import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { FormType } from "@/hooks/useStackForm";
import { useSearch } from "@/hooks/useSearch";

import SearchResultSection from "./SearchResultSection";

type formType = "userUniv";

interface UnivSearchProps {
  form: FormType;
  formType: formType;
  placeholder: string;
}

const SearchUnivSelector = (props: UnivSearchProps) => {
  const { form, formType, placeholder } = props;
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
          <p className="absolute -top-7 left-0">학교</p>
          <Search className="h-5 w-5 text-gray-500" />
          <span className="text-slate-500">{selectedItem || value}</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="p-0">
            <FormField
              control={form.control}
              name={formType}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="ml-10 text-xs text-[rgb(137,137,161)]">
                    학교명
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="학교 검색"
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
          <DrawerFooter className="h-80 px-8 py-7 text-base">
            <RetryErrorBoundary>
              <Suspense
                fallback={<LoaderCircleIcon className="animate-spin" />}
              >
                <SearchResultSection onSelect={handleSelectItem} />
              </Suspense>
            </RetryErrorBoundary>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchUnivSelector;
