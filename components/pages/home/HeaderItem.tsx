import { IHeaderItem } from "../../../pages";

const HeaderItem: React.FC<{ item: IHeaderItem }> = (props) => {
  const { title, select, options } = props.item;
  return (
    <div className="header-item mx-2">
      <label className=" text-2xl">{title}</label>
      <br />
      <select
        className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer"
        aria-label="Default select example"
      >
        <option value={undefined}>{select}</option>
        {options.map((option, indx) => (
          <option value={option.value} key={indx}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HeaderItem;
