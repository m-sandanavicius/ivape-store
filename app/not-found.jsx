'use client';

import Image from 'next/image';

import { APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo/logo.svg"
        width={48}
        height={48}
        ak={`${APP_NAME}`}
        priority={true}
      />
      <div className="p-6 rounder-lg- shadow-md text-center w-1/3">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could nit find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = '/')}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
}
