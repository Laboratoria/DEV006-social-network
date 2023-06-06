function wall(navigateTo){
    const headerWall = document.createElement('header');
    const ctnHeader = document.createElement('div');
    const imgHeader = document.createElement('img');
    const btnLogOut = document.createElement('button');
    const mainWall = document.createElement('main');
    const section1 = document.createElement('section');
    const newPost = document.createElement('div');
    const inputPost = document.createElement("input");
    const btnPost = document.createElement('button');
    const ctnPost= document.createElement('ul');
    const liPost= document.createElement ('li');

    headerWall.setAttribute ("id", "header");
    ctnHeader.setAttribute ('id','container-1');
    imgHeader.setAttribute ('id','img-logo');
    btnLogOut.setAttribute ('id','logOut');
    mainWall.setAttribute ('id','mainWall');
    section1.setAttribute ('id','section1');
    newPost.setAttribute ('id','divNewPost');
    inputPost.setAttribute ('id','inputNewPost');
    ctnPost.setAttribute ('id','post');
    liPost.setAttribute ('id','newPost');

    inputPost.placeholder='¡Comparte tus eventos!'
    btnPost.textContent = 'PUBLICAR';

    headerWall.append(imgHeader,btnLogOut);
    mainWall.append (section1,newPost,inputPost,ctnPost,liPost);






}
export default wall; 