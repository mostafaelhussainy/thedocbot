import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "TheDocBot - AI Voice Assistants for Medical & Dental Practices",
  description = "TheDocBot (The Doc Bot) - AI voice assistants for medical and dental clinics - handling calls, scheduling, and patient communication 24/7. Reduce admin work by 68% and no-shows by 27%.",
  canonical = "https://www.thedocbot.com/",
  ogImage = "https://www.thedocbot.com/images/thedocbot_social.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = "TheDocBot, The Doc Bot, The DocBot, AI medical assistant, medical voice assistant, dental voice assistant, medical AI, dental AI, healthcare AI assistant",
}) => {
  const fullTitle = title.includes("TheDocBot") ? title : `${title} | TheDocBot`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Alternative page titles for search engines */}
      <meta name="title" content={fullTitle} />
      <meta name="alternate-title" content="The Doc Bot - AI Voice Assistants for Medical & Dental Practices" />
      <meta name="alternate-title" content="The DocBot - AI Voice Assistants for Medical & Dental Practices" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="TheDocBot" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
