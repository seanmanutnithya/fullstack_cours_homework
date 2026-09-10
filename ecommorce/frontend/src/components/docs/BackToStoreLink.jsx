import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BackToStoreLink.css';

/**
 * Small fixed "back to the store" link shown on both documentation
 * pages (BrandGuideline, CaseStudy) — neither is reachable from the
 * storefront's own nav, so each needs an easy way back.
 */
export default function BackToStoreLink() {
  return (
    <Link to="/" className="rd-back-link">
      <ArrowLeft size={14} strokeWidth={2.5} aria-hidden="true" />
      Back to store
    </Link>
  );
}
