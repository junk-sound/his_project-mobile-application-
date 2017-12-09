var BBS = {};

BBS.getTestData = function() {
   var rows = [], row1 = {}, row2 = {}, row3 = {};
   row1.idx = 1;
   row1.subject = 'Hello? wanna language exchange with u';
   row1.readCount = 3;
   row1.content = 'Hello nice to meet u. My name is Shawn Killian from USA. Im 22 year old ';
   row1.inputUserName = 'Shwan Killian';
   row1.inputDate = '2017-12-01';
   row1.updateDate = '2017-12-01';
   row1.nation = 'U.S.A'
   row1.gender = 'M'

   row2.idx = 2;
   row2.subject = 'Nice to meet u Im courtney from au';
   row2.readCount = 7;
   row2.content = 'hello. im eager to study korean. im struggling to study but hard. wanna study together. im 24 years old, female. text me on the bar.';
   row2.inputUserName = 'Courtney Webster';
   row2.inputDate = '2017-12-02';
   row2.updateDate = '2017-12-02';
   row2.nation = 'Au'
   row2.gender = 'F'

   row3.idx = 3;
   row3.subject = '안녕하세요? lets be friends!';
   row3.readCount = 2;
   row3.content = '안녕하세요? 저는 한국의 김명회입니다. 26살이고, 남자예요. 영어를 공부하고 있는데 혼자 하니 재미 없네요. wanna language exchange with international students! i can show u many places to visit. lets hangout together.';
   row3.inputUserName = '김명회';
   row3.inputDate = '2017-12-03';
   row3.updateDate = '2017-12-03';
   row3.nation = 'Kr'
   row3.gender = 'M'

    
   rows.push(row1);
   rows.push(row2);  
   rows.push(row3); 
   return rows;
}

BBS.display = function(rows) {
    var listArea = $('#bbsListArea');
    var html = null;
     
    COMM.loadTemplate('bbs_list_line', function() {
        for (var inx=0; inx<rows.length; inx++) {
            rows[inx].additionalInfo = rows[inx].updateDate + ' | ' +   rows[inx].inputUserName + ' | ' + rows[inx].nation + ' | ' + rows[inx].gender + ' | ' + ' (' + rows[inx].readCount + ')'
            html = COMM.getHTMLObj('bbs_list_line', rows[inx]);
            html.find('.bbs_list_txt').attr('data', JSON.stringify(rows[inx]));
            html.find('.bbs_list_txt').on('click', function(event) {
                COMM.movePage('./hisp_3_study_LanguageExchange_Bulletin.html', $(this).attr('data'));
            });
            listArea.append(html);
        }
    });
}






$(document).ready(function() {
   BBS.display(BBS.getTestData());
});
