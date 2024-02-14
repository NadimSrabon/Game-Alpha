function startPlay(){
    
    const playHome = document.getElementById('home');
    playHome.classList.add('hidden');


    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    continueGame()
}




function generateAlphabet(){
    const alphabate = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets =  alphabate.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const getAlphabet = alphabets[index];
    return getAlphabet

}



function continueGame(){
    const getAlphabet = generateAlphabet();
    console.log('generating random',getAlphabet)


    const elementShow = document.getElementById('element-show');
    elementShow.innerText=getAlphabet;
    addBackgroundColorById(getAlphabet);
}



function addBackgroundColorById(elementId){

    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}