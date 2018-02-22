const app = function(){

  const cats = [
    {
      name:"Boba",
      favFood: "Sock fluff",
      img: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
    },
    {
      name:"Barnaby",
      favFood: "Tuna",
      img: "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"
    },
    {
      name:"Max",
      favFood: "Whiskas Temptations",
      img: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
    },
    {
      name:"Snarl",
      favFood: "Punches",
      img: "https://vignette.wikia.nocookie.net/thundercatslair/images/b/b2/Snarf.jpg"
    }
  ]

  cats.forEach(function(cat){
    addCat(cat);
  })

}





const addCat = function(cat){

  const ul = document.querySelector('#cats')


  const ul_cat = document.createElement('ul');
  ul_cat.classList.add('cat')

  const li_name = document.createElement('li');
  li_name.innerText = "Name: " + cat.name;

  const li_favFood = document.createElement('li');
  li_favFood.innerText = `Favourite food: ${cat.favFood}`;

  const li_img = document.createElement('li');
  const img_cat = document.createElement('img');
  img_cat.style.width = "500px";
  img_cat.src = cat.img;
  li_img.appendChild(img_cat);


  ul_cat.appendChild(li_name);
  ul_cat.appendChild(li_favFood);
  ul_cat.appendChild(li_img);
  ul.appendChild(ul_cat);
};


document.addEventListener('DOMContentLoaded', app);
