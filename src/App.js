import React from 'react';
import './App.css';
import Login from './components/login';
import {db} from './config';
import {collection, addDoc,doc,onSnapshot, query,orderBy}  from 'firebase/firestore'


function App() {
  const [isLoggin, setIsLoggin] = React.useState(false);
  const [rightUser, setRightUser] = React.useState(false);
  const [leftUser, setLeftUser] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const card = React.useRef(null);

  const scrollToBottom = () => {
    card.current?.scrollIntoView({ behavior: "smooth" })
  }
  setTimeout(() => {
  scrollToBottom()
    }, 1000);

  React.useEffect(() => {

    /**
     * order by id ile bir sorgu yaz
     */

    const mesajlarRef = collection(db, "messages")
     const unsubscribe = onSnapshot(query(mesajlarRef, orderBy('date','asc')), (doc) => {
      let temp = [];
      doc.docs.forEach(item => {
        temp.push(item.data());
      });
      setMessages(temp);

    })
    return () => unsubscribe();

  }, [])

   React.useEffect(() =>{

    // cart scroll down

    let users = [
      {
        email: 'didem@lov.com',
        password: 'didem123',
        yon: 'right'
      },
      {
        email: 'sezer@lov.com',
        password: 'sezer123',
        yon: 'left'
      }
    ];
    users.forEach(item => {
      if(item.yon === 'right'){
        setRightUser(item)
      }else{
        setLeftUser(item)
      }
    });


  }, [] );


  const insertMessage = async () => {
    try {
      let mesaj = {
        sender: localStorage.getItem('email'),
        message: message,
        date: new Date()
      }
    const docRef = await addDoc(collection(db, 'messages'), mesaj);

    console.log(docRef.id)
    }catch(e) {
      console.error('Error adding document: ', e);
    }

  } 



  const sendMessage = () => {
    insertMessage();
    setMessage('');
    scrollToBottom()


  }




  if(localStorage.getItem('isLoggin') != '1'){
    if(!isLoggin){ 
      return (
        <Login setIsLoggin={setIsLoggin}/>
      )
  
    }
  }





  return (
      <div className="container content">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card" id="card">
              <div className="card-header" style={{backgroundColor: '#fc6d4c'}}>Sezer & Didem</div>
              <div className="card-body height3">
                <ul className="chat-list">


                {
                  messages.map((item,index) => {
                      if(item.sender == 'sezer@lov.com'){
                          return (
                            <li className="in" key={index}>
                            <div className="chat-img">
                              <img
                                alt="Avtar"
                                src="./assets/kurt.png"
                              />
                            </div>
                            <div className="chat-body">
                              <div className="chat-message">
                                <h5>Sezer</h5>
                                <p>{item.message}</p>
                              </div>
                            </div>
                          </li>
                          
                          )
                      } else {
                        return (
                          <li className="out" key={index}>
                          <div className="chat-img">
                            <img
                             alt="Avtar"
                             src="./assets/kusum.png"
                            />
                          </div>
                          <div className="chat-body">
                            <div className="chat-message">
                              <h5>Tweety</h5>
                              <p>{item.message}</p>
                            </div>
                          </div>
                        </li>
                        )
                      }
                  })
                }

               </ul>

               <div ref={card}></div>
                  

  
        </div>
        
        </div>
        <div>
            <textarea
              className="form-control mt-2"
              placeholder="Hayatına güzel bir şey yaz.."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <button className="btn btn-primary w-100 mt-2"  style={{backgroundColor: '#fc6d4c'}} onClick={sendMessage}>Gönder</button>
          </div>
        </div>
        </div>
        </div>

  );
}

export default App;
