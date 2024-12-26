import { Helmet } from "react-helmet-async";

interface DynamicMetaTagProps {
  title?: string;
  description?: string;
  image?: string;
  url: string;
}

export default function DynamicMetaTag({
  title,
  description,
  image,
  url,
}: DynamicMetaTagProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title || "Uket"} />
      <meta
        property="og:description"
        content={
          description || "Uket을 이용해 축제/공연을 웨이팅 없이 즐겨보세요!"
        }
      />
      <meta
        property="og:image"
        content={
          image ||
          "https://res.cloudinary.com/dhn3axbhj/image/upload/f_auto,q_auto/nt7u0nxxijucwh8jjdb8"
        }
      />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Uket"} />
      <meta
        name="twitter:description"
        content={
          description || "Uket을 이용해 축제/공연을 웨이팅 없이 즐겨보세요!"
        }
      />
      <meta
        name="twitter:image"
        content={
          image ||
          "https://res.cloudinary.com/dhn3axbhj/image/upload/f_auto,q_auto/nt7u0nxxijucwh8jjdb8"
        }
      />
    </Helmet>
  );
}
