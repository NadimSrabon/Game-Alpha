function startPlay(){
    
    const playHome = document.getElementById('home');
    playHome.classList.add('hidden');


    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    continueGame()
}



function addBackgroundColorById(elementId){

    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function generateAlphabet(){
    const alphabate = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets =  alphabate.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const getAlphabet = alphabets[index];
    return getAlphabet

}

function keyPad(event){
    const playerPressed = event.key;
    console.log('Key Is Pressed',playerPressed)

    // --------Expected To be Pressed--------------

    const elementShow = document.getElementById('element-show');
    const CurrentAlphabet = elementShow.innerText;
    const expectedAlphabet = CurrentAlphabet.toLowerCase();
    console.log('Expected is',elementShow.innerText)
    



    if(playerPressed === expectedAlphabet){
        console.log('Thik Ase')
        // removeBackgroundColorById(elementId);
        continueGame();
        

    }
    else{
        console.log('Thik Nai')
    }




}
document.addEventListener('keyup',keyPad)



function continueGame(){
    const getAlphabet = generateAlphabet();
    console.log('generating random',getAlphabet)


    const elementShow = document.getElementById('element-show');
    elementShow.innerText=getAlphabet;
    addBackgroundColorById(getAlphabet);
}






