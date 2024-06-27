import React from "react";
import { Label } from "@ui/components/ui/label";
import { Input } from "@ui/components/ui/input";
import { Button } from "@ui/components/ui/button";

function AuthSection() {
  return (
    <section className="flex grow flex-col justify-center gap-11">
      <header>
        <h1 className="text-2xl font-black">관리자 로그인</h1>
      </header>
      <main className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="id" className="text-[#5E5E6E]">
              ID
            </Label>
            <Input id="id" placeholder="아이디" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="pw" className="text-[#5E5E6E]">
              PW
            </Label>
            <Input id="pw" type="password" placeholder="비밀번호" />
          </div>
        </div>
        <Button className="bg-brand hover:bg-brandHover w-full rounded-lg py-6 text-base md:max-w-24">
          로그인
        </Button>
      </main>
    </section>
  );
}

export default AuthSection;
