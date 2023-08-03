export default function Progress({
  index,
  numOfQuestion,
  points,
  maxPossiblePoint,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numOfQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numOfQuestion}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoint}
      </p>
    </header>
  );
}
