// 오프라인 빌드용 로컬 폰트 레지스트리. 한글 UI 가 뷰어 OS 폰트에 의존하면 대체 글꼴
// 메트릭 차이로 글자가 겹쳐 보이므로, sans 계열은 한글·라틴을 모두 포함하는 Pretendard
// (번들)로 통일한다. mono 계열(코드/숫자)은 Geist Mono 를 유지한다.
import localFont from "next/font/local";

import { GeistPixelSquare } from "geist/font/pixel";

const geist = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-geist",
});
const inter = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-inter",
});
const notoSans = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-noto-sans",
});
const roboto = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-roboto",
});
const outfit = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-outfit",
});
const dmSans = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-dm-sans",
});
const nunitoSans = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-nunito-sans",
});
const figtree = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-figtree",
});
const raleway = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-raleway",
});
const publicSans = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-public-sans",
});
const notoSerif = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-noto-serif",
});
const robotoSlab = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-roboto-slab",
});
const merriweather = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-merriweather",
});
const lora = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-lora",
});
const playfairDisplay = localFont({
  src: "./PretendardVariable.woff2",
  weight: "100 900",
  variable: "--font-playfair-display",
});
const geistMono = localFont({
  src: "../../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
});
const jetBrainsMono = localFont({
  src: "../../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
});

export const fontRegistry = {
  geist: { label: "Geist", font: geist },
  inter: { label: "Inter", font: inter },
  notoSans: { label: "Noto Sans", font: notoSans },
  nunitoSans: { label: "Nunito Sans", font: nunitoSans },
  figtree: { label: "Figtree", font: figtree },
  roboto: { label: "Roboto", font: roboto },
  raleway: { label: "Raleway", font: raleway },
  dmSans: { label: "DM Sans", font: dmSans },
  publicSans: { label: "Public Sans", font: publicSans },
  outfit: { label: "Outfit", font: outfit },
  geistMono: { label: "Geist Mono", font: geistMono },
  geistPixelSquare: { label: "Geist Pixel Square", font: GeistPixelSquare },
  jetBrainsMono: { label: "JetBrains Mono", font: jetBrainsMono },
  notoSerif: { label: "Noto Serif", font: notoSerif },
  robotoSlab: { label: "Roboto Slab", font: robotoSlab },
  merriweather: { label: "Merriweather", font: merriweather },
  lora: { label: "Lora", font: lora },
  playfairDisplay: { label: "Playfair Display", font: playfairDisplay },
} as const;

export type FontKey = keyof typeof fontRegistry;

export const fontVars = (Object.values(fontRegistry) as Array<(typeof fontRegistry)[FontKey]>)
  .map((f) => f.font.variable)
  .join(" ");

export const fontOptions = (
  Object.entries(fontRegistry) as [FontKey, { label: string; font: { variable: string } }][]
).map(([key, f]) => ({
  key,
  label: f.label,
  variable: f.font.variable,
}));
