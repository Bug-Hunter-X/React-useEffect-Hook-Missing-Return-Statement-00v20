```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const title = document.title = `You clicked ${count} times`;
    return () => {
      // Cleanup function to reset the title when the component unmounts
      document.title = title;
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```