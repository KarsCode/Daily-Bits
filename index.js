console.log(0);
let a=0;
function searchBar(query){
    
}
let apiKey='00e337ab4e5c43d99fb17167c3fb754f';
let searchQuery='tesla';
let newsAccoridion = document.getElementById('newsAccordion');
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-01-19&sortBy=publishedAt&apiKey=${apiKey}`,true);
xhr.onload = function(){
    if(this.status==200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml="";
        articles.forEach(function(element){
        document.getElementById("para1span").innerHTML=`${element["content"]}`;
        document.getElementById("n1").src=`${element["urlToImage"]}`;
        });
        
    }
    else{
        console.log("Some error has occured")
    }
}

xhr.send()