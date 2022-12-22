import { Header } from "./components/Header/header";
import { Post } from "./components/Post/post";
import { Sidebar } from "./components/Sidebar/sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Gabriel"
            content="Lorem ipsum dolor sit amet. Eum natus consequatur sit voluptatem dolores est totam deserunt. Qui sint magnam ex doloremque odio non natus eligendi sit officia fugit et voluptas quisquam."
          />
        </main>
      </div>
    </div>
  );
}
