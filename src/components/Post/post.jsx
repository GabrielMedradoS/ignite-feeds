import styles from "./post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/GabrielMedradoS.png"
          />
          <div className={styles.authorInfo}>
            <strong>Gabriel Medrado</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="" dateTime="">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um porjeto que fiz
          no NLW Return, evento da Rocketseat. O nome é DoctorCare{" "}
        </p>
        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#Rocketseat</a>
        </p>
      </div>
    </article>
  );
}
