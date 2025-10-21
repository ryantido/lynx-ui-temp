"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const ERROR_IMG_SRC = "/fallback.jpg";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className } = props;

  return !didError ? (
    <div
      className={cn(
        "inline-block text-center align-middle h-full w-full",
        className,
      )}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
        <Image
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          data-original-url={src}
          fill
        />
      </div>
    </div>
  ) : (
    <Image
      src={src as string}
      alt={alt as string}
      className={className}
      style={style}
      onError={handleError}
      fill
    />
  );
}
