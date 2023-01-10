//************Drag & Drop Todo's*****************/
export const dragStart = (e, position, dragItem) => {
  dragItem.current = position;
  console.log(e.target.innerHTML);
};
export const dragEnter = (e, position, dragOverItem) => {
  dragOverItem.current = position;
  console.log(e.target.innerHTML);
};
export const drop = (e, list, setList, dragItem, dragOverItem) => {
  const copyListItems = [...list];
  const dragItemContent = copyListItems[dragItem.current];
  copyListItems.splice(dragItem.current, 1);
  copyListItems.splice(dragOverItem.current, 0, dragItemContent);
  dragItem.current = null;
  dragOverItem.current = null;
  setList(copyListItems);
};
//**************Filtre Function******************/
export const FilterFunction = (query, list) => {
  const Testing = {
    All: list.filter((el) => el),
    Active:
      list.filter((el) => el.status === "Active").length > 0
        ? list.filter((el) => el.status === "Active")
        : [{ title: null }],
    Completed:
      list.filter((el) => el.status === "Completed").length > 0
        ? list.filter((el) => el.status === "Completed")
        : [{ title: null }],
  };
  return Testing[query];
};
