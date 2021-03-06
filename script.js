$(document).ready(function() {  

  $('select').on('change', function() {      
    
    $('.grid').html('');
    
    var autoMate = '';
    var gridjust = $('#grid-just').val() || "none";        
    var gridlign = $('#grid-align').val() || "start";
    var gridgaps = $('#grid-gaps').val() || "15px";
    
    /* adjust number of columns */
    for (i = 1; i<=parseInt($('#grid-cols').val(),10); i++) {
      var columnContent = '<div>';
      for (j = 1; j <= i; j++) {
        columnContent += i + '<br />';
      }
      columnContent += '</div>';
      autoMate += ' auto';
      $('.grid').append(columnContent);
    }    
    
    /* visual output */
    $('.grid').css('grid', 'auto /' + autoMate);
    $('.grid').css('justify-items', gridjust);
    $('.grid').css('align-items', gridlign);
    $('.grid').css('grid-gap', gridgaps);    
    
    /* code output */
    $('.code-gaps').html('grid-gap: ' + gridgaps + ';');
    $('.code-grid').html('grid: auto / ' + autoMate + ';');
    $('.code-just').html('justify-items: ' + gridjust + '; ');
    $('.code-lign').html('align-items: ' + gridlign + ';');    
    
  });

  /* https://stackoverflow.com/a/40158516 */
  $.fn.removeClassStartingWith = function (filter) {
    $(this).removeClass(function (index, className) {
        return (className.match(new RegExp("\\S*" + filter + "\\S*", 'g')) || []).join(' ')
    });
    return this;
  };
  
});