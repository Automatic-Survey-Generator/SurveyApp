"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

export default function AppScreenshot() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
          <h1 className="jacques-francois-shadow-regular text-center text-[36px] md:text-[50px]">
                    <div>Generate Surveys</div>
                    <div>
                        with <span className="text-primary">AI</span>
                    </div>
                </h1>

                <form className="max-w-xl px-6 mx-auto" action="">
                    <Textarea
                        placeholder="A survey for a zoo to rate animals"
                        className="w-full max-h-36 shadow-md shadow-gray-400 bg-gray-50 p-4 mt-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="w-[200px] shadow-md shadow-gray-400 block text-black mx-auto mt-4">
                        <Sparkles className="inline-block w-5 h-5 mr-2" />
                        Generate
                    </Button>
                </form>
          </>
        }
      >
        <Image
          src={`/assets/app_screenshot.png`}
          alt="App Screenshot"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover object-center h-full "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
