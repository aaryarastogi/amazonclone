import {FaHeart} from 'react-icons/fa';
<div class="product_body">
          <div class="product_description">
            <p>
              The Lean Startup: How Constant Innovation Creates Radically
              Successful Businesses Paperback
            </p>
          </div>
          <div class="product_price">
            <p>&#8377; <span>500</span></p>
          </div>
          <ul class="rating d-flex">
            <li>
            {/* <FontAwesomeIcon icon="fa-solid fa-star" />
              <i class="fas fa-star"></i> */}
              <FaStar size="50px" color="red"/>
              <FaStar/>
              <FaStar/>
              <FaHeart/>
            </li>
            <li>
              <i class="fas fa-star"></i>
            </li>
            <li>
              <i class="fas fa-star"></i>
            </li>
            <li>
              <i class="far fa-star"></i>
            </li>
          </ul>
          <div class="product_img d-flex">
            <img src="assets/product1.jpeg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#"><button>Add To Busket</button></a>
          </div>
        </div>