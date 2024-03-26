import { fireEvent, render} from '@testing-library/react';
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot;
});

it("should add a new box", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);
    const color = getByLabelText("Color:");
    const btn = queryByText("New Box");

    expect(queryByText("Color: Purple")).not.toBeInTheDocument;
    expect(queryByText("X")).not.toBeInTheDocument;

    fireEvent.change(color, { target: { value: "Purple" } });
    fireEvent.click(btn);

    expect(queryByText("Color: Purple")).toBeInTheDocument;
    expect(queryByText("X")).toBeInTheDocument;
})

it("should remove a created box", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);
    const input = getByLabelText("Color:")
    const btn = queryByText("New Box");

    fireEvent.change(input, { target: { value: "Purple" } });
    fireEvent.click(btn);

    const remove = queryByText("X");
    fireEvent.click(remove);

    expect(queryByText("Color: Purple")).not.toBeInTheDocument;
    expect(queryByText("X")).not.toBeInTheDocument;
})