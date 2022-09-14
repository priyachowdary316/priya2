import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
  <div className="home"> 
       <div className="home_container">
           <img  className="home_image" src="https://i.ytimg.com/vi/4fREGW7Treo/maxresdefault.jpg" alt=""/>

           <div className="home_row">
            <Product id="12321341"
            title="The lean startup" price={29.99} image="https://www.vision-preneur.nl/wp-content/uploads/2021/02/81jgCiNJPUL.jpg" rating={5}/>
            <Product id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Steel Bowl"
            price={239.0}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2020/8/VJ/RK/AW/3241702/736395-500x500.jpg"/>
           </div>

           <div className="home_row">
           <Product id="4903850"
           title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
           price={199.99}
           rating={3}
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKgNPW9ooIQW4S_weIbNlCcQ_tE7okEM9cF6BbEBMV5XBjYZAvrPKy25uE56HQpgotIk&usqp=CAU"/>
           <Product id="23445930"
           title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
           price={98.99}
           rating={5}
           image="https://cdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/assets/f/8/f/a/f8fa2e7011354b94d48ccf6ad73d24082928171e_1.jpg"/>
           <Product id="3254354345"
           title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB) - Silver (5th Generation)"
           price={598.99}
           rating={4}
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOYV5qXOe6qYad2grjcXVZE7PsVVlyobhd9k5k8R0TjQR94b9-7nRpnUSBFxJty8fbTE&usqp=CAU" />
           </div>

           <div className="home_row">
           <Product id="90829332"
           title="REFLEX VOX DIGITAL SILICONE RED STRAP WATCH(FAST TRACk)"
           price={199.99}
           rating={4}
           image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLePHph79hRvVrLLKCayoCGFC4RQKO95FfNb-ObBw4NTHpjwqd-kWCzy5_gj75fgF6-Ag91K0trPC6NW6TTKy_5Xxi7VjKiE0bJ51_e04&usqp=CAc" />
           </div>
        </div>  
    </div>
  );
  
}

export default Home;

