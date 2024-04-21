(function(){
    //ky funksion do egzekutohet ne cdo file qe do jete profile pic dhe do ngarkohet fotoja jone
    //ose fotoja e marre nga imazhet ne projektin tone
    function checkProfilePic(){
      if(localStorage.getItem("profile_pic")!=null)
      {
        var div=document.getElementById("default_profile_pic");
        div.style.backgroundImage="url("+localStorage.getItem("profile_pic")+")";
        div.style.backgroundSize="cover";
      }
      else{
        var container = document.getElementById('default_profile_pic');
        container.style.backgroundImage = "url('../images/user.png')";
      }
  }
  checkProfilePic();
  })();

  // ky funksion ben ngarkimin e fotos se profilit dhe ruajtjes se blobit ne localStorage
  function UploadImg(event){
      var imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'];
      var filename=event.target.files[0].name
      var ext=filename.substring(filename.lastIndexOf('.')+1);
      ext=ext.toLowerCase();
      
      if(imageExtensions.includes(ext)){    
      var div=document.getElementById("default_profile_pic");
      var url=URL.createObjectURL(event.target.files[0]);
      div.style.backgroundImage="url("+url+")";
      div.style.backgroundSize="cover";
      localStorage.setItem("profile_pic", url)
    }
  }
  
(function(){
    //ketu kemi nje funksion qe egzekutohet ne cdo load te faqes
    //kemi vlerat data te chartit te pare ku perdorim chart js
    const data = {
        labels: ['Aksion', 'Komedi', 'Dramë', 'Fantashkencë', 'Horror', 'Aventurë'],
        datasets: [{
            data: [20, 15, 10, 25, 15, 15], // Perqindjet percdo zhaner ne listen siper
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    
    //ketu eshte konfigurimi i chartit te pare, qe do jete i tipit doughnut, i japim te dhenat
    //dhe i vendosim titullin
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Zhanerat më të ndjekur',
                    font:{
                        size:18
                    }
                }
            }
        },
    };
    
    //ketu krijohet charti ku merret elementi me id 'genre_chart'
    var myChart = new Chart(document.getElementById('genre_chart'),config);

    //njelloj si per chartin e mesiperm ketu kemi vlerat per chartin tjeter por ketu kemi ndryshim
    // sepse charti do jete me kolona 
    const data2 = {
        labels: ['E hënë', 'E martë', 'E mërkurë', 'E enjte', 'E premte', 'E shtunë', 'E dielë'],
        datasets: [{
            label: 'Mesatarja e Kohës së Kaluar (orë)',
            data: [3, 4, 3.5, 4.5, 5, 4, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };
    
    //bejme konfigurimin e chartit te dyte qe do jete me kolona
    const config2 = {
        type: 'bar',
        data: data2,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Orët'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Mesatarja e Kohës së Kaluar në Javë',
                    font:{
                        size:18
                    }
                }
            }
        },
    };
    
    //ketu e krijojme chartin e dyte per perdorimin e websitet gjate javes se fundit
    var myChart2 = new Chart(
        document.getElementById('time_spent_chart'),config2);

        //ketu marrim informacionet nga localStorage per te mbushur me te dhena pamjen
        //perdoret localStorage ne mungesen e pjese back-end
    function GetInfo(){
        
        var user=localStorage.getItem("user");
        var text='Perdorues';
        if(user!=null)
        {
            if(JSON.parse(user).name!=null)
            text=JSON.parse(user).name;
            if(JSON.parse(user).gender=='Male')
            {
                document.getElementById("male").style.display="inline";
            }
            else{
                document.getElementById("female").style.display="inline";
            }
            document.getElementById('email').innerText=JSON.parse(user).email;
            document.getElementById('phone_number').innerText=JSON.parse(user).phone;
            document.getElementById('birthday').innerText=JSON.parse(user).birthDay;

        }
        document.getElementById('name').innerText=text;
    }  
    GetInfo();
})();

//ky eshte funksioni per heqjen e fotos se vendosur nga ne dhe vendosjes se nje fotoje gjenerike
function removePhoto(){
    var container = document.getElementById('default_profile_pic');
    container.style.backgroundImage = "url('../images/user.png')";
    localStorage.removeItem('profile_pic');
}

// te ky funksion bejme stilizimin e fushave input ne varesi te neqofte se jane fusha tekst
// dhe nese jane plotesuar ne rregull ose jo. gjithashtu kalohet si parameter edhe id e errorit qe ka secila fushe
  function ValidationStyling(objekti, lloji, error){
    var e=document.getElementById(error).style
if(objekti.classList.contains("text_inputs"))
    {
        objekti.style.border="0";
    if(lloji==true)
    {
        objekti.style.borderBottom="1px solid green";
        objekti.style.color="green";
        e.display='none';
    }
    else{
        objekti.style.borderBottom="1px solid red";
        objekti.style.color="red";
        e.display="block";
        }

}else{
    if(lloji==false)
    {
        e.display="block";
    }
}
}

//ne kete funksion behet validimi i passowrdit me regex
//qe te kete te pakten 8 karaktere, 1 shkronje te madhe, 1 te vogel, 1 numer dhe 1 karakter special
function ValidateNewPswd(){
    var password=document.getElementById('new_pswd').value;
    password_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.,*?&])[A-Za-z\d@$.,!%*?&]{8,}$/;
    var check=false;

    if(password_regex.test(password))
    {
        check=true;
    }
    ValidationStyling(document.getElementById('new_pswd'),check, "password_error");

    return check;
}

//ketu behet kontrolli i passowrdit ne fushen 'konfirmo fjalekalimin' me ate nje fushe me siper
function ConfirmNewPswd(){
    var password=document.getElementById('new_pswd').value;
    var password2=document.getElementById('confirm_new_pswd').value;
    var check=false;
    if(password===password2 && password.length!=0)
    {
        check=true;
    }
    ValidationStyling(document.getElementById('confirm_new_pswd'),check, "confirmPwd_error");

    return check;
}

// ketu merret vlera e passwordit nga localStorage dhe kontrollohet me vleren e vendosur ne fushen per fjalekalimin egzistues
function ValidateOldPswd(){
    var oldPswd=document.getElementById('existing_pswd').value;
    var userPswd=JSON.parse(localStorage.getItem("user")).password;
    var check=false;
    if(oldPswd===userPswd)
    check=true;
    ValidationStyling(document.getElementById('existing_pswd'),check, "existing_pswd_error");
return check;
}

//ketu validohet numri i telefonit sipas standartit kombetar shqipetar
function ValidatePhone(){
    var phone=document.getElementById('phone').value;
    phone_regex=/06[7-9][0-9]{7}/;
    var check=false;

    if(phone_regex.test(phone))
    {
        check=true;
    }
    ValidationStyling(document.getElementById('phone'),check, "phone_error");

    return check;
}

//ky funksion behet trigger ne momentin qe shtypim butonin e ruajtjes se ndryshimeve dhe kontrollohen te gjitha fushat
// dhe behet ndryshimi tek vlerat e localStorage dhe gjithashtu nje reload i faqes
document.getElementById('save_changes').addEventListener('click', function(event) {
    event.preventDefault();
    
    var user=JSON.parse(localStorage.getItem("user"));
    var v_phone=true;
    if(document.getElementById('phone').value!='')
    {
        v_phone=ValidatePhone();
        if(v_phone)
        {
            user.phone=document.getElementById('phone').value;
        }
    }

var v_password = true;
if (document.getElementById('new_pswd').value !== '') {
    v_password = ValidateNewPswd();
    if(v_password)
    {
        user.password=document.getElementById('new_pswd').value;

    }
}

var v_password2 = true;
if (document.getElementById('confirm_new_pswd').value !== '') {
    v_password2 = ConfirmNewPswd();
}

var v_old_password = true;
if (document.getElementById('existing_pswd').value !== '') {
    v_old_password = ValidateOldPswd();
}

var check = v_phone && v_password && v_password2 && v_old_password;

    if(check)
    {
        localStorage.setItem('user', JSON.stringify(user));
        location.reload()

    }
});