import styled from 'styled-components';
import FindPassion from './components/FindPassion';
import Navabar from './components/Navabar';
import Categories from './components/Categories';
function App() {
  return (
    <Wrapper>
      <Navabar />
      <FindPassion />
      <Categories />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1280px;
  width: calc(100% - 160px);
  margin: 0 auto;
`;
export default App;
