export default function PageSection({ children, className }: any) {
  return (
    <section className="py-10 md:py-16">
      <div
        className={`flex-col container max-w-screen-xl mx-auto px-4 ${className}`}>
        {children}
      </div>
    </section>
  );
}
