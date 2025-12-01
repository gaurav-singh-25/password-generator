//to fetch the box where we have to display the password
const passwordBox=document.getElementById("password");
//setting password length
const length=12;

//storing all upper-case english alphabets
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//storing all lower-case english alphabets
const lowerCase="abcdefghijklmnopqrstuvwxyz";
//storing all digits
const digits="0123456789";
//storing all symbols
const symbols="@#$%^&*()_+~|}{][<>=/-";

//randomly concatenating all the above four
const allChars=upperCase+lowerCase+digits+symbols;

//function to generate random password
function generatePassword()
{
    let password="";

    //logic to generate random password till length=4:
    //randomly generating, fetching(via index), and concatenating upper-case letter
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    //randomly generating, fetching(via index), and concatenating lower-case letter
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    //randomly generating, fetching(via index), and concatenating digit
    password += digits[Math.floor(Math.random() * digits.length)];
    //randomly generating, fetching(via index), and concatenating symbol
    password += symbols[Math.floor(Math.random() * symbols.length)];

    //loop to concatenate random permutations of all above 4 until the password length reached the limit(12)
    while(length > password.length)
    {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    //setting value passwordBox to 'password'
    passwordBox.value=password;
}

//function to copy password
function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");
}