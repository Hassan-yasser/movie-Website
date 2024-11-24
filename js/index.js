"use strict";$(".openNav").on("click",(function(){$(".sideNave").css("transform","translateX(0%)"),$(".slide1").animate({top:"0%"},600,(function(){$(".slide2").animate({top:"0%"},200,(function(){$(".slide3").animate({top:"0%"},200,(function(){$(".slide4").animate({top:"0%"},200,(function(){$(".slide5").animate({top:"0%"},200,(function(){}))}))}))}))})),$(".openNav").hide(500),$(".closeNav").show(500)})),$(".closeNav").on("click",(function(){$(".sideNave").css("transform","translateX(-74%)"),$(".slide1").animate({top:"100%"},1,(function(){$(".slide2").animate({top:"100%"},1,(function(){$(".slide3").animate({top:"100%"},1,(function(){$(".slide4").animate({top:"100%"},1,(function(){$(".slide5").animate({top:"100%"},1,(function(){}))}))}))}))})),$(".openNav").show(500),$(".closeNav").hide(500)}));const topScroll=document.querySelector(".topScroll");topScroll.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),window.onscroll=function(){this.scrollY>=600?topScroll.classList.add("comeBackPosition"):topScroll.classList.remove("comeBackPosition")};let checkRateToStars=[];function loading(){$(".hidePage").hide(1,(()=>{$(".parent").fadeIn(200,(()=>{$(".parent").fadeOut(300,(()=>{$(".sideNave").css("display","flex"),$(".loadingData").fadeIn(400)}))}))}))}async function getRandomMovie(){let e=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false");e=await e.json(),checkRateToStars.push(...e.results),document.querySelector(".changeApiTittle").innerHTML="Playing Now",null!=e&&$(".parent").fadeOut(3e3,(()=>{$(".sideNave").css("display","flex"),$(".loadingData").fadeIn(400),displayData(e.results)}))}getRandomMovie();let srcImg="https://image.tmdb.org/t/p/w500/";function displayData(e){let a="";for(let t=0;t<e.length;t++)a+=`\n\n                  <div class="col-sm-12 col-lg-6 col-xl-4  p-3 animateJquery ">\n                <div class="item position-relative h-100 w-100 rounded-4">\n                    <img src="${srcImg+e[t].poster_path}" class="w-100" alt="">\n                    <div class=" position-absolute top-0 start-0 bottom-0 end-0 h-100 w-100 px-3 py-3  layer">\n                        <h2 class="title position-relative text-light text-center editFonts">${e[t].original_title}</h2>\n                        <p class="desMovie text-light  editFonts ">${e[t].overview}</p>\n                        <div class="stars position-relative">\n                            <p class="DateMovie mb-4 text-light   ">${e[t].release_date}</p>\n                            ${e[t].vote_average>=5&&e[t].vote_average<=7?'<i class="fa-solid text-warning fa-star"></i><i class="fa-solid text-warning fa-star"></i><i class="fa-solid text-warning fa-star"></i>':""}\n                            ${e[t].vote_average>7&&e[t].vote_average<9?'<i class="fa-solid text-warning fa-star"></i><i class="fa-solid text-warning fa-star"></i><i class="fa-solid text-warning fa-star"></i><i class="fa-solid text-warning fa-star"></i>':""}\n                            ${e[t].vote_average>=9?'<i class="fa-solid text-warning fa-star"></i><i class="fa-solid text-warning fa-star"></i><i class="fa-solid text-warning fa-star"></i><i class="fa-solid text-warning fa-star"></i><i class="fa-solid text-warning fa-star"></i>':""}\n                            ${e[t].vote_average>1&&e[t].vote_average<5?'<i class="fa-solid text-warning fa-star"></i>':""}\n                            <div class="rounded-circle rateC text-light mt-2 ms-1 editFonts">\n                             ${e[t].vote_average.toFixed(1)}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n      \n\n      \n`;document.querySelector(".row").innerHTML=a}let searchValue=document.querySelector("#Search");async function getSearchMovie(e){e=searchValue.value,console.log(e),document.querySelector(".changeApiTittle").innerHTML="Movies Searched";let a=await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`);a=await a.json(),console.log(a.results),null!=a&&$(".parent").fadeOut(100,(()=>{$(".sideNave").css("display","flex"),$(".loadingData").fadeIn(400),displayData(a.results)}))}searchValue.addEventListener("input",(()=>{$(".parent").fadeIn(200,(()=>{$(".parent").fadeOut(150,(()=>{$(".sideNave").css("display","flex"),$(".loadingData").fadeIn(30)}))})),""==searchValue.value?getRandomMovie():getSearchMovie()}));const playingNow=document.querySelector(".NowPlayingData");playingNow.addEventListener("click",(()=>{loading(),getRandomMovie()}));const popularData=document.querySelector(".popularData");async function getPopularMovie(){let e=await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44");e=await e.json(),null!=e&&$(".parent").fadeOut(3e3,(()=>{$(".sideNave").css("display","flex"),$(".loadingData").fadeIn(400),displayData(e.results)}))}popularData.addEventListener("click",(()=>{$(".sideNave").css("transform","translateX(-74%)"),$(".openNav").show(500),$(".closeNav").hide(500),loading(),document.querySelector(".changeApiTittle").innerHTML="Popular",getPopularMovie()}));const TopRatedData=document.querySelector(".TopRatedData");async function getTopRatedData(){let e=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44");e=await e.json(),null!=e&&$(".parent").fadeOut(3e3,(()=>{$(".sideNave").css("display","flex"),$(".loadingData").fadeIn(400),displayData(e.results)}))}TopRatedData.addEventListener("click",(()=>{$(".sideNave").css("transform","translateX(-74%)"),$(".openNav").show(500),$(".closeNav").hide(500),loading(),document.querySelector(".changeApiTittle").innerHTML="Top Rated",getTopRatedData()}));const TrendingData=document.querySelector(".TrendingData");async function getTrendingData(){let e=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false");e=await e.json(),null!=e&&$(".parent").fadeOut(3e3,(()=>{$(".sideNave").css("display","flex"),$(".loadingData").fadeIn(400),displayData(e.results)}))}TrendingData.addEventListener("click",(()=>{$(".sideNave").css("transform","translateX(-74%)"),$(".openNav").show(500),$(".closeNav").hide(500),loading(),document.querySelector(".changeApiTittle").innerHTML="Trending",getTrendingData()}));const UpcomingData=document.querySelector(".UpcomingData");async function getUpcomingData(){let e=await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44");e=await e.json(),null!=e&&$(".parent").fadeIn(3e3,(()=>{$(".sideNave").css("display","flex"),$(".loadingData").fadeIn(400),displayData(e.results)}))}function valid(e){let a=e;1=={nameInput:/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,emailInput:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,PhoneInput:/^[0-9]{11}$/,PassInput:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/}[e.id].test(e.value)?("nameInput"==e.id&&$(".NameE").fadeOut(400),"emailInput"==e.id&&$(".emailE").fadeOut(400),"PhoneInput"==e.id&&$(".PhoneE").fadeOut(400),"PassInput"==e.id&&$(".PassE").fadeOut(400),a.classList.remove("ErrorRegex")):("nameInput"==e.id&&$(".NameE").fadeIn(400),"emailInput"==e.id&&$(".emailE").fadeIn(400),"PhoneInput"==e.id&&$(".PhoneE").fadeIn(400),"PassInput"==e.id&&$(".PassE").fadeIn(400),a.classList.add("ErrorRegex"))}function validRepass(){const e=document.getElementById("PassInput"),a=document.getElementById("RepassInput");if(a.value==e.value)return a.classList.remove("ErrorRegex"),$(".RePassE").fadeOut(400),!0;$(".RePassE").fadeIn(400),a.classList.add("ErrorRegex")}function validAge(){const e=document.getElementById("ageInput");if(console.log(e.value),e.value>15)return e.classList.remove("ErrorRegex"),$(".ageE").fadeOut(400),!0;$(".ageE").fadeIn(400),e.classList.add("ErrorRegex")}UpcomingData.addEventListener("click",(()=>{$(".sideNave").css("transform","translateX(-74%)"),$(".openNav").show(500),$(".closeNav").hide(500),loading(),document.querySelector(".changeApiTittle").innerHTML="Upcomming",getUpcomingData()}));