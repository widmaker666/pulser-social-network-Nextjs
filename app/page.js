import styles from "./page.module.css";


export default function Home() {
  return (
    <main>
      <div className={styles["add-post"]}>
        <form className={styles["form-container"]}>
          <label htmlFor="title">
            Title
          </label>
          <input required type="text" id="title" placeholder="Your title" />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            required
            placeholder="Give us your question"
          ></textarea>
          <button type="submit">Pulse it !</button>
        </form>
      </div>
    </main>
  );
}
