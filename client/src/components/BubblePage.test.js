import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as mockFetchColors} from "../utils/fetchColors"
jest.mock("../utils/fetchColors")

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce({
    data: [
      {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff"
        },
        id: 1
      }
    ]
  })

  render(<BubblePage />)

  await waitFor(() => {
    const color = screen.findByText(/aliceblue/i)
    expect(color).toBeInTheDocument()
  })
});
