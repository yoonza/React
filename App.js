import logo from './logo.svg';
import './App.css';
// 사용자 정의 태그 만들기(함수 생성)
function Header(props){
  console.log('props', props, props.title);
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const list = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    list.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {list}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
  <h2>{props.title}</h2>
  {props.body}
  </article>
}

function App() { 
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'frontend', body:'frontend is ...'},
  ]
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello,yoonza"></Article>
    </div>
  );
}

export default App;
