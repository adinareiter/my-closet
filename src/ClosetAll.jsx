/* eslint-disable react/prop-types */
export function ClosetAll(props) {
  console.log(props);
  return (
    <div id="closet-all">
      <h3>Closet</h3>
      {/* loop of defined recipe data props from the parent component */}
      <div>
        {props.products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image_url} alt="pics" />
          </div>
        ))}
      </div>
    </div>
    // <div id="closet-all">
    //   <h1>Closet</h1>
    //     <div>
    //       {props.products.map((product) => (
    //       <div key={product.id}>
    //         <h2>{product.name}</h2>
    //         <img src={product.image_url}  alt="pics" />
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}
