interface StarProps {
  isEmpty: boolean;
}

const Star = ({ isEmpty }: StarProps) => {
  return (
    <svg
      width={"10px"}
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.39 30.81"
    >
        <polygon
          strokeWidth="0px"
          fill={isEmpty ? "#313131" : "#fbd117"}
          points="16.2 0 21.2 10.14 32.39 11.77 24.29 19.66 26.21 30.81 16.2 25.54 6.19 30.81 8.1 19.66 0 11.77 11.19 10.14 16.2 0"
        />
    </svg>
  );
};

export default Star;
