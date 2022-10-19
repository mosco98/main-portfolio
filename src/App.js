import Layout from "./components/Layout"

export default function App() {
  return (
    <Layout>
      <div className="md:pt-44 pt-36">
        <h1 className="text-3xl font-semibold mb-8">Hey!</h1>
        <h1 className="text-2xl max-w-4xl leading-10">
          Moses is a <span className="font-bold">Mathematician</span>,{" "}
          <span className="font-bold">Software Engineer</span> and{" "}
          <span className="font-bold">Enterpreneur</span>. She is the founder of
          Sonuum & several other ventures.
        </h1>

        <p className="max-w-5xl leading-10 mt-6 font-medium text-gray-300">
          She has been recognized as the Best Woman Maker of 2018 by Maker Mag,
          and has twice been a Product Hunt Maker of The Year finalist. She has
          also been featured on Fast Company, YCombinator HN, Smashing Magazine,
          Awwwards, JsNation OS Awards, Women Who Design, Product Hunt, Sidebar,
          CSS-Tricks, Muzli, HeyDesigner, Changelog, Codrops, and interviewed by
          Product Hunt for one of her successful products.
        </p>
      </div>

      <section className="pt-24">
        <div className="border-b-[0.5px] pb-3 border-gray-300/40">
          <h6 className="font-medium text-gray-300/80 text-[14px] tracking-widest flex items-end space-x-1">
            <span>PROJECTS</span> <span className="text-lg">✨</span>
          </h6>
        </div>

        <div className="md:pt-12 pt-6">
          <ul className="space-y-12">
            <li className="grid grid-cols-12 md:gap-0 gap-2">
              <span className="md:col-span-4 col-span-12 text-2xl font-bold">
                <a
                  className="transition hover:text-gray-300/80"
                  href="https://home.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Mapus
                </a>
              </span>
              <span className="text-gray-300/80 md:col-span-6 col-span-12">
                Real-time collaborative map tool
              </span>

              <span className="text-gray-300/80 md:col-span-2 col-span-12 text-sm hover:opacity-80 transition-all duration-150 ease-linear">
                <a
                  className="underline"
                  href="https://home.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  View code
                </a>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="pt-24">
        <div className="border-b-[0.5px] pb-3 border-gray-300/40">
          <h6 className="font-medium text-gray-300/80 text-[14px] tracking-widest flex items-end space-x-1">
            <span>SKILLS</span> <span className="text-lg">👨‍💻</span>
          </h6>
        </div>

        <div className="md:pt-12 pt-6">
          <ul className="flex items-center flex-wrap gap-6 max-w-3xl text-center uppercase font-semi-bold">
            <li>HTML/CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACTJS</li>
            <li>NEXTJS</li>
            <li>NODEJS</li>
            <li>STORYBOOK</li>
            <li>GIT</li>
            <li>wordpress</li>
            <li>CHROME EXTENSIONS</li>
            <li>DATABASES</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
