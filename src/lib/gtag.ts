export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-0EC2S4KG6Z";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_ID, {
      page_path: url,
    });
  }
};
