import ImageSlot from '../../common/ImageSlot';
import IconButton from '../../common/IconButton';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import { PillGroup } from '../../ui/PillOption';
import { useShop } from '../../../context/ShopContext';
import { SIZES } from '../../../data/menu';
import { X } from 'lucide-react';
import '../overlay.css';
import './ProductModal.css';

const SIZE_OPTIONS = SIZES.map((s) => ({ id: s.id, label: s.label }));

/**
 * Product detail overlay opened from a menu / spotlight card: photo,
 * notes, size picker and two commit actions ("Add & pay" jumps straight
 * to checkout, "Just add to bag" keeps browsing). Converted from the
 * `sc-if value="{{ product }}"` block of Rumdoul.dc.html.
 */
export default function ProductModal() {
  const { product, size, setSize, addProductOnly, addProductAndCheckout, closeAll, money } = useShop();
  if (!product) return null;

  const sizeDelta = SIZES.find((s) => s.id === size)?.delta || 0;
  const price = product.price + sizeDelta;

  return (
    <div className="rd-overlay-wrap" style={{ zIndex: 110 }}>
      <div className="rd-product-modal">
        <div className="rd-product-modal__photo">
          <ImageSlot alt={product.name} hint={`Drop a photo of ${product.name}`} />
        </div>
        <div className="rd-product-modal__body">
          <div className="rd-product-modal__top">
            <Tag tone="yellow">{product.tag || 'Menu'}</Tag>
            <IconButton icon={X} label="Close" tone="white" onClick={closeAll} />
          </div>
          <h3 className="rd-product-modal__name">{product.name}</h3>
          <p className="rd-product-modal__desc">{product.desc}</p>
          {product.notes?.length > 0 && (
            <div className="rd-product-modal__notes">
              {product.notes.map((note) => (
                <Tag key={note} tone="white">
                  {note}
                </Tag>
              ))}
            </div>
          )}
          <div className="rd-product-modal__size">
            <span className="rd-product-modal__size-label">Size</span>
            <PillGroup options={SIZE_OPTIONS} value={size} onChange={setSize} />
          </div>
          <div className="rd-product-modal__buy">
            <span className="rd-product-modal__price">{money(price)}</span>
            <Button variant="primary" size="sm" fullWidth={false} onClick={addProductAndCheckout} className="rd-product-modal__buy-btn">
              Add &amp; pay
            </Button>
          </div>
          <Button variant="ghost" size="sm" fullWidth onClick={addProductOnly}>
            Just add to bag
          </Button>
        </div>
      </div>
    </div>
  );
}
