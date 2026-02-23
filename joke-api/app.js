async function jokeapi(){
    let k= await fetch("https://official-joke-api.appspot.com/random_joke",{
        method:"GET"
    })
    let data=await k.json();
    console.log(data)
    console.log("anudeep")
    return

}
jokeapi();