import styled from 'styled-components';

export const ListWrapper = styled.div.attrs(() => ({
  className: 'user-list',
}))`
  box-shadow: 0px 0px 5px 1px #cecece;
  padding: 15px;
  margin-bottom: 20px;
  max-width: 400px;
  display: inline-block;
  margin: 5px 0 10px;
  border-radius: 4px;
  width: calc(100% - 30px);


  ul {
    margin: 0;
    padding-inline-start: 0;
  }

  h5 {
    margin-top: 0;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const CustomCheckbox = styled.input.attrs(() => ({
  className: 'checkboxInput',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckboxMark = styled.span.attrs(() => ({
  className: 'checkboxMark',
}))`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;

  &:after {
    content: "";
    display: none;
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

interface ToDoItemProps {
  isCompleted: boolean;
}
export const ToDoItem = styled.li.attrs(() => ({
  className: 'todoItem',
}))<ToDoItemProps>`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  font-weight: 300;

  &:hover {
    input ~ ${CheckboxMark} {
      background-color: #ccc;
    }
  }

  ${({ isCompleted }) => isCompleted && `
    text-decoration: line-through;
    color: #bcbcbc;
  `}

  input:checked ~ ${CheckboxMark} {
    background-color: #67cb48;

    &::after {
      display: block;
    }
  }
`;
