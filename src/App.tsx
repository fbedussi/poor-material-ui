import TextField from "./components/TextField";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className="top-app-bar">
        <h1>Top app bar</h1>
      </div>

      <section>
        <h1>Buttons</h1>
        <div className={styles.grid}>
          <button type="button" className="btn">
            Primary button
          </button>
          <button type="button" className="btn secondary">
            Secondary button
          </button>
          <button className="icon-btn" type="button">
            +
          </button>
          <button type="button" className="fab" aria-label="add">
            +
          </button>
        </div>
      </section>

      <section>
        <h1>Inputs</h1>
        <div className={styles.grid}>
          <TextField id="username" name="username" label="nome utente" />
          <TextField
            id="password"
            name="password"
            type="password"
            label="password"
          />
          <TextField
            id="error"
            name="error"
            label="With error"
            error="some error"
          />
        </div>
        <select>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </select>
      </section>

      <section>
        <h1>Checkbox</h1>
        <div className={styles.grid}>
          <label>
            <input type="checkbox" name="rememberMe" />
            ricordami
          </label>
        </div>
      </section>

      <section>
        <h1>Radio group</h1>
        <div className={styles.grid}>
          <fieldset>
            <legend>Sort by</legend>
            <label>
              <input type="radio" name="sortingKey" value="author" />
              author
            </label>
            <label>
              <input type="radio" name="sortingKey" value="title" />
              title
            </label>
            <label>
              <input type="radio" name="sortingKey" value="category" />
              category
            </label>
          </fieldset>
        </div>
      </section>

      <section className="card">
        <h1>Card</h1>
        <div className={styles.grid}>Card content</div>
      </section>

      <section>
        <h1>Snackbar</h1>
        <button className="btn" popoverTarget="snackbar">
          open snackbar
        </button>
        <div popover="" id="snackbar" className="snackbar">
          <div>snackbar content</div>
          <button
            type="button"
            popoverTarget="snackbar"
            popoverTargetAction="hide"
            aria-label="close"
          >
            x
          </button>
        </div>
      </section>

      <section>
        <h1>Modal</h1>
        <button className="btn" commandfor="modal" command="show-modal">
          open modal
        </button>
        <dialog id="modal" closedby="any">
          <div>snackbar content</div>
          <button
            type="button"
            commandfor="modal"
            command="close"
            aria-label="close"
          >
            x
          </button>
        </dialog>
      </section>

      <section>
        <h1>Circular progress</h1>
        <div className={styles.grid}>
          <div role="progressbar" />
          <div role="progressbar" className="secondary" />
        </div>
      </section>

      <section>
        <h1>Elevation</h1>
        <div className={styles["elevation-container"]}>
          <div className="card">Elevation 0</div>
          <div className="card elevation-1">Elevation 1</div>
          <div className="card elevation-2">Elevation 2</div>
          <div className="card elevation-3">Elevation 3</div>
          <div className="card elevation-4">Elevation 4</div>
          <div className="card elevation-6">Elevation 6</div>
          <div className="card elevation-8">Elevation 8</div>
          <div className="card elevation-12">Elevation 12</div>
          <div className="card elevation-16">Elevation 16</div>
          <div className="card elevation-24">Elevation 24</div>
        </div>
      </section>
    </div>
  );
}

export default App;
