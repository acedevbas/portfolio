<template>
  <li class="cart-nav onhover-dropdown">
    <div class="cart-box">
      <svg>
        <use href="@/assets/svg/icon-sprite.svg#stroke-ecommerce" @click="cart_open()"></use>
      </svg>
      <!-- <feather type="shopping-cart" @click="cart_open()"></feather> -->
      <span class="badge rounded-pill badge-success">2</span>
    </div>
    <div class="cart-dropdown onhover-show-div" :class="{ active: cart }">
      <h6 class="f-18 mb-0 dropdown-title">Cart</h6>
      <ul>
        <li class="mt-0">
          <div class="media">
            <img
              class="img-fluid b-r-5 me-3 img-60"
              src="../../assets/images/other-images/cart-img.jpg"
              alt=""
            />
            <div class="media-body">
              <span>Furniture Chair for Home</span>
              <div class="qty-box">
                <div class="input-group">
                  <span class="input-group-prepend">
                    <button
                      class="btn quantity-left-minus"
                      type="button"
                      data-type="minus"
                      data-field=""
                    >
                      -
                    </button>
                  </span>
                  <input
                    class="form-control input-number"
                    type="text"
                    name="quantity"
                    value="1"
                  />
                  <span class="input-group-prepend">
                    <button
                      class="btn quantity-right-plus"
                      type="button"
                      data-type="plus"
                      data-field=""
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
              <h6 class="font-primary mb-0">\$500</h6>
            </div>
            <div class="close-circle">
              <a href="#" class="bg-danger"><vue-feather type="x"></vue-feather></a>
            </div>
          </div>
        </li>
        <!-- повторение блока media -->
        <li class="mt-0">
          <div class="media">
            <img
              class="img-fluid b-r-5 me-3 img-60"
              src="../../assets/images/other-images/cart-img.jpg"
              alt=""
            />
            <div class="media-body">
              <span>Furniture Chair for Home</span>
              <div class="qty-box">
                <div class="input-group">
                  <span class="input-group-prepend">
                    <button
                      class="btn quantity-left-minus"
                      type="button"
                      data-type="minus"
                      data-field=""
                    >
                      -
                    </button>
                  </span>
                  <input
                    class="form-control input-number"
                    type="text"
                    name="quantity"
                    value="1"
                  />
                  <span class="input-group-prepend">
                    <button
                      class="btn quantity-right-plus"
                      type="button"
                      data-type="plus"
                      data-field=""
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
              <h6 class="font-primary mb-0">\$500</h6>
            </div>
            <div class="close-circle">
              <a href="#" class="bg-danger"><vue-feather type="x"></vue-feather></a>
            </div>
          </div>
        </li>
        <!-- конец повторения блока media -->
        <li class="total">
          <h6 class="mb-0">
            Order Total : <span class="f-right">\$1000.00</span>
          </h6>
        </li>
        <li class="text-center">
          <router-link
            class="d-block mb-3 f-w-700 view-cart"
            :to="'/ecommerce/cart'"
          >
            Go to your cart
          </router-link>
          <router-link
            :to="'/ecommerce/checkout'"
            class="btn btn-primary view-checkout"
          >
            Checkout
          </router-link>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CartComponent', // Переименован здесь
  data() {
    return {
      cart: false,
    };
  },
  methods: {
    cart_open() {
      this.cart = !this.cart;
    },
  },
};
</script>