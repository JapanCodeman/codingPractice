import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('clicked')}>
    This is children prop
  </ChildAsFC>
};

export default Parent;