export type PrismicPictureDimensions = {
  width?: number;
  height?: number;
};

export type Breakpoint = {
  dimensions?: PrismicPictureDimensions;
  alt?: string;
  copyright?: string;
  url?: string;
};

export type PrismicPictureType = {
  dimensions?: PrismicPictureDimensions;
  alt?: string;
  copyright?: string;
  url: string;
  MD: Breakpoint;
  XS: Breakpoint;
};

export type PictureType = {
  image?: PrismicPictureType;
  image_alt?: string;
  className?: string;
  objectFit?: boolean;
};
