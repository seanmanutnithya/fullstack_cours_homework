import Header from '../../components/sections/Header/Header';
import Hero from '../../components/sections/Hero/Hero';
import ZigzagBand from '../../components/widgets/ZigzagBand';
import CategoryGrid from '../../components/sections/CategoryGrid/CategoryGrid';
import SpotlightSection from '../../components/sections/SpotlightSection/SpotlightSection';
import MenuSection from '../../components/sections/MenuSection/MenuSection';
import ClubSection from '../../components/sections/ClubSection/ClubSection';
import ReviewsSection from '../../components/sections/ReviewsSection/ReviewsSection';
import ShopsSection from '../../components/sections/ShopsSection/ShopsSection';
import InstagramGrid from '../../components/sections/InstagramGrid/InstagramGrid';
import NewsletterCTA from '../../components/sections/NewsletterCTA/NewsletterCTA';
import Footer from '../../components/sections/Footer/Footer';
import Scrim from '../../components/common/Scrim';
import Toast from '../../components/common/Toast';
import CartDrawer from '../../components/overlays/CartDrawer/CartDrawer';
import ProductModal from '../../components/overlays/ProductModal/ProductModal';
import CheckoutModal from '../../components/overlays/CheckoutModal/CheckoutModal';
import { useShop } from '../../context/ShopContext';
import './Home.css';

/**
 * The Rumdoul storefront, assembled from every section + widget
 * converted from Rumdoul.dc.html. Overlays (cart drawer, product
 * modal, checkout modal) render last so their fixed positioning stacks
 * above the page regardless of where in the tree they're triggered from.
 */
export default function Home() {
  const { closeAll, anyOverlayOpen } = useShop();

  return (
    <div className="rd-home">
      <Header />

      <Hero />

      <div className="rd-home__band rd-home__band--hero">
        <ZigzagBand text="Rumdoul · your daily Khmer vibe · brewed fresh at 6am" speed={34} />
      </div>

      <CategoryGrid />

      <SpotlightSection />

      <div className="rd-home__band rd-home__band--spotlight">
        <ZigzagBand text="a menu where everybody finds their thing · ready in 6 minutes" speed={42} />
      </div>

      <MenuSection />
      <ClubSection />
      <ReviewsSection />
      <ShopsSection />
      <InstagramGrid />
      <NewsletterCTA />
      <Footer />

      <Scrim visible={anyOverlayOpen} onClick={closeAll} />
      <CartDrawer />
      <ProductModal />
      <CheckoutModal />
      <Toast />
    </div>
  );
}
