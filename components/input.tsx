interface InputProps {
  inputValue: string;
  enterInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  addInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ inputValue, enterInput, addInput }: InputProps) => {
  return (
    <div>
      <input
        value={inputValue}
        onKeyDown={(e) => enterInput(e)}
        onChange={(e) => addInput(e)}
        type="text"
        placeholder="Task name"
        className="content__input w-[99%] py-3 text-lg outline-[#ff1D1D] border-[1px] rounded-lg indent-3"
      ></input>
    </div>
  );
};
