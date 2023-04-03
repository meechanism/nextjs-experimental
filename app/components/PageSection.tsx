export default function PageSection({ children, className }: any) {
  return (
    <section className="py-10 px-2 md:py-16 md:px-6 flex justify-center">
      <div
        className={`flex-col container max-w-screen-xl mx-auto px-4 ${
          className ? className : ''
        }`}>
        {children}
      </div>
    </section>
  );
}
