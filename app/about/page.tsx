/**
 * path: /about
 */

// bing prompt: pixel art, asian female programmer in her cyberpunk office surrounded by tropical plants, studio ghibli style
export default function About() {
  return (
    <main className="mx-auto mt-52 w-full max-w-container px-4 pb-20 sm:mt-36 sm:px-6 sm:pb-24 lg:mt-28 lg:px-8 lg:pb-32 xl:mt-36">
      <div className="mx-auto max-w-[40rem] space-y-20 divide-y divide-slate-200 sm:space-y-24 lg:max-w-none lg:space-y-32">
        <section className="grid grid-cols-1 items-baseline gap-x-6 gap-y-10 lg:grid-cols-3">
          <h1 className="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
            About
          </h1>
          <div className="max-w-2xl space-y-10 lg:col-span-2 prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
            <p>
              I'm <em>Mee Cha</em>, a first generation Hmong-American, born and
              raised in California.
            </p>

            <p>
              My roots are video games and anime. I like to draw and paint when
              I am not coding away. I also love reading sci-fi and fantasy and
              taking care of my plants.
            </p>

            <p>
              When I grow up, I want to run a bed and breakfast in a remote
              location. I will have chickens in the back yard and a fruitful
              garden to tend.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
