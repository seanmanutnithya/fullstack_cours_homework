import './Scrim.css';

/**
 * Full-screen dimmed backdrop behind the cart drawer / product modal /
 * checkout modal. All three overlays share one scrim instead of each
 * rendering (and fading) its own — clicking it closes whatever is open.
 */
export default function Scrim({ visible, onClick }) {
  return <div className={`rd-scrim ${visible ? 'rd-scrim--visible' : ''}`} onClick={onClick} aria-hidden="true" />;
}
