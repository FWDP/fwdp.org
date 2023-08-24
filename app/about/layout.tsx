import { childrenProps } from '@/globalTypes';

export default function AboutLayout({ children }: childrenProps) {
  return <section className="flex min-h-screen flex-col items-center">{children}</section>;
}
