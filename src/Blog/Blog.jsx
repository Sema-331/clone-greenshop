import { useEffect, useState } from "react";
import { deleteTodo, fetchTodos, toggleComplete, toggleStatus } from './../Slices/storeTraining';
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";

function App() {

  const dispatch = useDispatch()
  const selector = useSelector((item) => item.todos.todos)
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])
  const componentMounted = true
  const [state, setState] = useState([])
  const [filter, setFilter] = useState([])

  {/*const myFn = (id) => {
    fetch(`http://localhost:3031/user/3`, {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({ favourites: !selector.favourites })
      })
      .then(response => response.json())
      .then(data => console.log(data));
    }
  
  useEffect(() => {
    const getProducts = async () => {
        const response = await fetch("http://localhost:3031/user")
        if (componentMounted) {
            setState( await response.clone().json())
            setFilter( await response.json())
            console.log(filter)
        }
        return () => {
            componentMounted(false)
        }
    }
    getProducts()
}, [])*/}


  return (
    <div className="hello__block">
      <div className="container">
        <div style={{margin: '50px 0px'}}>
          <p className="plant__core-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eius, quas dolore beatae perspiciatis id dicta modi ducimus voluptatum tenetur possimus dolorem omnis nemo optio doloribus fugit, laudantium odit. Mollitia?
        Non ex earum, minima neque explicabo excepturi, molestias expedita veritatis eius voluptatibus perspiciatis voluptas numquam, voluptate odit architecto ab sit? Tempora minus ea itaque nesciunt corporis eaque impedit? Nemo, laboriosam!
        Placeat quod exercitationem doloremque veritatis ratione quis non nisi aspernatur debitis quia odio, ut tenetur excepturi. Dolorem facere hic, consequuntur laborum ea accusamus, tenetur exercitationem magnam aspernatur aperiam fugiat saepe.
        Soluta enim eaque, quam eos natus, accusamus sapiente modi sed aperiam, omnis similique. Blanditiis omnis odit pariatur corporis reiciendis maiores maxime dolores sit! Placeat consectetur, recusandae fuga esse quis illo.
        Suscipit neque impedit laboriosam modi sit voluptatum, doloremque accusamus quasi. Reprehenderit molestiae beatae nulla qui, iure id delectus perferendis maxime ipsam modi adipisci quia dolorem, saepe cumque nisi sint temporibus.
        Provident deleniti incidunt exercitationem possimus unde eum. Magnam, nesciunt ducimus. Quisquam ipsa labore voluptatem et provident inventore? Debitis autem odio delectus in dolor, sapiente molestias consectetur, tempora officiis exercitationem deleniti!
        Velit soluta ut delectus nihil, praesentium quo, ratione, repudiandae vitae est illo laudantium sunt in quaerat. Est, blanditiis rem corrupti dolorem ullam magni, molestias porro quas repudiandae consequatur suscipit consequuntur?
        Autem dolores eveniet adipisci? Accusantium vero dignissimos sunt iure deserunt. Incidunt dignissimos, vel sit nulla repudiandae porro. Repudiandae autem sunt iure quia dicta dignissimos, totam aliquam ducimus dolores suscipit reiciendis!
        Mollitia rerum quasi nulla aperiam blanditiis cum repudiandae a id quae sed aliquid error, quaerat optio necessitatibus ut magnam tenetur harum ad voluptate! Vero labore repellendus necessitatibus quaerat illum nisi?
        Atque, in! Consequuntur modi ab omnis error ratione explicabo culpa, beatae at excepturi fugit! Vero dolore repudiandae unde incidunt deserunt? Esse repellat nam sint quam earum mollitia ad doloremque inventore!</p>
        </div>
      </div>
      {/*{
        selector.map((item) => (
          <div key={item.id}>
            <Item {...item} />
          </div>
        ))
      }
      <div class="product-card">
          <img src="images/img1.jpg"
               data-hover-slides="./logo192.png, ./logo512.png" />
      </div>*/}

    </div>
  );
}

export default App;
