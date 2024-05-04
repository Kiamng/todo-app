export default function Home() {
  return (
    <div className="main">
      <div className="content">
        <div className="content__container">
          <div className="content__title">
            <h1>TODO APP</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Task name"
              className="content__input"
            ></input>
          </div>
          <div className="content__submit-button">
            <button className="submit-btn">Add task</button>
          </div>
          <div className="content__todo-list">
            <div>
              <div className="content__list row">
                <div className="content__list-order ">1</div>
                <div className="content__list-desc ">Lau nha</div>
                <button className="content__list-btn ">DELETE</button>
              </div>
              <div className="content__list row">
                <div className="content__list-order ">1</div>
                <div className="content__list-desc ">Lau nha</div>
                <button className="content__list-btn ">DELETE</button>
              </div>
            </div>
          </div>
          <div className="content__footer">You have 0 task</div>
        </div>
      </div>
    </div>
  );
}
