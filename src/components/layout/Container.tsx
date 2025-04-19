import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className = '', id }: ContainerProps) {
  return (
    <div
      id={id}
      className={`container mx-auto px-4 md:px-8 max-w-7xl scroll-mt-20 ${className}`}
    >
      {children}
    </div>
  );
}