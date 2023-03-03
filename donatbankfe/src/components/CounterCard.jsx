

function CounterCard() {

    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('counter') || 0);
    setCounter(count);
    localStorage.setItem('counter', count + 1);
  }, []);

  return (
    <Card>
        <h1>{counter}</h1>
    </Card>
  );
}
export default CounterCard;