import { useEffect } from "react";
import { siteUrl } from "../data/config";

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(path) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", `${siteUrl}${path === "/" ? "" : path}`);
}

/**
 * Sets the page title, meta description, Open Graph tags, and canonical URL
 * for the current route. Call once per page component.
 */
export default function useSEO({ title, description, path = "/" }) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `${siteUrl}${path === "/" ? "" : path}`, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setCanonical(path);
  }, [title, description, path]);
}
