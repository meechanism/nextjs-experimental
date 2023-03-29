'use client';

export default function Error({ error, reset }: any) {
  return (
    <div>
      This page isn&apos;t working: {error.message}
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
