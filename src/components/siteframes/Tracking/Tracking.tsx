'use client';
import { usePathname } from 'next/navigation';
import { sendGTMEvent } from '@next/third-parties/google';
import { useEffect } from 'react';

type Props = {
  contentType: string;
};

const Tracking = ({ contentType }: Props) => {
  const pathname = usePathname();
  useEffect(() => {
    sendGTMEvent({
      event: 'initialDL',
      pageType: contentType,
      pageCategoryFull: pathname.replace('/', ''),
    });
  }, []);

  return null;
};

export default Tracking;
