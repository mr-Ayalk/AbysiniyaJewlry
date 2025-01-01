import React, { useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './CSS/ShopCategory.css';
import Item from '../Components/Items/Item';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className='shop-category'>
      {/* <img className='shopcategory-banner' src={props.banner} alt="" /> */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        {/* <div className="shopcategory-sort">
          Sort by <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '8px' }} />
        </div> */}
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;


// import React, { useContext } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import './CSS/ShopCategory.css'
// import all_product from '../Components/Assets/all_product'
// import Item from '../Components/Items/Item'
// import { ShopContext } from '../Context/ShopContext'
// const ShopCategory=(props)=> {
//   const {all_product}=useContext(ShopContext);
//   return (
//     <div className='shop-category'>
//       {/* <img className='shopcategory-banner' src={props.banner} alt="" /> */}
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span>out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by  <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '8px' }} />
//         </div>
//       </div>
//       <div className="shopcategory-products">
//         {all_product.map((item,i)=>{
//           if(props.category===item.category){
//             return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}
//             />

//           }else{
//             return null;
//           }
//           }
//         )}
       
//       </div>
//     </div>
//   )
// }

// export default ShopCategory
