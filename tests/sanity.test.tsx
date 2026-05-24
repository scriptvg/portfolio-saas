import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("toolchain", () => {
  it("vitest + testing-library can render a component", () => {
    render(<h1>hola</h1>);
    expect(screen.getByRole("heading", { name: "hola" })).toBeInTheDocument();
  });
});
