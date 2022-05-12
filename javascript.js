        b = JSON.parse(localStorage.getItem('familyTree'));
        if (b != null){
            names = b;
        } else{ 
            names = [];
        }

        

        

       
        function writeList(){
            if(pWord.value != rPWord.value){
                alertMatch.innerText = "*Passwords don't match";
            } 
            else{
                if(email.value == ""){
                    alertMatch.innerText = "Please input a valid eMail"
                }else{

                    names.push({
                        "firstName": fName.value, 
                        "lastName": lName.value,
                        "dateOfBirth": dob.value,
                        "userName": uName.value,
                        "eMail": email.value,
                        "passWord":pWord.value
                    });
                    
                    disp();
                    openLogin();
                }
                
            }

            


        }

        function disp(){
            a = JSON.stringify(names);
            localStorage.setItem('familyTree', a);           
            

            ih = "";
            for(i=0;i<names.length;i++){
                ih += `<tr>
                <td> ${(i+1)} </td> 
                <td> ${names[i].firstName} </td> 
                <td> ${names[i].lastName}</td>
                <td> ${names[i].dateOfBirth}</td>
                <td> ${names[i].userName}</td>
                <td> ${names[i].eMail}</td>
                <td> ${names[i].passWord}</td>
                <td onclick='dele(${i})' > <img src='images/bin.png' width='20'></td>
                <td onclick='editNames(${i})'> <img  src='images/edit.png' width='20'> </td>
                <td onclick='updateNames(${i})'> <img src='images/up.png' width='20'></td>
                </tr>`;
            }
            list.innerHTML = ih;

        }

        function dele(n){
            if(confirm('Are you sure you want to delete ' + names[n].firstName + " " + names[n].lastName + ' from this list') == true){
                names.splice(n,1);
                // a = JSON.stringify(names);
                // localStorage.setItem('familyTree', a);
                disp();
            } else{
                alert("No changes were made")
            }
        }

        function editNames(a){
            fName.value = names[a].firstName;
            lName.value = names[a].lastName;
            // a = JSON.stringify(names);
            // localStorage.setItem('familyTree', a);
        }

        function updateNames(s){
            names[s].firstName = fName.value;
            names[s].lastName = lName.value;
            
            disp();
        }

        function logIn(){
            pInp = passW.value;
            eInp = eMail.value;

            var regexForPassword = /^[\w]{1,}$/

            if(regexForPassword.test(pInp)){

                for(i in names){
                    if(names[i].eMail  == eInp && names[i].passWord == pInp){
                        myIndex =i; 
                        
                        localStorage.setItem('index', myIndex); 
                        openDash();
                    } else{
                        if(eInp == "" || pInp == ""){
                            document.getElementById('smallA').innerText = 'Email or Password Cannot be Empty' ;
                        }else{
                            document.getElementById('smallA').innerText = 'Invalid Email and Password ' ;
                        }
                        
                    }
                }
            }else{
                document.getElementById('smallA').innerText = 'Password must be a least 7 characters' ;
            }


            
           
        }
        function openLogin(){
            location.href = "index.html"
        }

        function openDash(){
            location.href = "dashboard.html"
        }


        function welc(){
            a = localStorage.getItem('index');
            
            document.getElementById('welcome').innerText = "Welcome " + names[a].firstName;
            
            da = new Date()
            document.getElementById('time').innerText = "Today's date is: " + da;
        }