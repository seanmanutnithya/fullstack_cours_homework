import './BrowserFrame.css';

/**
 * Browser-chrome frame (traffic-light dots + a content well) used
 * throughout the case study to present a live section of the real app
 * as a "screenshot". The original mockup pointed these at static
 * `shots/*.png` files that don't exist; since the real components are
 * right here in this codebase, the frame renders the actual live
 * component instead of a picture of it.
 */
export default function BrowserFrame({ height, children }) {
  return (
    <div className="rd-browser-frame">
      <div className="rd-browser-frame__bar">
        <span className="rd-browser-frame__dot rd-browser-frame__dot--red" />
        <span className="rd-browser-frame__dot rd-browser-frame__dot--yellow" />
        <span className="rd-browser-frame__dot rd-browser-frame__dot--green" />
      </div>
      <div className="rd-browser-frame__body" style={height ? { height } : undefined}>
        {children}
      </div>
    </div>
  );
}
