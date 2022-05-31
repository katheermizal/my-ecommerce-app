export interface PageTitleProps {
  pageTitle?: string;
  metaDescription?: string;
}

export interface WrapperProps {
  pageTitle?: string;
  metaDescription?: string;
  children?: React.ReactNode;
  isServerError?: boolean;
}

export interface ProductProps {
  id?: number;
  title?: string;
  price?: string;
  category?: string;
  description?: string;
  image?: string;
  url?: string;
  isCategoryVisible?: boolean;
}

export interface ProductInfoProps {
  id?: number;
  title?: string;
  price?: string;
  category?: string;
  description?: string;
  image?: string;
  onClickAddToCart?: any;
  onQtyInputChange?: any;
  qtyValue?: number;
}

export interface ProductListProps {
  heading?: string;
  content?: string;
  productData?: any;
  isCategoryVisible?: boolean;
  execptionalId?: string | number;
  limitation?: number;
  inerLoader?: boolean;
}

export interface HeroBannerProps {
  heading?: string;
  subHeading?: string;
  content?: string;
  linkText?: string;
  linkUrl?: string;
}

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  isLinkType?: boolean;
  linkUrl?: string;
}

export interface ProductImageProps {
  imagePath?: string;
  imageClasses?: string;
  imageAlt?: string;
}

export interface CartitemProps {
  cartId?: number | string;
  price?: string;
  title?: string;
  image?: string;
  url?: string;
  id?: number;
  subTotal?: string | number;
  quantity?: string | number;
}

export interface CartTableProps {
  cartData?: any;
}

export interface NotificationsProps {
  message?: string;
}