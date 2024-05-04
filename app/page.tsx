export default function Home() {
  return (
    <div className="main h-screen flex justify-center items-center bg-[#ff8d8d] text-black">
      <div className="content">
        <div className="content__container relative px-5 w-[680px] bg-white min-h-[520px] rounded-xl">
          <div className="content__title pt-3 text-center">
            <h1 className="text-red-500">TODO APP</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Task name"
              className="content__input w-[99%] py-3 text-lg outline-[#ff1D1D] border-[1px] rounded-lg indent-3"
            ></input>
          </div>
          <div className="content__submit-button mt-4">
            <button className="submit-btn w-full h-10 font-bold text-lg bg-[#ff1d1d] text-white border-none rounded-lg hover:opacity-80">Add task</button>
          </div>
          <div className="content__todo-list pb-[50px] ">
            <div>
              <div className="content__list flex-wrap flex mt-5 text-lg items-center">
                <div className="content__list-order block py-3 px-4 bg-[#ff1d1d] text-white rounded-xl mr-4">1</div>
                <div className="content__list-desc flex-1">Lau nha</div>
                <button className="content__list-btn text-xl text-[#ff1d1d] border-none bg-white">DELETE</button>
              </div>
              <div className="content__list flex-wrap flex mt-5 text-lg items-center">
                <div className="content__list-order block py-3 px-4 bg-[#ff1d1d] text-white rounded-xl mr-4">2</div>
                <div className="content__list-desc flex-1">Lau nha</div>
                <button className="content__list-btn text-xl text-[#ff1d1d] border-none bg-white">DELETE</button>
              </div>
            </div>
          </div>
          <div className="content__footer pr-5 pb-5 absolute text-xl bottom-0 right-0">You have 0 task</div>
        </div>
      </div>
    </div>
  );
}
