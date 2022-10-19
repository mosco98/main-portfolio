import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="border-b-[0.5px] pb-10 border-gray-300/40">
        <h1 className="inline-block group">
          <span className="inline-block text-2xl transition group-hover:rotate-[30deg]">
            👋
          </span>{" "}
          If you'd like to talk, just send an email at{" "}
          <a className="myemail" href="mailto:enyinnayamoses60@gmail.com">
            enyinnayamoses60@gmail
          </a>
        </h1>
      </div>

      <div className="pt-8 text-sm flex items-center justify-between text-gray-300/80">
        <span className="text-gray-300/60 font-semibold">
          COPYRIGHT © {new Date().getFullYear()}
        </span>

        <span>
          Made with <span>❤️</span>
        </span>
      </div>
    </footer>
  )
}
