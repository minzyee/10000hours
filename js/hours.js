// 모달창
const modal = document.querySelector('.modal');

// 모달창 뒷배경
const modalBg = document.querySelector('.modal-bg');


// 훈련하러가기 버튼 클릭하면, 모달창 보여조
document.querySelector('#go-training').addEventListener('click', function(){
  modal.classList.remove('hide');
  modalBg.classList.remove('hide');
});


// 종료하고 진짜 훈련하러가기 버튼 클릭하면, 모달창 없애조
document.querySelector('#close-btn').addEventListener('click', function(){
  modal.classList.add('hide');
  modalBg.classList.add('hide');
});