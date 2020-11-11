function OnButtonClick() {
  // 経験値テーブル 
  const exp_table = [
   [0,0]
  ,[1000,200]
  ,[2325,465]
  ,[4025,805]
  ,[6175,1235]
  ,[8800,1760]
  ,[11950,2390]
  ,[15675,3135]
  ,[20025,4005]
  ,[25025,5005]
  ,[30725,6145]
  ,[37175,7435]
  ,[44400,8880]
  ,[52450,10490]
  ,[61375,12275]
  ,[71200,14240]
  ,[81950,16390]
  ,[93675,18735]
  ,[106400,21280]
  ,[120175,24035]
  ,[135050,47010]
  ,[151850,50370]
  ,[169850,53970]
  ,[189100,57820]
  ,[209650,61930]
  ,[231525,66305]
  ,[254775,70955]
  ,[279425,75885]
  ,[305525,81105]
  ,[333100,86620]
  ,[362200,92440]
  ,[392850,98570]
  ,[425100,105020]
  ,[458975,111795]
  ,[494525,118905]
  ,[531775,126355]
  ,[570750,134150]
  ,[611500,142300]
  ,[654075,150815]
  ,[698500,159700]
  ,[744800,208960]
  ,[795425,219085]
  ,[848125,229625]
  ,[902900,240580]
  ,[959800,251960]
  ,[1018875,263775]
  ,[1080150,276030]
  ,[1143675,288735]
  ,[1209475,301895]
  ,[1277600,315520]
  ,[1348075,389615]
  ,[1424575,404915]
  ,[1503625,420725]
  ,[1585275,437055]
  ,[1669550,453910]
  ,[1756500,471300]
  ,[1846150,489230]
  ,[1938550,507710]
  ,[2033725,526745]
  ,[2131725,546345]
  ,[2232600,646520]
  ,[2341550,668310]
  ,[2453600,690720]
  ,[2568775,713755]
  ,[2687100,737420]
  ,[2808625,761725]
  ,[2933400,786680]
  ,[3061475,812295]
  ,[3192875,838575]
  ,[3327650,865530]
  ,[3465825,993165]
  ,[3614525,1022905]
  ,[3766900,1053380]
  ,[3922975,1084595]
  ,[4082800,1116560]
  ,[4246400,1149280]
  ,[4413825,1182765]
  ,[4585125,1217025]
  ,[4760350,1252070]
  ,[4939525,1287905]
  ];

  // キャラクター個別情報
  const chara_info = [
   ["","","特産品","通常素材(★1)","通常素材(★2)","通常素材(★3)"]
  ,["タルタリヤ","水","星螺","新兵の記章","士官の記章","尉官の記章"]
  ,["ディオナ","氷","ドドリアン","牢固な矢先","鋭利な矢先","歴戦の矢先"]
  ,["アンバー","炎","イグサ","牢固な矢先","鋭利な矢先","歴戦の矢先"]
  ,["バーバラ","水","慕風のマッシュルーム","占いの絵巻","封魔の絵巻","禁呪の絵巻"]
  ,["北斗","雷","夜泊石","宝探しの鴉マーク","シルバーの鴉マーク","ゴールドの鴉マーク"]
  ,["ベネット","炎","風車アスター","宝探しの鴉マーク","シルバーの鴉マーク","ゴールドの鴉マーク"]
  ,["重雲","氷","石珀","破損した仮面","汚れた仮面","不吉な仮面"]
  ,["ディルック","炎","イグサ","新兵の記章","士官の記章","尉官の記章"]
  ,["フィッシュル","雷","イグサ","牢固な矢先","鋭利な矢先","歴戦の矢先"]
  ,["ジン","風","蒲公英の種","破損した仮面","汚れた仮面","不吉な仮面"]
  ,["ガイア","氷","ドドリアン","宝探しの鴉マーク","シルバーの鴉マーク","ゴールドの鴉マーク"]
  ,["刻星","雷","石珀","トリックフラワーの蜜","微光花の蜜","原素花の蜜"]
  ,["クレー","炎","慕風のマッシュルーム","占いの絵巻","封魔の絵巻","禁呪の絵巻"]
  ,["リサ","雷","ヴァルベリー","スライムの液体","スライムの分泌物","スライムのピュレ"]
  ,["モナ","水","慕風のマッシュルーム","トリックフラワーの蜜","微光花の蜜","原素花の蜜"]
  ,["凝光","岩","琉璃百合","新兵の記章","士官の記章","尉官の記章"]
  ,["ノエル","岩","ヴァルベリー","破損した仮面","汚れた仮面","不吉な仮面"]
  ,["七七","氷","琉璃袋","占いの絵巻","封魔の絵巻","禁呪の絵巻"]
  ,["レザー","雷","ググプラム","破損した仮面","汚れた仮面","不吉な仮面"]
  ,["スクロース","風","風車アスター","トリックフラワーの蜜","微光花の蜜","原素花の蜜"]
  ,["主人公","主","風車アスター","破損した仮面","汚れた仮面","不吉な仮面"]
  ,["ウェンティ","風","セシリアの花","スライムの液体","スライムの分泌物","スライムのピュレ"]
  ,["香菱","炎","絶雲の唐辛子","スライムの液体","スライムの分泌物","スライムのピュレ"]
  ,["行秋","水","霓裳花","破損した仮面","汚れた仮面","不吉な仮面"]
  ];

  // 入力内容取得
  let org = Number(document.getElementById("input_org").value); // 現在Lv
  let nxt = Number(document.getElementById("input_nxt").value); // 目標Lv
  let brk_org = Number(document.getElementById("input_break_org").value); // 現在Lv突破 0:なし 1:あり
  let brk_nxt = Number(document.getElementById("input_break_nxt").value); // 目標Lv突破 0:なし 1:あり
  let chara = document.getElementById("input_chara").selectedIndex;       // キャラ選択(index)
  
  let result_tables = [document.getElementById("result_table")
                      ,document.getElementById("result_table2")
                      ,document.getElementById("result_table3")];


  // 計算処理開始
  if(org > 0 && org <= exp_table.length && nxt > 0 && nxt <= exp_table.length && org <= nxt){
    // エラーメッセージクリア
    document.getElementById("result_message").innerHTML = "<div id=\"result_message\"></div>";

    // 経験値・モラ
    let result_exp = exp_table[nxt-1][0] - exp_table[org-1][0];
    let result_mor = exp_table[nxt-1][1] - exp_table[org-1][1];
    if(brk_nxt==1){
      if(nxt==20)result_mor+= 20000;
      if(nxt==40)result_mor+= 40000;
      if(nxt==50)result_mor+= 60000;
      if(nxt==60)result_mor+= 80000;
      if(nxt==70)result_mor+=100000;
      if(nxt==80)result_mor+=120000;
    }
    if(brk_org==1){
      if(org==20)result_mor-= 20000;
      if(org==40)result_mor-= 40000;
      if(org==50)result_mor-= 60000;
      if(org==60)result_mor-= 80000;
      if(org==70)result_mor-=100000;
      if(org==80)result_mor-=120000;
    }

    result_tables[0].rows[1].cells[0].firstChild.data = Math.ceil(result_exp / 20000); // 星4経験値本：必要数
    result_tables[0].rows[1].cells[1].firstChild.data = Math.ceil(result_exp /  5000); // 星3経験値本：必要数
    result_tables[0].rows[1].cells[2].firstChild.data = Math.ceil(result_exp /  1000); // 星2経験値本：必要数
    result_tables[0].rows[1].cells[3].firstChild.data = result_mor.toLocaleString('ja-JP'); // 必要モラ

    // 必要素材カウント(0:特産, 1:魔物星1, 2:魔物星2, 3:魔物星3, 4:精鋭, 5:属性星2, 6:属性星3, 7:属性星4, 8:属性星5) * 現在値・目標値
    let need_mat = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
    for (let i = 0; i < 2; i++) {
      let tgt_lv = (i==0 ? org + brk_org : nxt + brk_nxt);
      if(tgt_lv > 20){
        need_mat[0][i] += 3;
        need_mat[1][i] += 3;
        need_mat[5][i] += 1;
      }
      if(tgt_lv > 40){
        need_mat[0][i] += 10;
        need_mat[1][i] += 15;
        need_mat[4][i] += 2;
        need_mat[6][i] += 3;
      }
      if(tgt_lv > 50){
        need_mat[0][i] += 20;
        need_mat[2][i] += 12;
        need_mat[4][i] += 4;
        need_mat[6][i] += 6;
      }
      if(tgt_lv > 60){
        need_mat[0][i] += 30;
        need_mat[2][i] += 18;
        need_mat[4][i] += 8;
        need_mat[7][i] += 3;
      }
      if(tgt_lv > 70){
        need_mat[0][i] += 45;
        need_mat[3][i] += 12;
        need_mat[4][i] += 12;
        need_mat[7][i] += 6;
      }
      if(tgt_lv > 80){
        need_mat[0][i] += 60;
        need_mat[3][i] += 24;
        need_mat[4][i] += 20;
        need_mat[8][i] += 6;
      }
    }
    for (let i = 0; i < 4; i++) {
      result_tables[1].rows[0].cells[i].firstChild.data = chara_info[chara][i+2];
      result_tables[1].rows[1].cells[i].firstChild.data = need_mat[i][1] - need_mat[i][0];
    }
    for (let i = 0; i < 5; i++) {
      if(i==0 && chara_info[chara][1]=="主")
        result_tables[2].rows[1].cells[i].firstChild.data = 0;
      else
        result_tables[2].rows[1].cells[i].firstChild.data = need_mat[i+4][1] - need_mat[i+4][0];
    }
  }else{
    // エラーメッセージ表示
    document.getElementById("result_message").innerHTML = "<div id=\"result_message\"class=\"alert alert-danger\" role=\"alert\">エラー：レベル入力が不正です</div>";
  }
}