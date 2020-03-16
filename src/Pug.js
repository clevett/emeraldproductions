export const ReactComponent = props => (
  <div className="wrapper">
    {props.shouldShowGreeting ? (
      <p className="greeting">Hello World!</p>
    ) : null}
    <button onClick={props.notify}>Click Me</button>
  </div>
)

export default ReactComponent;
