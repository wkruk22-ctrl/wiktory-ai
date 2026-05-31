export const BRAND = {
  name: "wiktory.ai",
  fullName: "Wiktor",
  tagline: "Strony internetowe + nauka kodowania",
  email: "wiktory.ai@wp.pl",
  social: {
    tiktok: "https://www.tiktok.com/@wiktory.ai",
    youtube: "https://www.youtube.com/@wiktory_ai",
    instagram: "https://www.instagram.com/wiktory.ai/",
    facebook: "https://www.facebook.com/profile.php?id=61590163330874",
    skool: "https://www.skool.com/twoja-grupa", // PODMIEŃ
  },
} as const;

// Jedno wideo tła dla całej strony — zgodnie z prośbą o spójną animację
export const BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_094440_a3592600-bd1e-49e5-9bce-a73662061d83.mp4";

// Aliasy dla starych importów (wszystko wskazuje na to samo wideo)
export const VIDEO_HERO = BG_VIDEO;
export const VIDEO_SKOOL = BG_VIDEO;
export const VIDEO_EXTRA = BG_VIDEO;
