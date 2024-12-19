import { Helmet } from "react-helmet-async";

interface DynamicMetaTagProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
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
      {url && <meta property="og:url" content={url || window.location.href} />}
    </Helmet>
  );
}
