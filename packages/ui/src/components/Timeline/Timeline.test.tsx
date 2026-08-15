import React, { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Timeline } from "./Timeline";
import { CheckCircle2 } from "lucide-react";

describe("Timeline component", () => {
  it("renders ordered list element with declarative items", () => {
    const { container } = render(
      <Timeline
        items={[
          { title: "Container Built", time: "10:00 AM", description: "Image tagged v1.0.0" },
          { title: "Deploying Service", time: "10:05 AM", status: "processing" },
        ]}
      />
    );

    expect(container.querySelector("ol")).toBeInTheDocument();
    expect(screen.getByText("Container Built")).toBeInTheDocument();
    expect(screen.getByText("10:00 AM")).toBeInTheDocument();
    expect(screen.getByText("Image tagged v1.0.0")).toBeInTheDocument();
    expect(screen.getByText("Deploying Service")).toBeInTheDocument();
  });

  it("renders compound components with custom icon and status", () => {
    render(
      <Timeline>
        <Timeline.Item status="success" icon={<CheckCircle2 data-testid="check-icon" />}>
          <Timeline.Time>12:30 PM</Timeline.Time>
          <Timeline.Title>Backup Completed</Timeline.Title>
          <Timeline.Description>Encrypted snapshot saved to S3 bucket.</Timeline.Description>
        </Timeline.Item>
      </Timeline>
    );

    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
    expect(screen.getByText("12:30 PM")).toBeInTheDocument();
    expect(screen.getByText("Backup Completed")).toBeInTheDocument();
    expect(screen.getByText("Encrypted snapshot saved to S3 bucket.")).toBeInTheDocument();
  });

  it("forwards ref to ol container", () => {
    const ref = createRef<HTMLOListElement>();
    render(<Timeline ref={ref} items={[{ title: "Event" }]} />);
    expect(ref.current).toBeInstanceOf(HTMLOListElement);
  });
});
