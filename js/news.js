
const fetchCategories=()=>{
    const url =("https://openapi.programming-hero.com/api/news/categories")
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCategories(data.data))

};
const showCategories=showCategory=>{
    console.log(showCategory);
    const containerCategory =document.getElementById("categories-container");
     showCategory.news_category.forEach(show=> {
        console.log(show);
        const p = document.createElement('p');
        p.classList.add('nav-link');
        p.innerHTML=`
        <a   href="#" onclick="showIdCategory('${show.category_id}','${show.category_name}')">${show.category_name}</a>
        `
        containerCategory.appendChild(p);
        
      });

}

const showIdCategory=(category_id,category_name)=>{
    // console.log(category_id);
    const url =`https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>showAllData(data.data,category_name))
}

const showAllData=(data,category_name)=>{
    console.log(data,category_name);
   document.getElementById('news-count').innerText=data.length;
   document.getElementById('category-name').innerText=category_name;

}