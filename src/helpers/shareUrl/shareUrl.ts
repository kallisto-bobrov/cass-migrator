const shareUrl = (channel: string, url?: string) => {
  const width = '350px';
  const height = width;
  switch (channel) {
    case 'linkedin':
      window.open(
        `http://www.linkedin.com/shareArticle?mini=true&url=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`,
      );
      break;
    case 'xing':
      window.open(
        `https://www.xing.com/spi/shares/new?url=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`,
      );
      break;
    case 'twitter':
      window.open(
        `http://twitter.com/share?url=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`,
      );
      break;
    case 'facebook':
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`,
      );
      break;
    case 'whatsapp':
      window.open(
        `https://api.whatsapp.com/send?text=${url}`,
        'targetWindow',
        `width=${width}, height=${height}`,
      );
      break;
    default:
      break;
  }
};

export default shareUrl;
