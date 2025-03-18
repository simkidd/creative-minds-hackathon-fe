import { SEOProps } from "@/interfaces/seo.interface";
import { Helmet } from "react-helmet-async";

const HelmetComp: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  themeColor,
  children,
}) => {
  return (
    <Helmet titleTemplate="%s | edufree4all" defaultTitle="edufree4all">
      {/* Default meta tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={themeColor || "#ffffff"} />

      {/* Dynamic meta tags */}
      {title && <title>{title}</title>}
      <meta
        name="description"
        content={
          description ||
          "Access free learning materials, find volunteers, and get support for your education journey."
        }
      />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Additional children (e.g., custom meta tags) */}
      {children}
    </Helmet>
  );
};

export default HelmetComp;
