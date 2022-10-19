import classNames from "classnames"
import { useEffect } from "react"
import styles from "./MobileMenu.module.scss"

export default function MobileMenu({ show, close }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [show])

  return (
    <nav className={classNames(styles.MobileMenu, show && styles.show)}>
      <div className="flex items-center justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
          onClick={close}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <ul className="text-center pt-24 space-y-10 text-lg">
        <li>
          <a href="https://home.com" target={"_blank"} rel="noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://home.com" target={"_blank"} rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://home.com" target={"_blank"} rel="noreferrer">
            Github
          </a>
        </li>
        <li>
          <a href="https://home.com" target={"_blank"} rel="noreferrer">
            Resume
          </a>
        </li>
        <li>
          <a
            href="mailto:enyinnayamoses60@gmail.com"
            target={"_blank"}
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <span>Say Hi</span> <span className="text-2xl">👋</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
