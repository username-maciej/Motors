// preloader
window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

const createMotors = (() => {
  // motorbike data
  const motors = [];

  // motorbike class
  class Motor {
    constructor(kind, img, special, model, price, type, trans, gas) {
      this.kind = kind;
      this.img = img;
      this.special = special;
      this.model = model;
      this.price = price;
      this.type = type;
      this.trans = trans;
      this.gas = gas;
    }
  }

  //  motorbike creation function
  function makeMotor(
    kind,
    img = "img/classic1.jpg",
    special,
    model = "new model",
    price = "10000",
    type = "classic",
    trans = "manual",
    gas = "30"
  ) {
    const motor = new Motor(
      kind,
      img,
      special,
      model,
      price,
      type,
      trans,
      gas
    );
    motors.push(motor);
  }
  // produce motors
  function produceMotors() {
    // (kind, img, special, model, price, type, trans, gas)
    makeMotor('classic', 'img/classic1.jpg', false, 'Thunderbolt', '12,000', 'Standard', 'manual', '1,2');
    makeMotor('modern', 'img/modern1.jpg',   true, 'V-Max', '18,000', 'Sport', 'manual', '1.3');
    makeMotor('classic', 'img/classic2.jpg', false, 'Spitfire', '14,000', 'Cruiser', 'manual', '0.9');
    makeMotor('modern', 'img/modern2.jpg',   true, 'Interceptor', '19,000', 'Dual-sport', 'manual', '1.5');
    makeMotor('classic', 'img/classic3.jpg', true, 'Thunderbird', '23,000', 'Cruiser', 'manual', '2.0');
    makeMotor('modern', 'img/modern3.jpg',   true, 'Black Lightning', '16,000', 'Sport', 'manual', '2.3');
    makeMotor('classic', 'img/classic4.jpg', true, 'Lightning', '12,000', 'standard', 'automatic', '1,1');
    makeMotor('modern', 'img/modern4.jpg',   false, 'X-75 Hurricane', '14.000','sport','automatic','1.4');
    makeMotor('classic', 'img/classic5.jpg', true, 'Mach I', '9.000','Touring','manual','1.4');
    makeMotor('modern', 'img/modern5.jpg',   false, 'Victor 441', '17.000','sport','automatic','1.8');

  }
  produceMotors();

  // special motors
  const specialMotors = motors.filter(motor => motor.special === true);

  return {
    motors,
    specialMotors
  };
})();


const displaySpecialMotors = (createMotors => {
  const specialMotors = createMotors.specialMotors;
  const info = document.querySelector(".featured-info");

  // document loaded event

  document.addEventListener("DOMContentLoaded", () => {
    info.innerHTML = "";

    let data = "";

    specialMotors.forEach(item => {
      data += `<!-- single item -->
                    <div class="featured-item my-3 p-2 text-capitalize">
                        <span data-img="${item.img}" class="featured-icon ml-2 d-flex align-items-baseline w-50">
                             <i class="fas fa-images"></i>
                             <h5 class="font-weight-bold mx-1">${item.kind}</h5>
                             <h5 class="mx-1">${item.model}</h5>
                        </span>

                    </div>
                    <!--end of single item -->`;
    });
    info.innerHTML = data;
  });

  // change image
  info.addEventListener("click", event => {
    if (event.target.parentElement.classList.contains("featured-icon")) {
      const img = event.target.parentElement.dataset.img;
      document.querySelector(".featured-photo").src = img;
    }
  });
})(createMotors);

const displayMotors = (createMotors => {
  // all motors
  const motors = createMotors.motors;
  // motors container
  const inventory = document.querySelector(".inventory-container");
  // content loaded
  document.addEventListener("DOMContentLoaded", () => {
    inventory.innerHTML = "";

    let output = "";
    motors.forEach((motors) => {
      output +=
        `<!-- single bike -->
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-motor ${motors.kind}">
                <div class="card bike-card">
                    <img src="${motors.img}" class="card-img-top bike-img" alt="">
                    <!-- card-body -->
                    <div class="card-body">
                        <div class="card-info d-flex justify-content-between">
                            <!-- first flex child -->
                            <div class="car-text text-uppercase">
                                <h6 class="font-weight-bold">${motors.type}</h6>
                                <h6>${motors.model}</h6>
                            </div>
                            <!-- second flex child -->
                            <h5 class="bike-value align-self-center py-2 px-3">
                                $<span class="bike-price">${motors.price}</span>
                            </h5>
                        </div>
                    </div>
                    <!-- end of card body -->
                    <div class="card-footer text-capitalize d-flex justify-content-between">
                        <p>
                            <span>
                                <i class="fas fa-motorcycle" "></i>
                            </span>${motors.kind}
                        </p>
                        <p>
                            <span>
                                <i class="fas fa-cogs "></i>
                            </span>${motors.trans}
                        </p>
                        <p>
                            <span>
                                <i class="fas fa-gas-pump "></i>
                            </span>${motors.gas}
                        </p>
                    </div>
                </div>
            </div>
        <!-- end of signe bike -->`;
    })
    inventory.innerHTML = output;
  })
})(createMotors);

// car filter
const filterMotors = (() => {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const value = event.target.dataset.filter;
      const singelMotor = document.querySelectorAll('.single-motor');
      console.log(singelMotor);

      singelMotor.forEach((motors) => {
        if (value === 'all') {
          motors.style.display = 'block';
        } else {
          (!motors.classList.contains(value)) ? motors.style.display = 'none': motors.style.display = 'block'
        }
      })
    })
  })
})();

// references card

(function(){

  // customers
     let customers = [];
     let index = 0;

  // constructor function
  function Customer (name,img,text){
      this.name = name;
      this.img  = img;
      this.text = text;
  }
  // create customer function
  function  createCustomer(name,img,text){
      // full img
      let fullImg = `img/customer-${img}.jpeg`;

      // create new customer instance
      const customer = new Customer(name,fullImg,text);
      // add to all customers
      customers.push(customer);
  }
      createCustomer('eddie','1','One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.');
      createCustomer('johhny','2','He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.');
      createCustomer('bobby','3','The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.');
      createCustomer('ted','4','A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. ');
      createCustomer('mark','5','It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull ');

      document.querySelectorAll('.btn').forEach(function(item){
          item.addEventListener('click',function(event){
              event.preventDefault();

              if(event.target.parentElement.classList.contains('prevBtn')){
                  if(index ===0 ){
                      index = customers.length;
                  }
                  index--;
                  document.getElementById('customer-img').src = customers[index].img;
                  document.getElementById('customer-name').textContent = customers[index].name;
                  document.getElementById('customer-text').textContent = customers[index].text;
              }
              if(event.target.parentElement.classList.contains('nextBtn')){
                  if(index === (customers.length - 1) ){
                      index = index - 1;
                  }
                  index++;
                  document.getElementById('customer-img').src = customers[index].img;
                  document.getElementById('customer-name').textContent = customers[index].name;
                  document.getElementById('customer-text').textContent = customers[index].text;
              }
          })
      })
  })();