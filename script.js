var age;
if (( age = prompt("What is your age?", "")) != null )
{
    if (age >=19)
    {
        document.write("You are old enough to drink AND vote in Canada! Make sure you do it.");
    }
    else
    {
        document.write("You can't vote or drink yet, feel free to live without those responsiblites a little longer.");
    }
}
else 
{
    document.write("Too young, sorry.");
}