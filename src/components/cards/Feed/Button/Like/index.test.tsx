import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Button from "..";

beforeEach( async () => {
  render(<Button.Like />);
  await waitFor(() => screen.getByTestId("like-button"));
});

test('If component returns null when initializes', () => {
  const component = render(<Button.Like />);

  expect(component.container.innerHTML).toBeFalsy();
});

describe('Like Counter', () => {
  test('If like counter should increment by 1 async', async () => {
    render(<Button.Like />);
    const onClickNodeAsync = await waitFor(() => screen.getByTestId('like-button'));

    fireEvent.click(onClickNodeAsync);

    const count = await waitFor(() => screen.getByText('1'));

    expect(count.innerHTML).toBe('1');
  });

  // test('If like counter initiatilizes to 0' , () => {
  //   render(<Button.Like />);

  //   const onClickNode = screen.getByTestId('like-counter');

  //   expect(onClickNode.innerHTML).toEqual('0');
  // });

  // test('If like counter should increment by 1', () => {
  //   render(<Button.Like />);

  //   const onClickNode = screen.getByTestId('like-counter');

  //   fireEvent.click(onClickNode);

  //   expect(onClickNode.innerHTML).toEqual('1');
  // });

  // test('If un liking. the counter should decrement', () => {
  //   render(<Button.Like />);
    
  //   const onClickNode = screen.getByTestId('like-counter');

  //   fireEvent.click(onClickNode);
  //   fireEvent.click(onClickNode);

  //   expect(onClickNode.innerHTML).toEqual('0');
  // });
});

// describe('Heart icon', () => {
//   test('Heart icon node initializes to unliked', () => {
//     render(<Button.Like />)
  
//     const heartSVGIcon = screen.getByTestId('heart-icon');
  
//     let classes: string[] = heartSVGIcon.classList.toString().split(' ');
//     classes = classes.filter((className: string) => className === 'unliked');
  
//     expect(classes[0]).toBe('unliked');
//   });
  
//   test('Heart icon node toggles to liked', () => {
//     render(<Button.Like />)
  
//     const heartSVGIcon = screen.getByTestId('heart-icon');
//     const onClickNode = screen.getByTestId('like-button');
  
//     fireEvent.click(onClickNode);
  
//     let classes: string[] = heartSVGIcon.classList.toString().split(' ');
//     classes = classes.filter((className: string) => className === 'liked');
  
//     expect(classes[0]).toBe('liked');
//   });  
// });

// describe('Network Like Counter Requests', () => {
//   test('If like increments by 1 on the server', () => {
//     render(<Button.Like />);

//     // console.log('Http response: ', response);

//     const onClickNode = screen.getByTestId('like-counter');
    
//     fireEvent.click(onClickNode);

//     expect(onClickNode.innerHTML).toEqual('1');
//   });
// });
