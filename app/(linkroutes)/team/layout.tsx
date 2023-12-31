import { childrenProps } from '@/globalTypes';

export default function TeamLayout({ children }: childrenProps) {
  return <section className="flex min-h-screen flex-col items-center">{children}</section>;
}
