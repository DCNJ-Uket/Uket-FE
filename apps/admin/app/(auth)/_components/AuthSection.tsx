"use client";

import React from "react";
import { Input } from "@ui/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import { Button } from "@ui/components/ui/button";

import { useLoginForm } from "@/hooks/useLoginForm";

function AuthSection() {
  const { form, onSubmit, error } = useLoginForm();

  return (
    <section className="flex grow flex-col justify-center gap-11">
      <header>
        <h1 className="text-2xl font-black">관리자 로그인</h1>
      </header>
      <main className="flex flex-col gap-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid w-full max-w-xs items-center gap-1.5">
                    <FormLabel className="text-[#5E5E6E]">ID</FormLabel>
                    <FormControl>
                      <Input id="id" placeholder="아이디" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid w-full max-w-xs items-center gap-1.5">
                    <FormLabel className="text-[#5E5E6E]">PW</FormLabel>
                    <FormControl>
                      <Input
                        id="pw"
                        type="password"
                        placeholder="비밀번호"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              {error && (
                <p className="text-center text-sm text-[#FD7250] sm:text-left">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                className="bg-brand hover:bg-brandHover w-full rounded-lg py-6 text-base md:max-w-24"
              >
                로그인
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </section>
  );
}

export default AuthSection;
