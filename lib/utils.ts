import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const stringToColor = (
  str: string,
  bgColor = "#1f2128",
  acceptedRatio = 7
) => {
  return stringToHexColor(str, bgColor, acceptedRatio);
};

function stringToHexColor(
  input: string,
  bgColor: string,
  acceptedRatio: number
): string {
  // Convert the input string to a unique hash code
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert the hash code to a hex color
  let hexColor = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    hexColor += ("00" + value.toString(16)).substr(-2);
  }

  // Calculate the contrast ratio and adjust if necessary
  if (getContrastRatio(hexColor, bgColor) < acceptedRatio) {
    hexColor = adjustColorForContrast(hexColor, bgColor, acceptedRatio);
  }

  return hexColor;
}

// Helper function to calculate the luminance of a color
function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  const a = rgb.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Helper function to calculate the contrast ratio between two colors
function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1) + 0.05;
  const lum2 = getLuminance(hex2) + 0.05;
  return lum1 > lum2 ? lum1 / lum2 : lum2 / lum1;
}

// Helper function to convert a hex color to RGB
function hexToRgb(hex: string): number[] {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// Helper function to adjust color to ensure high contrast
function adjustColorForContrast(
  hex: string,
  baseHex: string,
  acceptedRatio: number
): string {
  let rgb = hexToRgb(hex);
  let contrastRatio = getContrastRatio(hex, baseHex);

  while (contrastRatio < acceptedRatio) {
    for (let i = 0; i < 3; i++) {
      rgb[i] = Math.min(rgb[i] + 10, 255);
    }
    hex = rgbToHex(rgb);
    contrastRatio = getContrastRatio(hex, baseHex);
  }

  return hex;
}

// Helper function to convert RGB to hex
function rgbToHex(rgb: number[]): string {
  return "#" + rgb.map((v) => ("0" + v.toString(16)).slice(-2)).join("");
}

export function constructMetadata({
  title = "vinvox - streaming platform",
  description = "vinvox is a streaming platform built with next.js, livekit sdk, Prisma, Stripe, Tailwind, postgresql and more",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@asdeadasleavess",
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL ?? ""),
    icons,
  };
}
