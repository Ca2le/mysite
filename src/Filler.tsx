interface FillerProps {
  left: boolean;
}
const Filler = ({ left }: FillerProps) => {
  return (
    <div style={{ flex: 1, zIndex: 1000}}>
      <div
        className="section1"
        style={{ height: "calc(100vh + 681px)", backgroundColor: "red" }}
      />
      <div
        className="section2"
        style={{
          height: "750px",
          justifyContent: "end",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {left ? (
          <div style={{ height: "150px", backgroundColor: "#83E5BB" }} />
        ) : (
          <div style={{ height: "25px", backgroundColor: "#83E5BB" }} />
        )}
        <div
          style={{
            height: "600px",
            background: "linear-gradient(to bottom, #83E5BB, #ED4AFF)",
          }}
        />
      </div>
      <div
        className="section3"
        style={{
          height: "auto",
          backgroundColor: "blue",
        }}
      />
    </div>
  );
};

export default Filler;
