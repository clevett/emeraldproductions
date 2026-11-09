import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { FlipCard } from "./FlipCard";

function Example() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div onClick={() => setFlipped((value) => !value)}>
      <FlipCard isFlipped={flipped} frontToBackDuration={0.3}>
        <button>Front</button>
        <button>Back</button>
      </FlipCard>
    </div>
  );
}

test("shows and enables only the active face while flipping both ways", () => {
  render(<Example />);
  const front = screen.getByText("Front");
  const back = screen.getByText("Back");

  expect(front.parentElement?.hasAttribute("inert")).toBe(false);
  expect(back.parentElement?.hasAttribute("inert")).toBe(true);
  expect(back.parentElement?.getAttribute("aria-hidden")).toBe("true");
  expect(back.parentElement?.style.transitionDuration).toBe("0.3s");

  fireEvent.click(front);
  expect(front.parentElement?.hasAttribute("inert")).toBe(true);
  expect(back.parentElement?.hasAttribute("inert")).toBe(false);
  expect(front.parentElement?.getAttribute("aria-hidden")).toBe("true");

  fireEvent.click(back);
  expect(front.parentElement?.hasAttribute("inert")).toBe(false);
  expect(back.parentElement?.hasAttribute("inert")).toBe(true);
});
