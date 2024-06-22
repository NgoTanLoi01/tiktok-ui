import myAlert from "~/myAlert";

function Button() {
  return <button onClick={myAlert}>Click me!</button>;
}

export default Button; // Export component, không phải kết quả của Button()
