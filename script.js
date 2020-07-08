$(document).ready(function() {
  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus");
  });
  //刪除modal
  $("#deleteModal").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var recipient = button.data("title");
    var modal = $(this);
    modal.find(".modal-title").text("確認刪除 " + recipient);
    modal.find(".modal-body input").val(recipient);
  });
});
// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })
//刪除商品

// 表單驗證
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();





// vue.js
let loading = {methods: {open() {this.$store.dispatch("open",true)},}}
const home = { template: '#home',...loading }
const about = { template: '#about',...loading }
const buy = { template: '#buy',...loading }

const routes = [
  {path: '/', redirect: 'home'},
   { path: '/home', component: home },
  { path: '/about', component: about },
  { path: '/buy', component: buy },
  
]

const router = new VueRouter({
  routes 
})
const store = new Vuex.Store({
  state: {
  visible: false,
  },
  actions:{
     open(context,status) {
            // console.log('open was clicked, will auto hide');
       context.commit('change',status);
            // state.visible= status;
            setTimeout(() =>{
              context.commit('change',false);
            } , 250)
       
        },
  },
  mutations: {
    change(state,status){
      state.visible = status;
    }
  }
})
new Vue({
  el:"#app",
  store,
  router,
  methods: {
        open() {
         this.$store.dispatch("open",true)
        },
    },
  components: {
        Loading: VueLoading
    },
  computed:{
    visible(){
      return this.$store.state.visible;
    }
    
  },
  mounted(){
    <!-- Initialize Swiper --> 
let swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      // spaceBetween: 30,
      autoplay:true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
  }
})