$(function () {
    var clientsN = projectsN = itemsN = 0;
    numberCounter();

  function numberCounter() {
    var setUp0 = setInterval( countF, 90.909 );
    function countF() {
      clientsN++;
      if( clientsN > 11 ) {clearInterval(setUp0);}
      else {$('.number').eq(0).text(clientsN)}
    } //countF()ends

    var setUp1 = setInterval ( countF1, 47.619);
    function countF1() {
      projectsN++;
      if( projectsN > 21 ) {clearInterval(setUp1);}
      else{$('.number').eq(1).text(projectsN)}
    } //countF1()ends

    var setUp2 = setInterval ( countF2, 32.25 );
    function countF2() {
      itemsN++;
      if( itemsN > 31 ){ clearInterval(setUp2);}
      else{$('.number').eq(2).text(itemsN)}
    }//countF2()ends
  }//numberCounter()ends

});
