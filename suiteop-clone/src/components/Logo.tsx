import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
        <rect width="28" height="28" rx="8" fill="#846CDF"/>
        <path d="M20.5 8H7.5C6.67157 8 6 8.67157 6 9.5V18.5C6 19.3284 6.67157 20 7.5 20H20.5C21.3284 20 22 19.3284 22 18.5V9.5C22 8.67157 21.3284 8 20.5 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 16H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="font-montserrat font-semibold tracking-tight text-foreground">SUITEOP</span>
    </Link>
  );
}
