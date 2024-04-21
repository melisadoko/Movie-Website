const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

function handleSearchKeyPress(event) {
  if (event.keyCode === 13) {
    // 13 is the key code for Enter key
    searchMovies();
  }
}

function searchMovies() {
  let movieTitle = document.getElementById("search_input").value.toUpperCase();
  var moviePosters = document.getElementsByClassName("movie-content");

  if (movieTitle !== "") {
    for (var i = 0; i < moviePosters.length; i++) {
      var movieCaption = moviePosters[i]
        .querySelector("figcaption")
        .innerText.trim()
        .toUpperCase();
      if (movieCaption.includes(movieTitle.trim())) {
        ShowFlexElement(moviePosters[i]);
      } else {
        HideFlexElement(moviePosters[i]);
      }
    }
  } else {
    for (var i = 0; i < moviePosters.length; i++) {
      ShowFlexElement(moviePosters[i]);
    }
  }
}

function ShowFlexElement(element) {
  element.closest(".movie").style.display = "block";
}

function HideFlexElement(element) {
  element.closest(".movie").style.display = "none";
}

function saveMovieNameLocalStorage(element) {
  let iframePath;
  let description;
  switch (element.querySelector("img").alt) {
    case "Kung Fu Panda 4 (2024)":
      iframePath =
        "https://www.youtube.com/embed/_inKs4eeHiI?si=lBRjuue_82icWN8t";
      description =
        "Pasi Po caktohet për t'u bërë Udhëheqësi Shpirtëror i Luginës së Paqes, ai duhet të gjejë dhe të trajnojë një Luftëtar të ri Dragoi, ndërsa një magjistare e ligë planifikon të thërrasë të gjithë keqbërësit kryesorë që Po i ka dërguar në mbretërinë e shpirtrave.";
      break;
    case "The Tearsmith (2024)":
      iframePath =
        "https://www.youtube.com/embed/qEh_90RnlD8?si=eBW9Ww5BSq8Nzm4s";
      description =
        "Ndonjëherë, frika jonë më e madhe është të pranojmë, se dikush mund të na dojë sinqerisht për ata që jemi. Nica dhe Rigeli janë gati ta zbulojnë së bashku.";
      break;
    case "Imaginary (2024)":
      iframePath =
        "https://www.youtube.com/embed/Lj0HODMVSnA?si=PVqxq5rz1QdBgxxW";
      description =
        "Një grua kthehet në shtëpinë e saj të fëmijërisë për të zbuluar se miku imagjinar që la pas është shumë i vërtetë dhe i pakënaqur që e braktisi atë.";

      break;
    case "The Settlers (2023)":
      iframePath =
        "https://www.youtube.com/embed/rdy--tzaUeo?si=Icv3UQgEMhSd12GG";
      description =
        "Në Kili në vitin 1901, tre kalorës paguhen për të mbrojtur një pronë të madhe. Një ushtar britanik dhe një mercenar amerikan shoqërohen nga një snajper me racë të përzier, i cili kupton se misioni i tij i vërtetë është të vrasë popullsinë indigjene.";

      break;
    case "Mummies (2023)":
      iframePath =
        "https://www.youtube.com/embed/WRB8YIc4U68?si=qC3CdUa_iGIL26vz";
      description =
        "Tre mumie egjiptiane përfundojnë në Londrën e sotme dhe nisin një udhëtim në kërkim të një unaze të vjetër që i përket familjes mbretërore, të vjedhur nga arkeologu ambicioz Lord Karnabi.";

      break;
    case "Scoop (2024)":
      iframePath =
        "https://www.youtube.com/embed/cZcHc3zEEoc?si=TahKlmP3R_AD_n3A";
      description =
        "Si e mori BBC-ja intervistën bombë me Princin Andrew në lidhje me miqësinë e tij me shkelësin e dënuar seksual Jeffrey Epstein.";

      break;
    case "Ordinary Angles (2024)":
      iframePath =
        "https://www.youtube.com/embed/R1vn8kPgCYA?si=XkTqQyyznJHdK4xX";
      description =
        "Një parukiere në vështirësi gjen një ndjenjë të re qëllimi kur takon një baba të ve që punon shumë për t'u kujdesur për dy vajzat e tij.";

      break;
    case "Art of Love (2024)":
      iframePath =
        "https://www.youtube.com/embed/f77agh-CZ-c?si=Sr-GvLyrqZ3Q4Li7";
      description =
        " Pasi mëson se hajduti i arteve që ajo ka ndjekur është ish i dashuri i saj, një agjente që punon për Interpolin sajon një plan për ta kapur atë në flagrancë.";

      break;
    case "Irish Wish (2024)":
      iframePath =
        "https://www.youtube.com/embed/_gKXowSyfjM?si=0vB7IEGPCe-ULy-e";
      description =
        "Në vitin 1933 në New York, një prodhues filmi tepër ambicioz, bashkë me ekipin e tij detyrohet të hidhet në ekuipazhin e një anije, për të udhëtuar në një ishull misterioz, ku ndeshen me Kong-un, një majmun gjigand, i cili bie në dashuri me protagonisten kryesore, zonjushën Ann Darrow.";

      break;
    case "Money Talks (1997)":
      iframePath =
        "https://www.youtube.com/embed/juTBjT-hzlc?si=frltNJVkvtY9wv4j";
      description =
        "Një xhambaz pasi kërkohet nga policia dhe kriminelët, bën marrëveshje me një gazetar televiziv për mbrojtje.";

      break;
    case "Echo":
      iframePath =
        "https://www.youtube.com/embed/AFUKnherhuw?si=8oCseUAad9HXwHhv";
      description =
        "Jetët e familjes së Mayës varen në fije të perit kur ushtria e Fisk mbërrin në shfaqen e Choctaw Nation.";

      break;
    case "Asbest":
      iframePath =
        "https://www.youtube.com/embed/glgVviYzyLc?si=eWIqoUr5GwKsl5sh";
      description =
        "Ndërsa mendon se ka arritur t'i vërë punët në vijë, Momo gjendet sërish në mes të katër rrugëve. Amari rrëmben Danielën, Jameel shkon pranë xhaxhait, ndërsa kurdi prish marrëveshjen me të. Tani, e vetmja rrugë është t’i marrë vetë gjërat në dorë...";

      break;
    case "Berlin":
      iframePath =
        "https://www.youtube.com/embed/XD_MLvGrGCY?si=KF9RIOi_siKyR88n";
      description =
        "Të gjithë pjesëtarët e grupit arrijnë t'ia mbathin me sukses dhe e vetmja provë që mund të përdoret nga policia për tu rrezikuar jetën ndodhet në duart e një personi të vetëm.";

      break;
    case "A Shop for Killers":
      iframePath =
        "https://www.youtube.com/embed/69nzLpyMSHw?si=ns5QtB3kyjtpd0TK";
      description =
        "Vrasësit futen në magazinën e Jinmanit. Jiana vet-përgatitet për duelin final.";

      break;
    case "Flint":
      iframePath =
        "https://www.youtube.com/embed/dT-Jx3dvMu0?si=VKc14UEwVJpnV1Be";
      description =
        "Ish-ushtari Shamanov mbërrin në një qytet të vogël për të takuar mikun e tij të vjetër, por rastësisht zbulon se vendasit aty jetojnë me frikë për jetën. Ai nuk mund të qëndrojë pa vepruar dhe sulmon autoritetet e mbrapshta të qytetit.";
  }
  var movieTitleObj = {
    title: element.querySelector("img").alt,
    src: iframePath,
    img: element.querySelector("img").src,
    desc: description,
    type: element.previousElementSibling.innerText,
  };
  localStorage.setItem("movieTitle", JSON.stringify(movieTitleObj));
}