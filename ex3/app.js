let hand = ["グー","チョキ","パー"];
let user_hand_num = getHand();

if(user_hand_num != -1){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let judge = winLose(user_hand_num, js_hand_num);

  alert('あなたの選んだ手は' + hand[user_hand_num] + 'です。\nJavaScriptの選んだ手は' + hand[js_hand_num] + 'です。\n結果は' + judge + 'です。');
}else{
  alert("またチャレンジしてね！");
}

function getHand(){
  while(true){
    let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
    let user_hand_num = hand.indexOf(user_hand);
    if(!user_hand || user_hand_num != -1){
      return user_hand_num;
    }else{
      alert("グー・チョキ・パーのいずれかを入力してください。");
    }
  }
}

function winLose(user, js){
  let winLoseStr;
  let winLoseNum = user - js;

  if(winLoseNum == 0){
    winLoseStr = "あいこ";
  }else if(winLoseNum == -1 || winLoseNum == 2){
    // グー(0)-チョキ(1)、チョキ(1)-パー(2)、パー(2)-グー(0)より
    winLoseStr = "勝ち";
  }else{
    winLoseStr = "負け";
  }
  return winLoseStr;
}