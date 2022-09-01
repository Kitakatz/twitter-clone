import { fireEvent, render, screen } from "@testing-library/react";
import Button from "..";

describe('Like Counter', () => {
  test('If like counter initiatilizes to 0' , () => {
    render(<Button.Like />);

    const onClickNode = screen.getByTestId('like-counter');

    expect(onClickNode.innerHTML).toEqual('0');
  });

  test('If like counter should increment by 1', () => {
    render(<Button.Like />);

    const onClickNode = screen.getByTestId('like-counter');

    fireEvent.click(onClickNode);

    expect(onClickNode.innerHTML).toEqual('1');
  });

  test('If un liking. the counter should decrement', () => {
    render(<Button.Like />);
    
    const onClickNode = screen.getByTestId('like-counter');

    fireEvent.click(onClickNode);
    fireEvent.click(onClickNode);

    expect(onClickNode.innerHTML).toEqual('0');
  });
});

describe('Heart icon', () => {
  test('Heart icon node initializes to unliked', () => {
    render(<Button.Like />)
  
    const heartSVGIcon = screen.getByTestId('heart-icon');
  
    let classes: string[] = heartSVGIcon.classList.toString().split(' ');
    classes = classes.filter((className: string) => className === 'unliked');
  
    expect(classes[0]).toBe('unliked');
  });
  
  test('Heart icon node toggles to liked', () => {
    render(<Button.Like />)
  
    const heartSVGIcon = screen.getByTestId('heart-icon');
    const onClickNode = screen.getByTestId('like-button');
  
    fireEvent.click(onClickNode);
  
    let classes: string[] = heartSVGIcon.classList.toString().split(' ');
    classes = classes.filter((className: string) => className === 'liked');
  
    expect(classes[0]).toBe('liked');
  });  
});
