"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CodeBlock, dracula } from "@react-email/code-block";
import { Check, Code2, CopyIcon } from "lucide-react";
import React, { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Star } from "../shapes";

interface ContentProps {
  content: React.ReactNode;
  background?: string;
  iconColor?: string;
  information: string;
}

export const Card = ({
  content,
  background,
  iconColor = "currentColor",
}: ContentProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {
    const contentToCopy = renderToStaticMarkup(<>{content}</>);

    navigator.clipboard
      .writeText(contentToCopy)
      .then(() => {
        setIsChecked(true);
        toast.success("Code copied!");

        setTimeout(() => {
          setIsChecked(false);
        }, 2000);
      })
      .catch(() => {
        toast.error("Failed to copy!");
      });
  };

  const contentCode = renderToStaticMarkup(<>{content}</>);

  return (
    <section className="mx-auto justify-center">
      <div
        className={cn(
          `flex flex-col items-center justify-center w-[300px] h-[250px] rounded-xl relative card`,
          background ? `${background}` : "bg-[#808080]"
        )}
      >
        <Button
          variant="link"
          className="absolute top-2 left-2 flex items-center"
          onClick={() => setIsDialogOpen(true)}
        >
          <Code2 size={20} color={iconColor} />
        </Button>
        <Button
          onClick={handleClick}
          variant="link"
          className="absolute top-2 right-2"
        >
          {isChecked ? (
            <Check size={20} color={iconColor} />
          ) : (
            <CopyIcon size={20} color={iconColor} />
          )}
        </Button>
        <div className="flex items-center justify-center rounded-xl">
          {content}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="flex flex-col justify-center max-w-[850px] max-h-[650px] bg-black bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] text-white overflow-hidden">
          <Star />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col mx-auto rounded-xl overflow-hidden w-[700px] max-h-[650px] -mt-8 mb-6"
          >
            <DialogHeader className="text-white mx-auto mb-5">
              <DialogTitle className="text-2xl">Code Preview</DialogTitle>
            </DialogHeader>
            <div className="flex gap-2 items-center bg-[#1F1F1F] px-4 py-2 rounded-t-xl">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="w-full h-full overflow-y-auto custom-scrollbar mx-auto z-50"
            >
              <CodeBlock
                code={contentCode}
                lineNumbers
                style={{
                  margin: "0",
                  borderRadius: "0",
                }}
                theme={dracula}
                language="javascript"
              />
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
