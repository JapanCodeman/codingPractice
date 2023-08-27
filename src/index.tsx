import ReactDom from 'react-dom';
import UserSearchRef from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearchRef />
    </div>
  )
};

ReactDom.render(
  <App />, document.querySelector('#root'));