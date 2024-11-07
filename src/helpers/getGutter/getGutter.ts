import { gridGutter } from '@/components/grid/Container/Container';

function getGutter(gutter?: number): number {
  if (gutter) return gutter;
  return gridGutter;
}

export default getGutter;
