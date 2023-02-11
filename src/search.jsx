import style from"./App.css";

export const Search = ({
  onChange,
}: {
  onChange: React.ChangeEventHandler;
}) => {
  return (
    <input
      className={style.search}
      type="text"
      onChange={onChange}
      placeholder="Search by the title ..."
    />
  );
};