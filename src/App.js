import Card from './component/Card.js'
import './App.css';

function App() {
  let data = [{
    id: 1,
    heading: "Mobile Opertaing System",
    list: [
      {
        id: 101,
        title: "Android"
      },
      {
        id: 102,
        title: "IOS"
      },
      {
        id: 103,
        title: "Windows"
      },
      {
        id: 104,
        title: "Blackberry"
      }
    ]
  }, {
    id: 2,
    heading: "Moblie Manufactures",
    list: [
      { id: 201, title: "Apple" }
      , {
        id: 202, title: "Samsung"
      },
      {
        id: 203,
        title: "Micromax"
      }, {
        id: 204,
        title: "HTC"
      }]
  }]
  return (
    <div>
      {
        data.map((item) =>
          <Card {...item} />)

      }
    </div>
  );
}

export default App;
