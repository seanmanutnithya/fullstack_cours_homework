import { ArrowRight } from 'lucide-react';
import ImageSlot from '../../common/ImageSlot';
import { GRAM } from '../../../data/menu';
import './InstagramGrid.css';

/**
 * "@rumdoul.coffee" Instagram teaser grid. Converted from the unnamed
 * `gram` section of Rumdoul.dc.html.
 */
export default function InstagramGrid() {
  return (
    <section className="rd-instagram">
      <div className="rd-instagram__head">
        <h2 className="rd-instagram__title">@rumdoul.coffee</h2>
        <a href="#top" className="rd-instagram__follow">
          Follow along <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
        </a>
      </div>
      <div className="rd-instagram__grid">
        {GRAM.map((g) => (
          <div key={g.hint} className="rd-instagram__tile">
            <ImageSlot hint={g.hint} />
          </div>
        ))}
      </div>
    </section>
  );
}
