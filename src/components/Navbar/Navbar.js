import classNames from "classnames"
import styles from "./Navbar.module.scss"

export default function Navbar({ openMenu }) {
  return (
    <nav className={styles.Navbar}>
      <div>
        <h1 className="font-bold text-xl">Moses Enyinnaya</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 md:hidden block"
          onClick={openMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>

        <ul>
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
          <li className={classNames(styles.emailMe, "group")}>
            <a
              href="mailto:enyinnayamoses60@gmail.com"
              target={"_blank"}
              rel="noreferrer"
              style={{ color: "white" }}
              className="space-x-1"
            >
              <span>Say Hi</span>
              <span className="text-2xl transition group-hover:rotate-[30deg]">
                👋
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
