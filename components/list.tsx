interface ListProps {
  todoList: string[];
  deleteTask: (index: number) => void;
}

export const List = ({ todoList, deleteTask }: ListProps) => {
  return (
    <div className="content__todo-list pb-[50px] ">
      <div>
        {todoList.map((value, index) => (
          <div
            key={index}
            className="content__list flex-wrap flex mt-5 text-lg items-center"
          >
            <div className="content__list-order block py-3 px-4 bg-[#ff1d1d] text-white rounded-xl mr-4">
              {index + 1}
            </div>
            <div className="content__list-desc flex-1">{value}</div>
            <button
              onClick={() => deleteTask(index)}
              className="content__list-btn text-xl text-[#ff1d1d] border-none bg-white"
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
