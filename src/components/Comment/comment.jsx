import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/GabrielMedradoS.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Medrado</strong>
              <time title="" dateTime="">
                Cerca de 1hr atras
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom dev, Parabens</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
