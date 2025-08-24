import { Button } from './components/ui/button';

export const App = () => {
  const onClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="w-full flex justify-between">
      <h1>Hello World</h1>
      <Button onClick={onClick}>Click me</Button>
    </div>
  );
};
