import { fireEvent, render, screen, waitFor, waitForOptions } from "@testing-library/react";
import Button from "..";
import { count } from "./utils";

const countText: string = count.toString();
const countAsInteger: number = count;
const _waitForOptions: waitForOptions = { timeout: 2250 };

beforeEach( async () => {
  render(<Button.Like />);
  await waitFor(() => screen.getByTestId("like-button"), _waitForOptions);
});

test('If component returns null when initializes', () => {
  const component = render(<Button.Like />);

  expect(component.container.innerHTML).toBeFalsy();
});

describe('Like Counter', () => {
  
  test(`If like counter initiatilizes to ${countText}`, () => {
    const likeCounterNode = screen.getByTestId("like-counter");
    
    expect(likeCounterNode.innerHTML).toEqual(countText);
  });

  test('If like counter should increment by 1', async () => {
    render(<Button.Like />);
    const onClickNodeAsync = await waitFor(() => screen.getByTestId('like-button'), _waitForOptions);

    fireEvent.click(onClickNodeAsync);

    const text = (countAsInteger + 1).toString();
    const count = await waitFor(() => screen.getByText(text), _waitForOptions);

    expect(count.innerHTML).toBe(text);
  });

  test("If un liking, the counter should deincrement", async () => {
    const onClickNode = screen.getByTestId("like-button");
    const likeCounterNode = screen.getByTestId("like-counter");

    fireEvent.click(onClickNode);
    const text = (countAsInteger + 1).toString();
    await waitFor(() => screen.getByText(text), _waitForOptions);

    fireEvent.click(onClickNode);
    await waitFor(() => screen.getByText(countText), _waitForOptions);

    expect(likeCounterNode.innerHTML).toEqual(countText);
  });
});
 
describe("Heart icon", () => {
  test("Heart icon node initializes to unliked", () => {
    const heartSVGIcon = screen.getByTestId("heart-icon");

    let classes: string[] = heartSVGIcon.classList.toString().split(" ");
    classes = classes.filter((className: string) => className === "unliked");

    expect(classes[0]).toBe("unliked");
  });

  test("Heart icon node toggles to liked", async () => {
    const heartSVGIcon = screen.getByTestId("heart-icon");
    const onClickNode = screen.getByTestId("like-button");

    fireEvent.click(onClickNode);
    const text = (countAsInteger + 1).toString();
    await waitFor(() => screen.getByText(text), _waitForOptions);

    let classes: string[] = heartSVGIcon.classList.toString().split(" ");
    classes = classes.filter((className: string) => className === "liked");

    expect(classes[0]).toBe("liked");
  });
});